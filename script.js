  const form = document.querySelector("form");
  const listItem = document.getElementById("resultItem");
  const errors = document.getElementById("error");

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
      listItem.innerHTML = "";
      errors.innerHTML = "";
      event.preventDefault();
  
      const formData = new FormData(form);
      let inputValue = formData.get("searchTerm").toUpperCase();

      secondInputValue = inputValue.split(" ");
        console.log(secondInputValue)
      for (i = 0; i < secondInputValue.length; i++){
        console.log(secondInputValue[i]);
        for (x = 0; x < secondInputValue[i].length; x++){
            console.log(secondInputValue[i][x]);
          }
      }
  
   /*    console.log(secondInputValue) */
      /* if (inputValue > 100 || inputValue < 1) {
          errors.innerHTML = "<p>Please try again with a valid query. Make sure to search between 1 and 100 breeds.</p>";
          return;
      } */
  
      /* fetch(`https://catfact.ninja/breeds?limit=${inputValue}`).then(response => response.json()).then(response => {
  
  
          for (i = 0; i < response.data.length; i++) {
  
              if (response.data[i].country.startsWith("developed")) {
                  listItem.innerHTML += `<h3>${response.data[i].breed}</h3><p>${response.data[i].country.charAt(0).toUpperCase() + response.data[i].country.slice(1)}</p>`;
              } else if (response.data[i].country) {
                  listItem.innerHTML += `<h3>${response.data[i].breed}</h3><p>From ${response.data[i].country}</p>`;
              } else {
                  listItem.innerHTML += `<h3>${response.data[i].breed}</h3><p>From somewhere 🤷‍♂️</p>`;
              }
          }
      }); */
  
  })