// ==UserScript==
// @run-at document-start
// @name        Bing to DDG
// @namespace   stib@pureandapplied.com.au
// @description This will redirect you to duckduckgo from Bing after you search.
// @include     http://*.bing.com/search?*
// @include     https://*.bing.com/search?*
// @version     1
// @grant       none
// ==/UserScript==

var newurl = "https://duckduckgo.com/?"+document.URL.match(/q\=[^&]*/);
if (newurl != document.URL) location.replace(newurl);
