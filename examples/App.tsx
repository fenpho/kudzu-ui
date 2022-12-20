import { defineComponent, reactive } from 'vue'
import styles from './App.module.less'
import ComponentList from '@kudzu/list.json'

interface ComponentsItem {
  compName: String;
  compCnName: String;
}
interface LinkItem {
  path: String;
  name: String;
}

export default defineComponent({
  name: 'App',

  setup() {
    const data = reactive({
      links: ComponentList.map((item: ComponentsItem) => ({
        path: `/components/${item.compName}`,
        name: item.compCnName
      }))
    })

    return () => (
      <div id="App" class={styles.App}>
        <aside class={styles.aside}>
          <ul>
            { data.links.map((v: LinkItem) => {
                return <li class={styles.asideItem}><router-link key={v.path} to={v.path}>{ v.name }</router-link></li>
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
