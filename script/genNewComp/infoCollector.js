const inquirer = require('inquirer')
const fs = require('fs-extra')
const { resolve } = require('path')

const listFilePath = '../../packages/list.json'

const RegxMap = {
  IS_COMP_NAME: /^[A-Z]/,
  IS_COMP_CN_NAME: /^[\u4e00-\u9fa5]*$/
}

const kebabCase = string => string
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, '-')
  .toLowerCase();

module.exports = async () => {
  const meta = await inquirer
    .prompt([
      {
        type: 'input',
        message: '请输入你要新建的组件名（纯英文，大写开头）：',
        name: 'compName',
        validate(answer) {
          const done = this.async()
          const validateRes = RegxMap.IS_COMP_NAME.test(answer)
          if (!validateRes) {
            done('请按要求输入正确的组件名！')
            return
          }
          const listData = fs.readJSONSync(resolve(__dirname, listFilePath))
          if (listData.find(item => item.compName === answer)) {
            done('已存在同名组件，请确认后更换名字再重试。')
            return
          }
          done(null, true)
        }
      },
      {
        type: 'input',
        message: '请输入你要新建的组件名（中文）：',
        name: 'compNameCN',
        validate(answer) {
          const done = this.async()
          const validateRes = RegxMap.IS_COMP_CN_NAME.test(answer)
          if (!validateRes) {
            done('请按要求输入正确的组件名！')
            return
          }
          done(null, true)
        }
      },
      {
        type: 'input',
        message: '请输入组件的功能描述：',
        name: 'compDesc',
        default: '默认：这是一个新组件'
      }
    ])
  const { compName } = meta
  meta.compClassName = kebabCase(compName)
  return meta
}
