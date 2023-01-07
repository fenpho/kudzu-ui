import { defineComponent, PropType } from 'vue'
import './index.less'

interface Tag {
  name: string,
  link: string
}

export default defineComponent({
  name: 'KuTag',

  // 启用了类型推导
  props: {
    tag: {
      type: Object as PropType<Tag>,
      required: true
    }
  },

  methods: {

  },

  setup(props, { emit, slots }) {
    return () => (
      <span class="ku-tag">
        {props.tag.link ? <a href={props.tag.link}>{props.tag.name}</a> : props.tag.name}
      </span>
    )
  }
})
