import { translateToMorse, translateToLetters } from './morse.js';  
  
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
      const translationResult = document.getElementById("translationResult");
      translationResult.innerHTML = "";
      event.preventDefault();
  
      const formData = new FormData(form);
      let inputValue = formData.get("searchTerm").toUpperCase();    

    let output;
    if (inputValue.startsWith('.') || inputValue.startsWith('-')){
        output = translateToLetters(inputValue);
    } else {
        output = translateToMorse(inputValue);
    }
    output = output.replace(/   /g, "&nbsp;&nbsp;");
    translationResult.innerHTML = output;
  })