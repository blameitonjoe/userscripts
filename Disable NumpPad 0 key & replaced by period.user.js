// ==UserScript==
// @name         Disable NumpPad 0 key & replaced by period
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Original: https://greasyfork.org/en/scripts/424823-disable-youtube-number-shortcuts/code

    let keys = ['Numpad0'];

(window.opera ? document.body : document).addEventListener('keydown', function(e) {
    const commentEl = document.querySelector('#contenteditable-root');
    const searchEl = document.querySelector('input#search.ytd-searchbox');
    if (keys.indexOf(e.code) != -1 && !(e.isComposing || e.ctrlKey || e.altKey)) {
        e.cancelBubble = true;
        e.stopImmediatePropagation();
    } else if (e.code =='Period' && !(document.activeElement === commentEl || document.activeElement === searchEl)){
        document.querySelector('#movie_player').seekTo(0, true)
    }else if (e.code =='MetaRight'){
        console.log(document.activeElement);
        console.dir(document.activeElement);
        console.log(document.activeElement === searchEl);
    }
    return false;
}, !window.opera);



})();