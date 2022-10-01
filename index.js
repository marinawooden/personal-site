"use strict";
(function() {
  const OFFSET = 2;
  const NUM_LET = 4;
  const SPEED = 2;
  
  window.addEventListener("load", init);

  function init() {
    wiggle(qsa(".wiggle"));
    makeScroll(qsa(".scroll"));
  }

  function makeScroll(elems) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("scrolled");
        } else {
          e.target.classList.remove("scrolled");
        }
      });
    })

    elems.forEach((e) => observer.observe(e));

    elems.forEach((e, i) => {
      // console.log(e.nextSibling);
      const nextPop = e.nextElementSibling;
      if (nextPop) {
        if (nextPop.classList.contains("pop-in")) {
          nextPop.style.transitionDelay += i * 100 + "ms";
        }
      }
    });
  }

  function wiggle(text) {
    text.forEach((e, i) => {
      const words = e.textContent;

      text[i].classList.add("wiggle");
      text[i].innerHTML = "";

      for (let j = 0; j < words.length; j++) {
        const sp = document.createElement("span");
        sp.textContent = words[j];
        // Maybe some day these letters will be colorful...
        // sp.style.color = "hsl(" + Math.floor(Math.random() * 361) + ", 100%, 50%)";

        text[i].appendChild(sp);
      }

      let loop = 0;
      setInterval(() => {
        for (let j = 0; j < words.length; j++) {
          // Nobody knows how this works- not even me and I wrote the equation :-(
          const magicNumber = NUM_LET * OFFSET;
          const yCoord = ((magicNumber) + (OFFSET * j) + (OFFSET * loop)) % (magicNumber);

          text[i].children[j].style.top = yCoord + "px";
        }
        loop++;
      }, SPEED * 100);
    });
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();