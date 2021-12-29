import { createApp }  from 'vue'
import App from './App'
import router from './router'
import appInfo from './app-info'

import 'devextreme/dist/css/dx.common.css'
import './themes/generated/theme.base.css'
import './themes/generated/theme.additional.css'

const app = createApp(App)

app.use(router)]
app.config.globalProperties.$appInfo = appInfo

app.mount('#app')
