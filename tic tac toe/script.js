// DOMContentLoaded Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    

    const board = document.getElementById("board");
    const resultDisplay = document.getElementById("result");
    const resetBtn = document.getElementById("resetBtn");


    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];


    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell"); // Add the "cell" class to the div classList is represented by DOMTokenList
        cell.setAttribute("data-index", i); // Set a data-index attribute to identify the cell's position
        cell.addEventListener("click", () => makeMove(i)); // Add a click event listener to the cell, calling makeMove with the cell's index
        board.appendChild(cell); 

    // Function to handle making a move when a cell is clicked
    function makeMove(index) {

        if (gameBoard[index] === "") {
            gameBoard[index] = currentPlayer; // Update the game board with the current player's mark
            updateBoard(); // Update the displayed content of the cells
            checkWinner(); // Check if there is a winner
            currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch to the next player
        }
    }

    // Function to update the displayed content of the cells based on the game board state
    function updateBoard() {
        const cells = document.querySelectorAll(".cell"); // Select all cells
        cells.forEach((cell, index) => {
            cell.textContent = gameBoard[index]; // Set the content of each cell based on the game board state
        });
    }

    // Function to check if there is a winner
    function checkWinner() {
        const winPatterns = [ // Define winning patterns
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            // Check if the marks in the selected pattern are the same, declare a winner
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                resultDisplay.textContent = `${currentPlayer} wins!`; // Display the winner
                disableClicks(); // Disable further clicks on the cells
                return;
            }
        }

        // If the game board is full and no winner, declare a draw
        if (!gameBoard.includes("")) {
            resultDisplay.textContent = "It's a draw!";
            disableClicks();
        }
    }

    // Function to disable click events on all cells
    function disableClicks() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.removeEventListener("click", makeMove);
        });
    }

    // Function to reset the game state
    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""]; // Reset the game board
        updateBoard(); // Update the displayed content of the cells
        resultDisplay.textContent = ""; // Clear the result display
        currentPlayer = "X"; // Reset the current player to "X"
        enableClicks(); // Enable click events on the cells
    }

    // Function to enable click events on all cells
    function enableClicks() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.addEventListener("click", () => makeMove(cell.getAttribute("data-index"))); // Add click event listeners to the cells
        });
    }

    // Add an event listener to the reset button, calling resetGame when clicked
    resetBtn.addEventListener("click", resetGame);
});
