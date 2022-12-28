import { defineComponent } from 'vue'
import './index.less'

export default defineComponent({
  name: 'Ku{{ compName }}',

  // 启用了类型推导
  props: {

  },

  methods: {
   
  },

  setup(props, { emit, slots }) {
    return () => (
       <div class="{{ compClassName }}">
        { slots.default ? slots.default() : null }
      </div>
    )
  }
})
