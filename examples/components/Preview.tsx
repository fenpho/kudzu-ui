import { defineComponent, onMounted, reactive, nextTick, ref } from "vue"
import PrismJS from 'prismjs' // markdown高亮
import '@examples/assets/prism.css' // 高亮主题
import style from '@examples/components/Preview.module.less'

export default defineComponent({
  props: {
    /** 组件名称 */
    compName: {
      type: String,
      default: '',
      require: true,
    },
    /** 要显示代码的组件 */
    demoName: {
      type: String,
      default: '',
      require: true,
    },
  },

  setup(props, { slots }) {
    const sourceCode = ref<any>(null)
    const data = reactive({
      sourceCode: '',
      height: '0'
    })

    onMounted(async () => {
      data.sourceCode = (
        // 此处只能使用相对路径或者绝对路径
        await import(`../../packages/${props.compName}/demo/${props.demoName}.vue?raw`)
      ).default

      await nextTick() // 确保在源码都渲染好了以后再执行高亮
      PrismJS.highlightAll()
    })

    const changeSourceCodeStatus = () => {
      console.log()
      data.height === '0' ? data.height = getComputedStyle(sourceCode.value).height : data.height = '0'
      nextTick(() => {
        // 确保在源码都渲染好了以后再执行高亮
        PrismJS.highlightAll()
      })
    }

    return () => (
      <div class={style.preview}>
        <div class={style.display}>{ slots.default ? slots.default() : null }</div>
        <pre 
          style={{ height: data.height, padding: data.height === '0' ? '0' : '20px' }}
          class="language-html"
        >
          <code ref={sourceCode} class="language-html">{data.sourceCode}</code>
        </pre>
        <div class={style.control} onClick={changeSourceCodeStatus}>
          { data.height === 'hide' ? <span>显示代码</span> : <span>隐藏代码</span> }
        </div>
      </div>
    )
  }
})