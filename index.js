/*
 * Name: Aodhan Bower
 * Date: October 26, 2023
 *
 * This is the JS to make a dropdown that changes text on screen between an ugly and a pretty solution
 */

"use strict";
(function () {
    window.addEventListener("load", init);
  
    function init() {
      qs("#changeContentButton").addEventListener("click", changeContent);
    }
  
    /**
     * changes the content on the page based on the item selected in the dropdown menu
     */
    function changeContent() {
      var dropdown = qs("#dropdown");
      var selectedOption = dropdown.options[dropdown.selectedIndex].value;
      var textContainer = qs("#textContainer");
      var textContent = qs("#text");
      if (selectedOption === "evilText") {
        textContent.innerText = "Black Text On An Image";
        textContainer.classList.remove("goodTextContainer");
        textContainer.classList.add("evilTextContainer");
        textContent.classList.remove("goodText");
        textContent.classList.add("badText");
      } else if (selectedOption === "goodText") {
        textContent.innerText = "Clean Text";
        textContainer.classList.remove("evilTextContainer");
        textContainer.classList.add("goodTextContainer");
        textContent.classList.remove("badText");
        textContent.classList.add("goodText");
      }
    }
  
    function qs(selector) {
      return document.querySelector(selector);
    }
  })();