import {
  createApp
} from 'vue'
import App from './App.vue'
import './index.css'
import Button from './components/Button.vue'

import directives from './directives'


const app = createApp(App, {
  // provide: {
  //     user: 'John Doe'
  //   }
})

directives.install(app)

app.config.devtools = process.env.NODE_ENV === 'development'

app.config.globalProperties.$http = () => {
  console.log('$http call')
}

app.component('el-button', Button)

app.mount('#app')
