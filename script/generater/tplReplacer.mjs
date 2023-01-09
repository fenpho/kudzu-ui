import handlebars from 'handlebars'
import fs from 'fs-extra'
import path, { resolve } from 'path'
import { fileURLToPath } from 'url'
const filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename)

// 组件相关
const getTplFilePath = (meta) => ({
  // docs 目录
  readme: {
    from: './.template/packages/components/docs/README.md.tpl',
    to: `../../packages/components/${meta.compName}/docs/README.md`
  },
  // demo 目录
  demo: {
    from: './.template/packages/components/demo/base.vue.tpl',
    to: `../../packages/components/${meta.compName}/demo/base.vue`
  },
  // src 目录
  tsx: {
    from: './.template/packages/components/src/index.tsx.tpl',
    to: `../../packages/components/${meta.compName}/src/index.tsx`
  },
  less: {
    from: './.template/packages/components/src/index.less.tpl',
    to: `../../packages/components/${meta.compName}/src/index.less`
  },
  // 根目录
  index: {
    from: './.template/packages/components/index.ts.tpl',
    to: `../../packages/components/${meta.compName}/index.ts`
  },
})

const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta)
  Object.keys(filePaths).forEach(key => {
    const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), 'utf-8')
    const fileContent = handlebars.compile(fileTpl)(meta)
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, err => {
      if (err) console.log(err)
    })
  })
}

// 读取 packages/list.json 并更新
const listJsonTplReplacer = (meta) => {
  const listFilePath = '../../packages/list.json'
  const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8')
  const listFileContent = JSON.parse(listFileTpl)
  listFileContent.push(meta)
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
  fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, err => {
    if (err) console.log(err)
  })
  return listFileContent
}

// 更新 router.ts
const routerTplReplacer = (listFileContent) => {
  const routerFileFrom = './.template/examples/router.ts.tpl'
  const routerFileTo = '../../examples/router.ts'
  const routerFileTpl = fs.readFileSync(resolve(__dirname, routerFileFrom), 'utf-8')
  const routerMeta = {
    routes: listFileContent.map(comp => {
      if (comp.compName === 'Button') return
      return `{
        title: '${comp.compCnName}',
        name: '${comp.compName}',
        path: '/components/${comp.compName.toLowerCase()}',
        component: () => import('../packages/components/${comp.compName}/docs/README.md'),
      }`
    })
  }
  const routerFileContent = handlebars.compile(routerFileTpl, { noEscape: true })(routerMeta)
  fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, err => {
    if (err) console.log(err)
  })
}

// 更新 index.ts
const installTsTplReplacer = (listFileContent) => {
  const installFileFrom = './.template/packages/index.ts.tpl'
  const installFileTo = '../../packages/index.ts'
  const installFileTpl = fs.readFileSync(resolve(__dirname, installFileFrom), 'utf-8')
  const installMeta = {
    importPlugins: listFileContent.map(({ compName }) => `import { Ku${compName}Plugin } from './components/${compName}';`).join('\n'),
    installPlugins: listFileContent.map(({ compName }) => `Ku${compName}Plugin.install?.(app);`).join('\n    '),
    exportPlugins: listFileContent.map(({ compName }) => `export * from './components/${compName}'`).join('\n'),
  }
  const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })(installMeta)
  fs.outputFile(resolve(__dirname, installFileTo), installFileContent, err => {
    if (err) console.log(err)
  })
}

export default (meta) => {
  compFilesTplReplacer(meta)
  const listFileContent = listJsonTplReplacer(meta)
  routerTplReplacer(listFileContent)
  installTsTplReplacer(listFileContent)

  console.log(`组件新建完毕，请前往 packages/components/${meta.compName} 目录进行开发`);
}