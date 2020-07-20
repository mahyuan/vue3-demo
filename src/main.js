import {
  createApp
} from 'vue'
import App from './App.vue'
import './index.css'
import Button from './components/Button.vue'

import directives from './directives'

import router from './router'

const app = createApp(App, {
  // provide: {
  //     user: 'John Doe'
  // }
})

app.use(router)

directives.install(app)

app.config.devtools = process.env.NODE_ENV === 'development'

app.config.globalProperties.$http = () => {
  console.log('$http call')
}

app.component('el-button', Button)

router.isReady().then(() => {
  // resolve the request
  app.mount('#app')
})

// app.mount('#app')
