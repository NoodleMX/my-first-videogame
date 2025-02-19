let playerAttack = 0;
let enemyAttack = 0;
let playerLifes = 3;
let enemyLifes = 3;

function startGame() {
  const sectionSelectAttack = document.getElementById("select-attack");
  const sectionReset = document.getElementById("reset");
  const selectMokeponButton = document.getElementById("select-mokepon-button");
  const buttonFire = document.getElementById("fire-button");
  const buttonWater = document.getElementById("water-button");
  const buttonGrass = document.getElementById("grass-button");
  const buttonReset = document.getElementById("reset-button");

  sectionSelectAttack.style.display = "none";
  sectionReset.style.display = "none";
  selectMokeponButton.addEventListener("click", selectPlayerMokepon);
  buttonFire.addEventListener("click", fireAttack);
  buttonWater.addEventListener("click", waterAttack);
  buttonGrass.addEventListener("click", grassAttack);
  buttonReset.addEventListener("click", resetGame);
}

function selectPlayerMokepon() {
  const sectionSelectAttack = document.getElementById("select-attack");
  const sectionSelectMokepon = document.getElementById("select-mokepon");
  const inputCharmander = document.getElementById("charmander");
  const inputSquirtle = document.getElementById("squirtle");
  const inputBulbasaur = document.getElementById("bulbasaur");
  const spanPlayerMokepon = document.getElementById("player-mokepon");

  sectionSelectMokepon.style.display = "none";
  sectionSelectAttack.style.display = "block";

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
  selectEnemyAttack();
}

function waterAttack() {
  playerAttack = "Water💧";
  selectEnemyAttack();
}

function grassAttack() {
  playerAttack = "Grass🌱";
  selectEnemyAttack();
}

function selectEnemyAttack() {
  const randomNumber = generateRandomNumber(1, 3);

  if (randomNumber === 1) {
    enemyAttack = "Fire🔥";
  } else if (randomNumber === 2) {
    enemyAttack = "Water💧";
  } else {
    enemyAttack = "Grass🌱";
  }

  combat();
}

function combat() {
  let combatResult = "";
  const spanPlayerLifes = document.getElementById("player-lifes");
  const spanEnemyLifes = document.getElementById("enemy-lifes");

  if (playerAttack === enemyAttack) {
    combatResult = "It's a tie!";
  } else if ((playerAttack === "Fire🔥" && enemyAttack === "Grass🌱") || (playerAttack === "Water💧" && enemyAttack === "Fire🔥") || (playerAttack === "Grass🌱" && enemyAttack === "Water💧")) {
    combatResult = "You win!";
    enemyLifes--;
    spanEnemyLifes.innerHTML = enemyLifes;
  } else {
    combatResult = "You lose!";
    playerLifes--;
    spanPlayerLifes.innerHTML = playerLifes;
  }

  createAttackMessage(combatResult);
  checkLifes();
}

function checkLifes() {
  if (playerLifes === 0) {
    createResultMessage("Game Over! You lost all your lifes!");
  } else if (enemyLifes === 0) {
    createResultMessage("Congratulations! You won the game!");
  }
}

function createAttackMessage(combatResult) {
  const sectionBattle = document.getElementById("battle");
  const message = document.createElement("p");

  message.innerHTML = `Your Mokepon used ${playerAttack}. Enemy Mokepon used ${enemyAttack}. ${combatResult}`;
  sectionBattle.appendChild(message);
}

function createResultMessage(gameResult) {
  const sectionBattle = document.getElementById("battle");
  const message = document.createElement("p");
  const buttonFire = document.getElementById("fire-button");
  const buttonWater = document.getElementById("water-button");
  const buttonGrass = document.getElementById("grass-button");

  buttonFire.disabled = true;
  buttonWater.disabled = true;
  buttonGrass.disabled = true;

  message.innerHTML = gameResult;
  sectionBattle.appendChild(message);

  const sectionReset = document.getElementById("reset");
  sectionReset.style.display = "block";
}

function resetGame() {
  location.reload();
}

// Function to generate a random number between min and max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", startGame);
