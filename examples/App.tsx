import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'
import styles from './App.module.less'
import ComponentList from '@kudzu/list.json'

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

    return () => (
      <div id="App" class={styles.App}>
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
