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
  selectEnemyMokepon();
}

function selectEnemyMokepon() {
  let enemyMokepon = generateRandomNumber(1, 3);
  let spanEnemyMokepon = document.getElementById("enemy-mokepon");

  if (enemyMokepon === 1) {
    spanEnemyMokepon.innerHTML = "Charmander";
  } else if (enemyMokepon === 2) {
    spanEnemyMokepon.innerHTML = "Squirtle";
  } else if (enemyMokepon === 3) {
    spanEnemyMokepon.innerHTML = "Bulbasaur";
  }
}

// Function to generate a random number between min and max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", startGame);