import Vue from 'vue'

import './styles/quasar.scss'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar } from 'quasar'
import device from "vue-device-detector"

Vue.use(Quasar, {
  config: {},
  plugins: {
  }
 })
Vue.use(device)
