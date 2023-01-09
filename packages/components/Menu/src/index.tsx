import { defineComponent, PropType } from 'vue'
import './index.less'

interface ListItem {
  name: string,
  link: '',
  icon?: '',
  children?: ListItem[],
  id?: string
}

export default defineComponent({
  name: 'KuMenu',

  // 启用了类型推导
  props: {
    menu: {
      type: Array as PropType<ListItem[]>,
      required: true
    }
  },

  methods: {

  },

  setup(props, { emit, slots }) {
    // 添加唯一id
    props.menu.forEach(v => {
      v.id = v.name + new Date().getTime()
    })

    const renderList = (list: ListItem[], type?: string, id?: string) => {
      return <ul class="ku-menu-list" id={id} style={{ height: id ? '0' : 'auto' }}>
        {
          list.map(v => {
            if (v.children) {
              return <li class="ku-menu-list-item">
                <a onClick={() => itemClick(v, 'sub')}>
                  {v.icon && <img src={v.icon} alt="" />}
                  <span>{v.name}</span>
                  <span class="ku-menu-list-item-down"></span>
                </a>
                {v.children && renderList(v.children, 'sub', v.id)}
              </li>
            } else {
              return <li class="ku-menu-list-item">
                <a href={v.link} class={type} onClick={() => itemClick(v)}>
                  {v.icon && <img src={v.icon} alt="" />}
                  <span>{v.name}</span>
                </a>
              </li>
            }
          })
        }
      </ul>
    }

    const itemClick = (item: ListItem, type?: string) => {
      if (type === 'sub') {
        const node: any = document.querySelector(`#${item.id}`)
        console.log(node)
        if (node) {
          const icon = node.parentNode.querySelector('.ku-menu-list-item-down')

          let height = 0, rotate = 0
          if (node.style.height === '0px') {
            for (let i = 0; i < node.children.length; i++) {
              height += node.children[i].offsetHeight
            }

            rotate = 90
          }

          node.style.height = height + 'px'

          icon.style.rotate = rotate + 'deg'
        }
      } else {
        emit('item-click', item)
      }
    }

    return () => (
      <nav class="ku-menu">
        {renderList(props.menu)}
      </nav>
    )
  }
})
