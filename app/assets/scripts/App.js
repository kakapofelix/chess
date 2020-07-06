import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'

import 'lazysizes'

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}