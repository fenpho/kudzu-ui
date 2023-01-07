import { defineComponent, PropType } from 'vue'
import './index.less'
import { KuTag } from '@kudzu/components/Tag'

interface TagItem {
  name: string,
  link: string
}

interface Card {
  title: string,
  desc: string,
  tag: TagItem[],
  link?: string,
  time?: string,
  readmore?: boolean
}

export default defineComponent({
  name: 'KuCard',

  components: {
    [KuTag.name]: KuTag
  },

  // 启用了类型推导
  props: {
    card: {
      type: Object as PropType<Card>,
      // 如果你的 TypeScript 版本低于 4.7，确保使用箭头函数
      default: () => ({
        readmore: true,
      }),
      required: true
    }
  },

  setup(props, { emit, slots }) {
    /**
     * @description 查看详情
     */
    const toDetail = (card: Card) => {
      emit('toDetail', card)
    }

    return () => (
      <div class="ku-card">
        <div class="ku-card-left">
          <h3 class="ku-card-left-title">
            {props.card.link ?
              <a href={props.card.link}>{props.card.title}</a>
              : props.card.title
            }
          </h3>
          {props.card.time && <span class="ku-card-left-time">{props.card.time}</span>}
          {props.card.tag.map((v, i) => {
            if (i === props.card.tag.length - 1) {
              return <ku-tag tag={v} />
            } else {
              return [<ku-tag tag={v} />, ', ']
            }
          })}
        </div>
        <div class="ku-card-right">
          <p class="ku-card-right-desc">{props.card.desc}</p>
          <ku-button onClick={() => toDetail(props.card)}>更多...</ku-button>
        </div>
      </div>
    )
  }
})
