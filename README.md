# asiainfo-start-kit

开发公约:
1. 组件名称都以大写字母开头
2. 为区分组件与自带组件区别,所有组件都以 Ai开头 eg: AiDialog.vue
3. 引入时: import AiDialog from './components/AiDialog'
4. 使用时: <ai-dialog></ai-dialog>
5. 所有 css 都使用 less 在 <style lang="less"> 标记语言属性
6. 文件里引用了其他组件,把 components:{} 放在 export default 的第一位, 第二位 data(){}, 在每个键值对中 key紧跟: value 与冒号中间空格一个
7. 为统一代码,所有文件都采用一个 tab 切换,也就是2个 space 空格缩进,eg:

```
import AiDialog from './components/AiDialog'
export default {
  components: {
    AiDialog
  },
  data() {

  }
  computed: {
    // 写好计算属性的注释
  },
  methods: {
    // 每个方法写好注释
    () => {
      ....
    }
    // 注释...
    () => {
      ....
    }
  },
  created() {

  },
  mounted() {

  }
  ...
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


