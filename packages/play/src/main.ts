import type { Plugin } from 'vue'
import { createApp } from 'vue'
import router from '@/router'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PlusProComponents from '../../plus-pro-components/index'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import '../../theme-chalk/src/index.scss'
import App from './App.vue'
import './index.css'
import 'element-plus/theme-chalk/src/index.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)
app
  .use(router)
  .use(PlusProComponents as unknown as Plugin)
  .mount('#app')
