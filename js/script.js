import { menuOnClick } from "./header.js";
import {menuBar} from './global.js';


if(menuBar) {
    menuBar.addEventListener('click', menuOnClick)
}