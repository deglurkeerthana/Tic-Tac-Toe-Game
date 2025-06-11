let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function makeMove(cell, index) {
  if (board[index] === "" && gameActive) {
    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    if (checkWin()) {
      document.getElementById("status").innerText = `🎉 Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (!board.includes("")) {
      document.getElementById("status").innerText = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  const winCombos = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns
    [0,4,8], [2,4,6]           // Diagonals
  ];
  return winCombos.some(combo => {
    return combo.every(i => board[i] === currentPlayer);
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
  document.getElementById("status").innerText = "Player X's turn";
}
