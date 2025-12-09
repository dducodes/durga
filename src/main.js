import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App)

// Make BASE_URL available globally
app.config.globalProperties.$baseUrl = process.env.BASE_URL

app.use(router).mount('#app')


