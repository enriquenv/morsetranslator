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
      translationResult.innerHTML = "";
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
            resultText += translation + "&nbsp;&nbsp;";
        }
      }
      translationResult.innerHTML = resultText;
    }

    function translateToLetters(inputValue){
        const reverseMorse = {};
        for (let letter in morse) {
        reverseMorse[morse[letter]] = letter;
        }
        //console.log(reverseMorse)

        secondInputValue = inputValue.split("   ");
        console.log(secondInputValue);
        let resultText = "";
        
        for (i = 0; i < secondInputValue.length; i++) {
            let translation = "";
            
            console.log(secondInputValue[i]);
            let morseChars = secondInputValue[i].split(" ");
            console.log(morseChars)
            
            for (x = 0; x < morseChars.length; x++) {
                console.log(morseChars[x]);
                if (reverseMorse[morseChars[x]]) {
                    translation += reverseMorse[morseChars[x]];
                }
            }
            
            console.log(translation);
            if (translation) {
                resultText += translation + " ";
            }
        }
        
        translationResult.innerHTML = resultText;
}

    

    if (inputValue.startsWith('.') || inputValue.startsWith('-')){
        translateToLetters(inputValue);
    } else {
        translateToMorse(inputValue);
    }

  })