const rollBtn = document.getElementById("roll_btn");
const numberOfDices = document.getElementById("n_dices");
const diceImage = document.getElementById("dice-images");

rollBtn.onclick = function () {
  let resultDice = [];
  let images = [];
  let inputDice = Number(document.getElementById("inp_dices").value);
  for (i = 0; i < inputDice; i++) {
    let randDice = Math.floor(Math.random() * 6) + 1;

    resultDice.push(randDice);
    images.push(`<img src="img/dice${randDice}.png" alt="dice${randDice}">`);
  }

  numberOfDices.textContent = `Dice: ${resultDice.join(", ")}`;
  diceImage.innerHTML = images.join("");
};
