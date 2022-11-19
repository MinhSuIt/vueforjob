import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import GlobalComponentWithoutImport from './components/GlobalComponentWithoutimport.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component(
    'GlobalComponentWithoutImport', GlobalComponentWithoutImport
)
app.mount('#app')
