import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'
import styles from './App.module.less'
import ComponentList from '@kudzu/list.json'
import { getImageUrl } from '@kudzu/assets';

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

  setup() {
    const route = useRoute()

    const data = reactive({
      links: ComponentList.map((item: ComponentsItem) => ({
        path: `/components/${item.compName}`,
        name: item.compName,
        cnName: item.compCnName
      }))
    })

    const header = reactive({
      logo: getImageUrl('./logo.png'),
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

    return () => (
      <div id="App" class={styles.App}>
        <ku-header header={header} />
        <aside class={styles.aside}>
          <ul>
            {data.links.map((v: LinkItem) => {
              return (
                <li class={{ [styles.item]: true, [styles.active]: v.name === route.name }}>
                  <router-link key={v.path} to={v.path}>{v.cnName}</router-link>
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
