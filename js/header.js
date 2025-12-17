import * as global from './global.js'

/*FUNÇÃO MENU HAMBURGUER*/

export function menuOnClick() {
    global.menuBar.classList.toggle("change");
    global.nav.classList.toggle("change");
    global.menuBg.classList.toggle("change-bg")
}