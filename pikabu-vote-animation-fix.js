// ==UserScript==
// @name         Pikabu - Блокировка анимаций голосования (минимальная версия)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Блокирует всплывающие анимации (стрелки) при голосовании на сайте pikabu.ru
// @match        https://pikabu.ru/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';
  const styleElement = document.createElement('style');
  styleElement.textContent = `
      .vote-animation-container {
          display: none !important;
      }
  `;
  if (document.head) {
      document.head.appendChild(styleElement);
  } else {
      document.addEventListener('DOMContentLoaded', function() {
          document.head.appendChild(styleElement);
      });
  }
})();
