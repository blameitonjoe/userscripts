// ==UserScript==
// @name         Pity toggler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Toggle between actual pity and wishes needed for hard pity
// @author       BlameItOnJoe
// @match        https://paimon.moe/wish
// @icon         https://www.google.com/s2/favicons?sz=64&domain=paimon.moe
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    //Wait for page to fully load
    window.addEventListener('load', function () {
        //Select all spans with pity numbers
        const all5Stars = document.querySelectorAll('span.font-black.text-3xl.text-legendary-from.ml-4');
        const all4Stars = document.querySelectorAll('span.font-black.text-3xl.text-rare-from.ml-4');
        //initiate and fill arrays to contain normal and remaining pity
        let original5s = [];
        let original4s = [];

        let diff5s = [];
        let diff4s = [];

        all5Stars.forEach((x, i) => {
            original5s.push(x.innerText);
            diff5s.push((i == 1 ? 80 : 90) - x.innerText)
        });

        all4Stars.forEach((x, i) => {
            original4s.push(x.innerText);
            diff4s.push(10 - x.innerText)
        });
        //callback function to make changes on DOM
        const switchNums = (starLevel, showOriginal) => {
            let elCollection = starLevel == 5 ? all5Stars : all4Stars;
            let numArray = showOriginal ?
                (starLevel == 5 ?
                    original5s :
                    original4s) :
                (starLevel == 5 ?
                    diff5s :
                    diff4s)
            numArray.forEach((num, i) => {
                elCollection[i].innerHTML = num;
                if (showOriginal){

                    elCollection[i].classList.remove('to-go');
                } else {
                    elCollection[i].classList.add('to-go');
                }
            })
        }

        /* Button interface */
        let showingNormalPity = true;
        //Changer function for event
        const pityToggler = (e) => {
            if (showingNormalPity) {
                switchNums(5, false);
                switchNums(4, false);
                showingNormalPity = false;
                document.querySelectorAll('.pity-toggler').forEach(x => x.classList.add('active'));
            } else {
                switchNums(5, true);
                switchNums(4, true);
                showingNormalPity = true;
                document.querySelectorAll('.pity-toggler').forEach(x => x.classList.remove('active'));
            }
        }
        /*DOM insertion*/
        //Create the buttons (one for each responsive view)

        document.querySelectorAll('.top-header .flex.flex-wrap').forEach((x,i) => {
            const toggleBtn = document.createElement('button');
            toggleBtn.classList.add("pity-toggler", "text-white", "border-2", "border-white", "border-opacity-25", "rounded-xl", "px-4", "py-2", "transition", "duration-100");
            if(i==0){toggleBtn.classList.add('screens')};
            toggleBtn.style.alignSelf = "center";
            toggleBtn.style.marginLeft = "0.5rem";
            toggleBtn.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M341.6,85.3c-0.1,0-0.2,0-0.2,0H222.2l27.6-27.6c8.3-8.3,8.3-21.8,0-30.2s-21.8-8.3-30.2,0l-64,64c-0.5,0.5-1,1-1.4,1.6c-0.2,0.2-0.4,0.5-0.6,0.8c-0.2,0.3-0.5,0.6-0.7,0.9c-0.2,0.3-0.4,0.6-0.6,0.9c-0.2,0.3-0.4,0.6-0.5,0.9c-0.2,0.3-0.3,0.6-0.5,1c-0.1,0.3-0.3,0.6-0.4,0.9c-0.1,0.3-0.2,0.6-0.3,1c-0.1,0.3-0.3,0.7-0.4,1c-0.1,0.3-0.2,0.6-0.2,1c-0.1,0.4-0.2,0.7-0.3,1.1c-0.1,0.4-0.1,0.7-0.2,1.1c0,0.3-0.1,0.6-0.1,0.9c-0.1,0.7-0.1,1.4-0.1,2.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0.7,0,1.4,0.1,2.1c0,0.3,0.1,0.6,0.1,0.9c0.1,0.4,0.1,0.8,0.2,1.1c0.1,0.4,0.2,0.7,0.3,1.1c0.1,0.3,0.2,0.6,0.2,1c0.1,0.3,0.2,0.7,0.4,1c0.1,0.3,0.2,0.6,0.3,1c0.1,0.3,0.3,0.6,0.4,0.9c0.2,0.3,0.3,0.6,0.5,1c0.2,0.3,0.3,0.6,0.5,0.9c0.2,0.3,0.4,0.6,0.6,0.9c0.2,0.3,0.4,0.6,0.7,0.9c0.2,0.3,0.4,0.5,0.6,0.8c0.4,0.5,0.9,1.1,1.4,1.6l64,64c8.3,8.3,21.8,8.3,30.2,0s8.3-21.8,0-30.2L222.2,128h119c0.1,0,0.1,0,0.2,0c70.8,0,128,57.2,128,128c0,31.1-12.4,60.3-34.1,82c-8.3,8.3-8.3,21.8,0,30.2s21.8,8.3,30.2,0C495,338.5,512,298.5,512,256C512,161.7,435.8,85.5,341.6,85.3z"/><path d="M358.4,418.1c0.2-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.4-0.6,0.6-0.9c0.2-0.3,0.4-0.6,0.5-0.9c0.2-0.3,0.3-0.6,0.5-1c0.1-0.3,0.3-0.6,0.4-0.9c0.1-0.3,0.2-0.6,0.4-1c0.1-0.3,0.2-0.7,0.4-1c0.1-0.3,0.2-0.6,0.2-1c0.1-0.4,0.2-0.7,0.3-1.1c0.1-0.4,0.1-0.8,0.2-1.1c0-0.3,0.1-0.6,0.1-0.9c0.1-1.4,0.1-2.8,0-4.2c0-0.3-0.1-0.6-0.1-0.9c-0.1-0.4-0.1-0.8-0.2-1.1c-0.1-0.4-0.2-0.7-0.3-1.1c-0.1-0.3-0.2-0.6-0.2-1c-0.1-0.3-0.2-0.7-0.4-1c-0.1-0.3-0.2-0.6-0.4-1c-0.1-0.3-0.3-0.6-0.4-0.9c-0.2-0.3-0.3-0.7-0.5-1c-0.2-0.3-0.3-0.6-0.5-0.9c-0.2-0.3-0.4-0.6-0.6-0.9c-0.2-0.3-0.4-0.6-0.7-0.9c-0.2-0.3-0.4-0.5-0.6-0.8c-0.4-0.5-0.9-1-1.4-1.5c0,0,0,0,0,0l-64-64c-8.3-8.3-21.8-8.3-30.2,0c-8.3,8.3-8.3,21.8,0,30.2l27.6,27.6h-119c-0.1,0-0.1,0-0.2,0c-70.8,0-128-57.2-128-128c0-31.1,12.4-60.3,34.1-82c8.3-8.3,8.3-21.8,0-30.2s-21.8-8.3-30.2,0C17,173.4,0,213.5,0,256c0,94.3,76.2,170.5,170.4,170.7c0.1,0,0.2,0,0.2,0h119.2l-27.6,27.6c-8.3,8.3-8.3,21.8,0,30.2c8.3,8.3,21.8,8.3,30.2,0l64-64c0,0,0,0,0,0c0.5-0.5,1-1,1.4-1.6C358,418.6,358.2,418.3,358.4,418.1z"/></g></g></g></svg> Toggle Pity`
            toggleBtn.addEventListener("click", pityToggler);
            x.insertAdjacentElement('beforeEnd', toggleBtn);
        })
        //Create custom styles
        let togglerStyle = document.createElement("style");
        togglerStyle.innerHTML = `button.active.pity-toggler {
    background-color: #4e7cff;
    border-color: #4e7cff;
}
.pity-toggler:hover{
    border-color: #4E7CFF;
}
span.font-black.text-3xl.text-legendary-from.ml-4.to-go {
    background-color: #ffb13f;
    color: #202542;
    border-radius: 12px;
    padding: 0.1rem 0.3rem;
}
span.font-black.text-3xl.text-legendary-from.ml-4.to-go:before {
    content: "To\\A go:";
    white-space: pre;
    font-size: 1rem;
    line-height: 14px;
    float: left;
    padding: 0.5rem 0.3rem;
}
span.font-black.text-3xl.text-rare-from.ml-4.to-go {
    background-color: #d28fd6;
    color: #202542;
    border-radius: 12px;
    padding: 0.1rem 0.3rem;
}
span.font-black.text-3xl.text-rare-from.ml-4.to-go:before {
    content: "To\\A go:";
    white-space: pre;
    font-size: 1rem;
    line-height: 14px;
    float: left;
    padding: 0.5rem 0.3rem;
}
.pity-toggler svg {
    fill: currentColor;
    width: 1.2000000000000002rem;
    height: auto;
    display: inline-block;
}

.pity-toggler.screens {
    display: none;
}
@media (min-width: 768px) {
    .pity-toggler.screens{
        display: block;
    }
}`
        //Insert styles
        document.querySelector('head').insertAdjacentElement('beforeEnd', togglerStyle);
    }, false);



})();
