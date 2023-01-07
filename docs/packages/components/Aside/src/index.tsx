import { defineComponent, onMounted, PropType, ref, renderList, vShow } from 'vue'
import { getImageUrl } from '@kudzu/utils'
import './index.less'

interface ListItem {
  name: string,
  link: '',
  icon?: '',
  children?: ListItem[],
  id?: string
}

interface Aside {
  close?: string,
  list: ListItem[],
  extras: ListItem[]
}

export default defineComponent({
  name: 'KuAside',

  // 启用了类型推导
  props: {
    aside: {
      type: Object as PropType<Aside>,
      required: true
    }
  },

  setup(props, { emit, slots }) {
    // 添加唯一id
    props.aside.list.forEach(v => {
      v.id = v.name + new Date().getTime()
    })

    const renderList = (list: ListItem[], type?: string, id?: string) => {

      return <ul class="ku-aside-list" id={id} style={{ height: id ? '0' : 'auto' }}>
        {
          list.map(v => {
            if (v.children) {
              return <li class="ku-aside-list-item">
                <a onClick={() => itemClick(v, 'sub')}>
                  {v.icon && <img src={v.icon} alt="" />}
                  <span>{v.name}</span>
                  <span class="ku-aside-list-item-down"></span>
                </a>
                {v.children && renderList(v.children, 'sub', v.id)}
              </li>
            } else {
              return <li class="ku-aside-list-item">
                <a href={v.link} class={type} onClick={(e: Event) => itemClick(v)}>
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

        if (node) {
          const icon = node.parentNode.querySelector('.ku-aside-list-item-down')

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

    const closeClick = () => {
      emit('close-click')
    }

    return () => (
      <aside class="ku-aside">
        {props.aside.close &&
          <div class="ku-aside-close" onClick={() => closeClick()}>
            <img src={props.aside.close} alt="" />
          </div>
        }
        <div class="ku-aside-inner">
          <nav class="ku-aside-list-nav">
            {renderList(props.aside.list)}
          </nav>

          <nav class="ku-aside-list-nav ku-aside-list-extras">
            {renderList(props.aside.extras)}
          </nav>
        </div>
      </aside>
    )
  }
})
