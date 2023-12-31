// ==UserScript==
// @name         Forwarded Convo Faker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.telegram.org/k/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=telegram.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const sparkIcon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 238.3 232.9" style="enable-background:new 0 0 238.3 232.9;width: 60%;height: auto;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
</style>
<g>
	<g>
		<path d="M69.6,209.7c-2.5,0-5-1.9-5.6-4.3c-10.3-40-32.1-70.3-59.7-83c-2.3-1.1-3.8-3.4-3.8-6s1.5-4.9,3.8-6
			c27.6-12.7,49.4-42.9,59.7-83c0.6-2.4,3.1-4.3,5.6-4.3c2.5,0,5,1.9,5.6,4.3c10.3,40,32.1,70.3,59.7,83c2.3,1.1,3.8,3.4,3.8,6
			s-1.5,4.9-3.8,6c-27.6,12.7-49.4,42.9-59.7,83C74.6,207.8,72.1,209.7,69.6,209.7z"></path>
		<path class="st0" d="M69.6,23.7c2.2,0,4.5,1.8,5.1,4c5,19.3,12.9,37,23,51.2c10.6,14.9,23,25.7,37,32.1c2.1,1,3.5,3.1,3.5,5.5
			s-1.4,4.5-3.5,5.5c-14,6.4-26.5,17.2-37,32.1c-10.1,14.2-18,31.9-23,51.2c-0.6,2.1-2.9,4-5.1,4s-4.5-1.8-5.1-4
			c-5-19.3-12.9-37-23-51.2c-10.6-14.9-23-25.7-37-32.1c-2.1-1-3.5-3.1-3.5-5.5s1.4-4.5,3.5-5.5c14-6.4,26.5-17.2,37-32.1
			c10.1-14.2,18-31.9,23-51.2C65,25.5,67.4,23.7,69.6,23.7 M69.6,22.7c-2.7,0-5.4,2.1-6.1,4.7C53.6,65.8,32.3,97.1,4.1,110
			c-2.5,1.1-4.1,3.7-4.1,6.4s1.6,5.3,4.1,6.4c28.2,13,49.6,44.2,59.4,82.6c0.7,2.6,3.4,4.7,6.1,4.7s5.4-2.1,6.1-4.7
			c9.9-38.4,31.2-69.7,59.4-82.6c2.5-1.1,4.1-3.7,4.1-6.4s-1.6-5.3-4.1-6.4c-28.2-13-49.6-44.2-59.4-82.6
			C75,24.8,72.3,22.7,69.6,22.7L69.6,22.7z"></path>
	</g>
	<g>
		<path d="M203,94.7c-1.1,0-2.3-0.9-2.6-2c-5.2-20.4-16.3-35.8-30.4-42.3c-1.1-0.5-1.8-1.6-1.8-2.8s0.7-2.3,1.8-2.8
			c14.1-6.5,25.2-21.9,30.4-42.3c0.3-1.1,1.5-2,2.6-2s2.3,0.9,2.6,2c5.2,20.4,16.3,35.8,30.4,42.3c1.1,0.5,1.8,1.6,1.8,2.8
			s-0.7,2.3-1.8,2.8c-14.1,6.5-25.2,21.9-30.4,42.3C205.3,93.7,204.2,94.7,203,94.7z"></path>
		<path class="st0" d="M203,1c0.9,0,1.9,0.8,2.1,1.6c5.3,20.5,16.5,36.1,30.7,42.6c0.9,0.4,1.5,1.3,1.5,2.4c0,1-0.6,1.9-1.5,2.4
			c-14.2,6.5-25.4,22-30.7,42.6c-0.2,0.9-1.2,1.6-2.1,1.6s-1.9-0.8-2.1-1.6c-5.3-20.5-16.5-36.1-30.7-42.6c-0.9-0.4-1.5-1.3-1.5-2.4
			c0-1,0.6-1.9,1.5-2.4c14.2-6.5,25.4-22,30.7-42.6C201.1,1.8,202.1,1,203,1 M203,0c-1.4,0-2.7,1.1-3.1,2.4
			c-5,19.5-15.8,35.4-30.2,41.9c-1.3,0.6-2.1,1.9-2.1,3.3v0c0,1.4,0.8,2.7,2.1,3.3c14.3,6.6,25.1,22.4,30.2,41.9
			c0.3,1.3,1.7,2.4,3.1,2.4s2.7-1.1,3.1-2.4c5-19.5,15.8-35.4,30.2-41.9c1.3-0.6,2.1-1.9,2.1-3.3v0c0-1.4-0.8-2.7-2.1-3.3
			c-14.3-6.6-25.1-22.4-30.2-41.9C205.8,1.1,204.4,0,203,0L203,0z"></path>
	</g>
	<g>
		<path d="M181.5,232.4c-1.1,0-2.3-0.9-2.6-2c-5.2-20.4-16.3-35.8-30.4-42.3c-1.1-0.5-1.8-1.6-1.8-2.8c0-1.2,0.7-2.3,1.8-2.8
			c14.1-6.5,25.2-21.9,30.4-42.3c0.3-1.1,1.5-2,2.6-2s2.3,0.9,2.6,2c5.2,20.4,16.3,35.8,30.4,42.3c1.1,0.5,1.8,1.6,1.8,2.8
			c0,1.2-0.7,2.3-1.8,2.8c-14.1,6.5-25.2,21.9-30.4,42.3C183.8,231.5,182.6,232.4,181.5,232.4z"></path>
		<path class="st0" d="M181.5,138.7c0.9,0,1.9,0.8,2.1,1.6c5.3,20.5,16.5,36.1,30.7,42.6c0.9,0.4,1.5,1.3,1.5,2.4s-0.6,1.9-1.5,2.4
			c-14.2,6.5-25.4,22-30.7,42.6c-0.2,0.9-1.2,1.6-2.1,1.6s-1.9-0.8-2.1-1.6c-5.3-20.5-16.5-36.1-30.7-42.6c-0.9-0.4-1.5-1.3-1.5-2.4
			s0.6-1.9,1.5-2.4c14.2-6.5,25.4-22,30.7-42.6C179.6,139.5,180.6,138.7,181.5,138.7 M181.5,137.7c-1.4,0-2.7,1.1-3.1,2.4
			c-5,19.5-15.8,35.4-30.2,41.9c-1.3,0.6-2.1,1.9-2.1,3.3s0.8,2.7,2.1,3.3c14.3,6.6,25.1,22.4,30.2,41.9c0.3,1.3,1.7,2.4,3.1,2.4
			s2.7-1.1,3.1-2.4c5-19.5,15.8-35.4,30.2-41.9c1.3-0.6,2.1-1.9,2.1-3.3s-0.8-2.7-2.1-3.3c-14.3-6.6-25.1-22.4-30.2-41.9
			C184.2,138.8,182.9,137.7,181.5,137.7L181.5,137.7z"></path>
	</g>
</g>
</svg>`

    const cloning = ()=>{
        const originalBtn = document.querySelector('#new-menu');
        const cloneBtn = originalBtn.cloneNode(false);
        cloneBtn.insertAdjacentHTML('afterbegin',sparkIcon)
        cloneBtn.id = 'convoMaker';
        cloneBtn.style.bottom = '80px';
        originalBtn.insertAdjacentElement('beforebegin',cloneBtn);
    }

    window.setTimeout(cloning,3000)


})();