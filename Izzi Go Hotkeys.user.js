// ==UserScript==
// @name         Izzi Go Hotkeys
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.izzigo.tv/webclient/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=izzigo.tv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const clickPlayPause = x=>{
        const playBtn = document.querySelector('[aria-label="Play"]');
        if (playBtn){
            playBtn.click();
        } else{
            document.querySelector('[aria-label="Pause"]').click();
        }
    }

    document.addEventListener('keydown', (e)=>{
        //alert(e.code === 'Space');
        if(e.code === 'Space'){clickPlayPause()};

})


})();