function startGame() {
  const selectMokeponButton = document.getElementById("select-mokepon-button");
  selectMokeponButton.addEventListener("click", selectPlayerMokepon);
}

function selectPlayerMokepon() {
  let inputCharmander = document.getElementById("charmander");
  let inputSquirtle = document.getElementById("squirtle");
  let inputBulbasaur = document.getElementById("bulbasaur");
  let spanPlayerMokepon = document.getElementById("player-mokepon");

  if (inputCharmander.checked) {
    spanPlayerMokepon.innerHTML = "Charmander";
  } else if (inputSquirtle.checked) {
    spanPlayerMokepon.innerHTML = "Squirtle";
  } else if (inputBulbasaur.checked) {
    spanPlayerMokepon.innerHTML = "Bulbasaur";
  } else {
    alert("Please select a Mokepon!");
  }
}

window.addEventListener("load", startGame);