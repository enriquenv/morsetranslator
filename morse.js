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

 const reverseMorse = {};
        for (let letter in morse) {
        reverseMorse[morse[letter]] = letter;
        }

  export function translateToMorse(inputValue) {
    let secondInputValue = inputValue.toUpperCase().split(" ");
    //console.log(secondInputValue)
      let resultText = "";
      for (let i = 0; i < secondInputValue.length; i++){
        let translation = "";
        //console.log(secondInputValue[i]);
        for (let x = 0; x < secondInputValue[i].length; x++){
            //console.log(secondInputValue[i][x]);
            let currentLetter = secondInputValue[i][x];
            if (morse[currentLetter]) {
                translation += morse[currentLetter] + " ";
            }
          }
        //console.log(translation);
        if (translation) {
            resultText += translation + "  ";
        }
      }
      return resultText;
    }

  export function translateToLetters(inputValue){
    let secondInputValue = inputValue.split("   ");
    //console.log(secondInputValue);
    let resultText = "";
    
    for (let i = 0; i < secondInputValue.length; i++) {
        let translation = "";
        
        //console.log(secondInputValue[i]);
        let morseChars = secondInputValue[i].split(" ");
        //console.log(morseChars)
        
        for (let x = 0; x < morseChars.length; x++) {
            //console.log(morseChars[x]);
            if (reverseMorse[morseChars[x]]) {
                translation += reverseMorse[morseChars[x]];
            }
        }
        
        //console.log(translation);
        if (translation) {
            resultText += translation + " ";
        }
    }
    
    return resultText;
  }