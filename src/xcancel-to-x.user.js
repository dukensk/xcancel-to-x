// ==UserScript==
// @name               XCancel to X
// @namespace          xcancel-to-x
// @description        Always redirects to X
// @include            *://xcancel.com/*
// @version            1.00
// @run-at             document-start
// @author             duke.nsk@gmail.com
// @match              https://xcancel.com/*
// @icon               https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant              none
// ==/UserScript==

window.location.replace("https://x.com" + window.location.pathname + window.location.search);