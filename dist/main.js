(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

window.addEventListener("keydown", function (e) {
    var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
    var key = this.document.querySelector(".key[data-key=\"" + e.keyCode + "\"]");
    if (!audio || !key) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    function removeTransition(e) {
        if (e.propertyName !== "transform") {
            return;
        }
        this.classList.remove("playing");
    }
    var keys = document.querySelectorAll(".key");
    keys.forEach(function (key) {
        key.addEventListener("transitionend", removeTransition);
    });
});

},{}]},{},[1])

//# sourceMappingURL=main.js.map
