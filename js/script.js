let url = "https://api.adviceslip.com/advice";

let pEl = document.querySelector("p");
let buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      pEl.textContent = data.slip.advice;
    })
    .catch((error) => {
      
    });
    new Audio("./music/analog-appliance-button-15-186961.mp3").play();
});

