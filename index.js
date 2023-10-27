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
      
        var newText = document.createElement("p");
        newText.id = "text";
      
        if (selectedOption === "evilText") {
          textContainer.classList.remove("goodTextContainer");
          textContainer.classList.add("evilTextContainer");
      
          newText.innerText = "Black Text On An Image";
          newText.classList.add("badText");
      
          textContainer.replaceChild(newText, textContent); 
        } else if (selectedOption === "goodText") {
          textContainer.classList.remove("evilTextContainer");
          textContainer.classList.add("goodTextContainer");
      
          newText.innerText = "Clean Text";
          newText.classList.add("goodText");
      
          textContainer.replaceChild(newText, textContent); 
        }
      }
    function qs(selector) {
      return document.querySelector(selector);
    }

  })();
