"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    wiggle(qsa(".wiggle"));
  }

  function wiggle(text) {
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();