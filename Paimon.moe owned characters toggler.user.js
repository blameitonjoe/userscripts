// ==UserScript==
// @name         Paimon.moe owned characters toggler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://paimon.moe/characters
// @icon         https://www.google.com/s2/favicons?sz=64&domain=paimon.moe
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const addUI = ()=>{
    const shaded = document.querySelectorAll('main .flex a.opacity-50');

    const container = document.querySelector('main div div.flex div div.flex div.flex.flex-col');

    let showing = true;

    const toggleBtnDefinition = '<button id="own-toggler" class="text-white border-2 border-white border-opacity-25 rounded-xl px-4 py-2 transition duration-100 screens" style="align-self: center; margin-left: 0.5rem;"> Toggle Owned</button>'

    container.insertAdjacentHTML('beforeEnd', toggleBtnDefinition)

    const toggleBtn = document.querySelector('#own-toggler');

    const toggleOwnedDisplay = (e) => {
        if (showing) {
            shaded.forEach(x => x.classList.add('hidden'))
            showing = false;
            toggleBtn.classList.add('active')
        } else {
            shaded.forEach(x => x.classList.remove('hidden'));
            showing = true;
            toggleBtn.classList.remove('active')
        };
    };

    const togglerStyle = `<style>
    #own-toggler:hover{
    border-color: #4E7CFF;
}
#own-toggler.active {
    background-color: #4e7cff;
    border-color: #4e7cff;
}
</style>`
    document.querySelector('head').insertAdjacentHTML('beforeEnd', togglerStyle);

    toggleBtn.addEventListener("click", toggleOwnedDisplay)

}

window.addEventListener('load', addUI , false);

})();