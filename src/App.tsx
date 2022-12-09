import { defineComponent } from 'vue'
import vueLogo from './assets/vue.svg'
import styles from './App.module.less'

export default defineComponent({
  name: 'App',

  setup() {
    return () => (
      <div id="App" class={styles.App}>
        <ku-button onClick={(a: Event) => console.log(a)}>Kudzu UI Button</ku-button>
      </div>
    )
  }
})
