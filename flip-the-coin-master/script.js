const button = document.querySelector(".button");
const coinHeads = document.querySelector(".heads");
const coinTails = document.querySelector(".tails");

button.addEventListener("click", () => {
  game();
});

coinHeads.addEventListener("click", () => {
  game();
});

coinTails.addEventListener("click", () => {
  game();
});

function game() {
  const shadow = document.querySelector(".shadow");
  const randomNumber = Math.random();
  let resultText = document.querySelector(".result-text");
  shadow.classList.add("active");

  if (randomNumber < 0.5) {
    coinHeads.classList.add("active");
    coinTails.classList.remove("active");
    resultText.innerHTML = `Heads`;
  } else if (randomNumber >= 0.5) {
    coinTails.classList.add("active");
    coinHeads.classList.remove("active");
    resultText.innerHTML = `Tails`;
  }
}
