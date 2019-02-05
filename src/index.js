window.$ = window.jQuery = require("jquery");

require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./scripts/navbar.js');

// require('ionicons');

import WOW from 'wow.js';



import PopperJs from 'popper.js';
import 'bootstrap';

import jquery from 'jquery';

// Accepts any class name

new WOW().init();


document.addEventListener("DOMContentLoaded", () => {

    const pluginsTriggerElement = document.getElementById('plugins-trigger');
    const pluginsElement = document.getElementById('plugins');

    const pluginsVisibleClass = "splash-overview-plugins__list--visible";

    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    }
});
