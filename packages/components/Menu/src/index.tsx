import { defineComponent } from 'vue'
import './index.less'

export default defineComponent({
  name: 'KuMenu',

  // 启用了类型推导
  props: {

  },

  methods: {
   
  },

  setup(props, { emit, slots }) {
    return () => (
       <div class="ku-menu">
        { slots.default ? slots.default() : null }
      </div>
    )
  }
})
