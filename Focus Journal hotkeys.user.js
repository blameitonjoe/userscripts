// ==UserScript==
// @name         Focus Journal hotkeys
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://zenfoci.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zenfoci.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const clickNext = x=> document.querySelector('.journal__reply-form-buttons .btn__regular').click();
const clickPrev = x=> document.querySelector('.journal__reply-previous .btn__regular').click();

let replyTxtA = document.querySelector('.journal__reply-form-textarea')

let keysPressed = {};


document.addEventListener('keydown', (e)=>{
    keysPressed[e.code] = true;

    if ((keysPressed['MetaLeft'] ||keysPressed['MetaRight']) && (keysPressed['ShiftLeft'] ||keysPressed['ShiftRight']) && keysPressed['Enter']){
        clickPrev();
    } else if ((keysPressed['MetaLeft'] ||keysPressed['MetaRight']) && keysPressed['Enter']){
        clickNext();
    }
})

document.addEventListener('keyup', (e)=>{
    keysPressed = {}
})
})();