import { defineComponent, PropType } from 'vue'
import './index.less'

interface ListItem {
  name: string,
  link: string,
  icon?: string,
  italic?: string,
}

interface More {
  name: string,
  icon: string,
}

interface Header {
  logo?: string,
  list: ListItem[],
  more?: More
}

export default defineComponent({
  name: 'KuHeader',

  // 启用了类型推导
  props: {
    header: {
      type: Object as PropType<Header>,
      // 如果你的 TypeScript 版本低于 4.7，确保使用箭头函数
      default: () => ({
        logo: '',
        more: {
          name: '更多',
          icon: ''
        }
      }),
      required: true
    }
  },

  data() {
    return {
      scrollTop: 0
    }
  },

  mounted() {
    window.addEventListener('scroll', this.scroll)
  },

  methods: {
    scroll() {
      const KuHeader: any = this.$refs.KuHeader
      if (KuHeader) {
        const scrollTop = window.pageYOffset
        const direction = scrollTop - this.scrollTop > 0 ? 'down' : 'up'
  
        this.scrollTop = scrollTop
  
        KuHeader.style.transition = 'all 200ms linear'
        if (direction === 'down') {
          KuHeader.style.top = '-60px'
          KuHeader.style.backgroundColor = 'transparent'
          KuHeader.style.animation = 'navHide 400ms'
          KuHeader.style.boxShadow = 'none'
        } else {
          KuHeader.style.top = '0'
          KuHeader.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
          KuHeader.style.animation = 'navShow 400ms'
          KuHeader.style.boxShadow = '0 1px 3px #eff0f0'
        }

        if (scrollTop === 0) {
          KuHeader.style.transition = 'all 400ms linear'
          KuHeader.style.backgroundColor = 'transparent'
          KuHeader.style.boxShadow = 'none'
          
        }
      }
    }
  },

  setup(props, { emit, slots }) {
    const itemClick = (item: ListItem) => {
      emit('item-click', item)
    }
    const moreClick = () => {
      emit('more-click')
    }

    return () => (
      <header class="ku-header" ref="KuHeader">
        {/* 标志 */}
        <span class="logo">
          <a href="">
            <img src={props.header.logo} alt="logo" />
          </a>
        </span>
        {/* 导航 */}
        <nav>
          <ul>
            {props.header.list.map((v: ListItem) => {
              if (v.link) {
                return (
                  <li onClick={() => itemClick(v)}>
                    <a href={v.link}>
                      <img class="icon" src={v.icon} />
                      {v.italic ? <i class="italic">{v.italic}</i> : null}
                      <span>{v.name}</span>
                    </a>
                  </li>
                )
              } else {
                return (
                  <li onClick={() => itemClick(v)}>
                    <span>
                      <img class="icon" src={v.icon} />
                      {v.italic ? <i class="italic">{v.italic}</i> : null}
                      {v.name}
                    </span>
                  </li>
                )
              }
            })}
          </ul>
        </nav>
        {/* 更多 */}
        {props.header.more && <span class="more" onClick={() => moreClick()}>
          <span class="more-name">{props.header.more.name}</span>
          <button class="menu-icon" title="More">
            <span class="icon-bar before"></span>
            <span class="icon-bar main"></span>
            <span class="icon-bar after"></span>
          </button>
        </span>}
      </header >
    )
  }
})
