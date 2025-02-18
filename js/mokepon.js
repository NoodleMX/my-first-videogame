let playerAttack = 0;

function startGame() {
  const selectMokeponButton = document.getElementById("select-mokepon-button");
  selectMokeponButton.addEventListener("click", selectPlayerMokepon);

  const buttonFire = document.getElementById("fire-button");
  const buttonWater = document.getElementById("water-button");
  const buttonGrass = document.getElementById("grass-button");

  buttonFire.addEventListener("click", fireAttack);
  buttonWater.addEventListener("click", waterAttack);
  buttonGrass.addEventListener("click", grassAttack);
}

function selectPlayerMokepon() {
  const inputCharmander = document.getElementById("charmander");
  const inputSquirtle = document.getElementById("squirtle");
  const inputBulbasaur = document.getElementById("bulbasaur");
  const spanPlayerMokepon = document.getElementById("player-mokepon");

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
  const enemyMokepon = generateRandomNumber(1, 3);
  const spanEnemyMokepon = document.getElementById("enemy-mokepon");

  if (enemyMokepon === 1) {
    spanEnemyMokepon.innerHTML = "Charmander";
  } else if (enemyMokepon === 2) {
    spanEnemyMokepon.innerHTML = "Squirtle";
  } else if (enemyMokepon === 3) {
    spanEnemyMokepon.innerHTML = "Bulbasaur";
  }
}

function fireAttack() {
  playerAttack = "Fire🔥";
  alert(playerAttack);
}

function waterAttack() {
  playerAttack = "Water💧";
  alert(playerAttack);
}

function grassAttack() {
  playerAttack = "Grass🌱";
  alert(playerAttack);
}

// Function to generate a random number between min and max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", startGame);
