import {mainPage} from "./mainPage.js";
import {menu} from "./menu.js";
import {contact} from "./contact.js";
import {headerFooter} from "./headerFooter.js";
import './style.css';

headerFooter();
addListeners();
mainPage();

function addListeners(){
    console.log("check");
    const mainBtn = document.getElementById('main');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');

    mainBtn.addEventListener('click', mainPage);
    menuBtn.addEventListener('click', menu);
    contactBtn.addEventListener('click', contact);

}