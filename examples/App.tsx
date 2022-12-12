import { defineComponent, reactive } from 'vue'
import styles from './App.module.less'
import ComponentList from '@kudzu/list.json'

interface ComponentsItem {
  compName: String;
  compZhName: String;
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
        name: item.compZhName
      }))
    })

    return () => (
      <div id="App" class={styles.App}>
        <aside class={styles.aside}>
          { data.links.map((v: LinkItem) => {
              return <router-link key={v.path} to={v.path}>{ v.name }</router-link>
            }) 
          }
        </aside>
        <main class={styles.main}>
          <router-view />
        </main>
      </div>
    )
  }
})
