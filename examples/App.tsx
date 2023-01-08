import { defineComponent, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import styles from './App.module.less'
import ComponentList from '@kudzu/list.json'
import { getImageUrl } from '@kudzu/utils';
import Header from '@examples/components/Header'

import PrismJS from 'prismjs' // markdown高亮
import '@examples/assets/prism.css' // 高亮主题

interface ComponentsItem {
  compName: String;
  compCnName: String;
}
interface LinkItem {
  path: String;
  cnName: String;
  name: String;
}

export default defineComponent({
  name: 'App',

  components: {
    [Header.name]: Header
  },

  async mounted() {
    await this.$nextTick() // 确保在源码都渲染好了以后再执行高亮
    PrismJS.highlightAll()
  },

  setup() {
    const route = useRoute()
    const router = useRouter()

    const data = reactive({
      links: ComponentList.map((item: ComponentsItem) => ({
        path: `/components/${item.compName}`,
        name: item.compName,
        cnName: item.compCnName
      }))
    })

    const header = reactive({
      logo: getImageUrl('../assets/logo.png'),
      list: [
        // {
        //   name: 'FENPHO',
        //   link: 'https://fenpho.github.io/',
        // },
        {
          name: '',
          link: '',
          italic: 'Welcome!',
        },
        {
          name: 'CREATIVE.',
          link: '',
          italic: 'Always',
        },
        // {
        //   name: '',
        //   link: 'https://fenpho.github.io/',
        //   icon: getImageUrl('../assets/github.png'),
        // },
      ],
     })

    const toComponent = (v: LinkItem) => {
      router.push({ name: v.name as any })
    }

    return () => (
      <div id="App" class={styles.App}>
        <ku-header header={header} />
        <aside class={styles.aside}>
          <ul>
            {data.links.map((v: LinkItem) => {
              return (
                <li class={{ [styles.item]: true, [styles.active]: v.name === route.name }}>
                  <a onClick={() => toComponent(v)}>{v.cnName}</a>
                </li>
              )
            })
            }
          </ul>
        </aside>
        <main class={styles.main}>
          <router-view />
        </main>
      </div>
    )
  }
})
