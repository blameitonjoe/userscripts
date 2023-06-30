// ==UserScript==
// @name         New Transaction shortcut
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.youneedabudget.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youneedabudget.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const clickAdd = x=> document.querySelector('.add-transaction').click();


let keysPressed = {};


document.addEventListener('keydown', (e)=>{
    keysPressed[e.code] = true;
    if ((keysPressed['MetaLeft'] ||keysPressed['MetaRight']) && (keysPressed['AltLeft'] ||keysPressed['AltRight']) && (keysPressed['KeyN'])) {
        clickAdd();
    }
})

document.addEventListener('keyup', (e)=>{
    keysPressed = {}
})
})();