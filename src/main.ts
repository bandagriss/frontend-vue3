import { createApp } from 'vue'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faHome, faBalanceScale, faUsers, faGear, faIdCard, faMoneyBills } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faHome, faBalanceScale, faUsers, faGear, faIdCard, faMoneyBills)



import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
