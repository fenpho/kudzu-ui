import { defineComponent, PropType } from 'vue'
import './Footer.module.less'

interface ListItem {
  name: '',
  icon: '',
  link: '',
}

interface Footer {
  startTime: string,
  copyrihgt: string,
  list: ListItem[],
  endTime?: string,
  theme?: string,
}

export default defineComponent({
  name: 'KuFooter',

  // 启用了类型推导
  props: {
    footer: {
      type: Object as PropType<Footer>,
      required: true
    }
  },

  methods: {

  },

  setup(props, { emit, slots }) {
    const endTime = new Date().getFullYear()
    return () => (
      <footer class="ku-footer">
        <div class="ku-footer-left">
          <p>© {props.footer.startTime}-{props.footer.endTime || endTime}, Content By {props.footer.copyrihgt}. All Rights Reserved.</p>
          <p>Theme By {props.footer.theme || props.footer.copyrihgt}</p>
        </div>
        <div class="ku-footer-right">
          {props.footer.list.map(v => {
            return <a href={v.link} class="link">
              {v.icon && <img src={v.icon} />}
              {v.name && v.name}
            </a>
          })}
        </div>
      </footer>
    )
  }
})
