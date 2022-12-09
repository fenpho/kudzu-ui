import { defineComponent } from 'vue'
import styles from './index.module.less'

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

  methods: {
    handleClick(event: Event) {
      this.$emit('click', { event })
    }
  },

  setup(props, { emit, slots }) {
    const handleClick = (event: Event) => {
      emit('click', { event })
    };

    return () => (
      <button class={styles['ku-button']} onClick={handleClick} >
        { slots.default ? slots.default() : null }
      </button>
    )
  }
})
