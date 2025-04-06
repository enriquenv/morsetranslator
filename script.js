  const form = document.querySelector("form");
  const translationResult = document.getElementById("translationResult");

  const morse = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }
  
  form.addEventListener("submit", (event) => {
      translationResult.textContent = "";
      event.preventDefault();
  
      const formData = new FormData(form);
      let inputValue = formData.get("searchTerm").toUpperCase();

    
    function translateToMorse(inputValue) {
    secondInputValue = inputValue.split(" ");
    console.log(secondInputValue)
      let resultText = "";
      for (i = 0; i < secondInputValue.length; i++){
        let translation = "";
        console.log(secondInputValue[i]);
        for (x = 0; x < secondInputValue[i].length; x++){
            console.log(secondInputValue[i][x]);
            let currentLetter = secondInputValue[i][x];
            if (morse[currentLetter]) {
                translation += morse[currentLetter] + " ";
            }
          }
        console.log(translation);
        if (translation) {
            resultText += `${translation} `;
        }
      }
      if (resultText) {
        translationResult.textContent = resultText;
    }
    }

    function translateToLetters(inputValue){
        console.log("this is morse and will be translated to letters")
    }

    

    if (inputValue.startsWith('.') || inputValue.startsWith('-')){
        translateToLetters(inputValue);
    } else {
        translateToMorse(inputValue);
    }

  })