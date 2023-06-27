// Game state
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

// Handle a player's move
function makeMove(index) {
  if (!gameOver && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].textContent = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

// Check if the current player has won
function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameOver = true;
      alert(`Player ${currentPlayer} wins!`);
      return;
    }
  }

  if (!board.includes("")) {
    gameOver = true;
    alert("It's a tie!");
  }
}

// Reset the game board
function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}
