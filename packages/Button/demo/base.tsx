import { defineCompont } from 'vue'
import KuButton from '../src/index'

export default defineCompont({
  name: 'BaseKuButton',

  components: {
    [KuButton.name]: KuButton
  },

  setup() {
    return (
      <KuButton>基础</KuButton>
    )
  }
})