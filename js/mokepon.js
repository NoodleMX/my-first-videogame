function startGame() {
  const selectMokeponButton = document.getElementById("select-mokepon-button");
  selectMokeponButton.addEventListener("click", selectPlayerMokepon);
}

function selectPlayerMokepon() {
  let inputCharmander = document.getElementById("charmander");
  let inputSquirtle = document.getElementById("squirtle");
  let inputBulbasaur = document.getElementById("bulbasaur");

  if (inputCharmander.checked) {
    alert("You selected Charmander!");
  } else if (inputSquirtle.checked) {
    alert("You selected Squirtle!");
  } else if (inputBulbasaur.checked) {
    alert("You selected Bulbasaur!");
  } else {
    alert("Please select a Mokepon!");
  }
}

window.addEventListener("load", startGame);