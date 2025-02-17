let player = 0;
      let computer = 0;
      let victories = 0;
      let defeats = 0;

      // Function to generate a random number between min and max
      function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      // Function to show the player's choice
      function showChoice(playerName, choice) {
        if (choice == 1) {
          return `${playerName} chose 🥌`;
        } else if (choice == 2) {
          return `${playerName} chose 📄`;
        } else if (choice == 3) {
          return `${playerName} chose ✂`;
        } else {
          return "Invalid choice";
        }
      }

      // Function to determine the winner
      function combat(player, computer) {
        let message = "";
        if (player == computer) {
          message = "It's a tie!";
        } else if (player - computer == 1 || player - computer == -2) {
          message = "You win!";
          victories++;
        } else {
          message = "You lose!";
          defeats++;
        }
        return message;
      }

      while (victories < 3 && defeats < 3) {
        player = prompt("Enter 1 for rock, 2 for paper, or 3 for scissors");
        computer = generateRandomNumber(1, 3);
        alert(showChoice("You", player));
        alert(showChoice("Computer", computer));
        alert(combat(player, computer));
      }

      alert(`You Won ${victories} times and lost ${defeats} times`);