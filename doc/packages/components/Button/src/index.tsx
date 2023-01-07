import { defineComponent } from 'vue'
import './index.less'

export default defineComponent({
  name: 'KuButton',

  // 启用了类型推导
  props: {
    // message: String
  },

  emits: {
    click(payload: { event: Event }) {
      // 执行运行时校验
      return payload.event
    }
  },

  setup(props, { emit, slots }) {
    const handleClick = (event: Event) => {
      emit('click', { event })
    };

    return () => (
      <button class="ku-button" onClick={handleClick} >
        { slots.default ? slots.default() : null }
      </button>
    )
  }
})
