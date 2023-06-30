// ==UserScript==
// @name         Papago Langauges Hotkey/Shortcut
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds the keyboard shortcut 'meta + shift + S' for quickly switching the languages.
// @author       blameitonjoe
// @match        https://papago.naver.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=naver.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
const switchHotkey = (e) => {
  if (e.metaKey && e.shiftKey && e.which == 83){
    document.querySelector('.btn_switch___x4Tcl').click();
  };
};

document.addEventListener('keydown',switchHotkey );

})();