// ==UserScript==
// @name         Random responses Google Forms
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Randomly answer all multiple choice questions on Google Forms
// @author       You
// @match        https://docs.google.com/forms/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     window.addEventListener('load',function(){
         const randomizeAnswers = () => {
    const allSections = document.querySelectorAll('[role="listitem"]');

    const sampleIndex = array => Math.floor(Math.random() * array.length);

    for (let section of allSections) {
        const allGroups = section.querySelectorAll('[role="radiogroup"]');


        for (let group of allGroups) {
            const allOptions = group.querySelectorAll('[role="radio"]');
            let i = sampleIndex(allOptions)
            console.log(allOptions[i]);
            allOptions[i].click();


        }
    }
}

const originalButton = document.querySelector('body>div>div>div[role="button"]');
const originalClasses = originalButton.classList;
const originalRole = originalButton.role;

const newButton = originalButton.cloneNode(true);
const removeAttributes = (element) => {
    while (element.attributes.length > 0) {
        element.removeAttribute(element.attributes[0].name);
    }
};
removeAttributes(newButton);
newButton.id = 'randomizeUI'
newButton.classList = originalClasses;
newButton.role = originalRole;
newButton.style.marginBottom = '7px';
const svgSpan = newButton.querySelector('svg').parentNode;
svgSpan.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;width: 24px;height: 24px;" xml: space="preserve">
<path d="M6.1,2.7c0-0.4-0.4-0.8-0.8-0.8H1.9c-0.4,0-0.8,0.4-0.8,0.8v3.4c0,0.4,0.4,0.8,0.8,0.8h3.4c0.4,0,0.8-0.4,0.8-0.8V2.7z"></path>
<path d="M5.3,9.1H1.9c-0.4,0-0.8,0.4-0.8,0.8v3.4c0,0.4,0.4,0.8,0.8,0.8h3.4c0.4,0,0.8-0.4,0.8-0.8V9.9C6.1,9.5,5.8,9.1,5.3,9.1z
M4.7,12.6h-2v-1.8h2V12.6z"></path>
<path d="M5.3,16.4H1.9c-0.4,0-0.8,0.4-0.8,0.8v3.4c0,0.4,0.4,0.8,0.8,0.8h3.4c0.4,0,0.8-0.4,0.8-0.8v-3.4
C6.1,16.8,5.8,16.4,5.3,16.4z M4.7,20.1h-2v-2h2V20.1z"></path>
<g id="Vector">
    <g>
        <path class="PgdKqf" d="M19.8,22.1c-0.2,0-0.4-0.1-0.6-0.3c-0.3-0.3-0.3-0.9,0-1.2l0.7-0.7h-0.9c-2.5,0-4.6-2.1-4.6-4.6c0-1.6-1.3-2.8-2.8-2.8h-3
    c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h3c2.5,0,4.6,2.1,4.6,4.6c0,1.6,1.3,2.8,2.8,2.8h0.9l-0.7-0.7
    c-0.3-0.3-0.3-0.9,0-1.2c0.3-0.3,0.9-0.3,1.2,0l2.2,2.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
    c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0.1,0.2,0.1,0.3
    c0,0.1,0,0.2-0.1,0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1-0.1,0.2-0.2,0.3l-2.2,2.2C20.2,22.1,20,22.1,19.8,22.1z"></path>
        <path d="M11.7,19.9h-3c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h3c0.6,0,1.2-0.2,1.7-0.6c0.4-0.3,0.9-0.2,1.2,0.2
    c0.3,0.4,0.2,0.9-0.2,1.2C13.6,19.6,12.7,19.9,11.7,19.9z"></path>
        <path d="M19.8,14.7c-0.2,0-0.4-0.1-0.6-0.3c-0.3-0.3-0.3-0.9,0-1.2l0.7-0.7h-0.9c-0.6,0-1.2,0.2-1.7,0.6c-0.4,0.3-0.9,0.2-1.2-0.2
    c-0.3-0.4-0.2-0.9,0.2-1.2c0.8-0.6,1.7-0.9,2.7-0.9h0.9L19.2,10c-0.3-0.3-0.3-0.9,0-1.2c0.3-0.3,0.9-0.3,1.2,0l2.2,2.2
    c0.1,0.1,0.1,0.2,0.2,0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2-0.1,0.3c0,0.1-0.1,0.2-0.2,0.3c0,0,0,0,0,0
    c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
    c0,0,0,0,0,0c0,0,0,0,0,0l-2.2,2.2C20.2,14.7,20,14.7,19.8,14.7z"></path>
    </g>
</g>
<g>
    <path d="M22,5.3H8.7c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9H22c0.5,0,0.9,0.4,0.9,0.9S22.5,5.3,22,5.3z"></path>
</g>
</svg>`

newButton.addEventListener("mouseup", randomizeAnswers);

document.querySelector('body>div>div').insertAdjacentElement('afterbegin', newButton);
         window.addEventListener('locationchange', function () {
    alert('location changed!');
});
     })
})();

