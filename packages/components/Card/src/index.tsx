import { defineComponent } from 'vue'
import './index.less'

interface TagItem {
  name: string,
  link: string
}

interface Card {
  title: string,
  link?: string,
  tag: TagItem[],
  desc: string,
  readmore?: boolean
}

export default defineComponent({
  name: 'KuCard',

  // 启用了类型推导
  props: {

  },

  methods: {

  },

  setup(props, { emit, slots }) {
    return () => (
      <div class="ku-card">
        <div class="ku-card-left">
          <h3 class="ku-card-left-title">
            <a href=""></a>
          </h3>
        </div>
        <div class="ku-card-right"></div>
      </div>
    )
  }
})
