// ==UserScript==
// @name         WAWM 3
// @namespace    http://tampermonkey.net/
// @version      2
// @description  try to take over the world!
// @author       BlameItOnJoe
// @match        https://web.whatsapp.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=whatsapp.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    //New UI
    const newUI = {
        toggleBtn: `<div id="toggleBtn" role="button" tabindex="0" class="_165_h">
<span data-testid="menu" data-icon="menu" class=""></span>
</div>`,
        toggleStyle: `<style>
#toggleBtn {
    position: fixed;
    top: 80px;
    left: -23px;
    z-index: 200;
    background-color: #dd4c76;
    transition: all 200ms cubic-bezier(0.18, -0.05, 0.1, 0.95);
    animation: append-animate .3s linear;
}
#toggleBtn.active {
    left: 16px;
    background-color: #00a884;
}
#main {
    width: 100vw;
}
.app-wrapper-web {
    width: 100vw;
    overflow-x: hidden;
}

@keyframes append-animate {
	from {
		transform: scale(0);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}

</style>`

    }
    const {
        toggleBtn,
        toggleStyle
    } = newUI;

    //New UI functionality
    const toggleContacts = function (e) {
        document.getElementById('toggleBtn').classList.toggle('active');
        // main header, side header, or side header div.
        const side = document.getElementById('side').parentElement

        if (side.style.display !== 'none') { // collapse
            side.style.display = 'none'
            side.previousElementSibling.children[0].style.display = 'none'
            const emojiBtn = document.querySelector('[data-testid="compose-btn-emoji"]')
            emojiBtn.setAttribute('tabindex', '0')
            emojiBtn.focus()

        } else {
            side.style.display = ''
            side.previousElementSibling.children[0].style.display = ''
        }


    }


    // Body Observer
    const bodyEl = document.querySelector('body');

    const config = {
        childList: true,
        subtree: true
    };
    const bodyMutations = (mutationRecords) => {
        for (let record of mutationRecords) {
            if (record.addedNodes.length) {
                for (let node of record.addedNodes) {
                    if (node.classList.contains('app-wrapper-web') && node.classList.contains('_1h2dM')) {

                        //Insert new UI and assign functionality
                        document.querySelector('#app').insertAdjacentHTML('afterbegin', toggleBtn);
                        document.querySelector('head').insertAdjacentHTML('beforeend', toggleStyle);

                        document.getElementById('toggleBtn').addEventListener('click', toggleContacts, {
                            'passive': true
                        })


                        //Add all event listeners to Chat List
                        document.querySelector('[aria-label="Chat list"]').addEventListener('click',toggleContacts);
                        document.querySelector('[aria-label="Chat list"]').addEventListener('touchstart',toggleContacts);


                        bodyObserver.disconnect();

                    }
                }
            }
        }

    }
    const bodyObserver = new MutationObserver(bodyMutations);





    bodyObserver.observe(bodyEl, config);


})();
