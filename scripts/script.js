
let leftOffset = 0;
let topOffset = 0;
let widthOffset = 80;
let heightOffset = 80;
let index = 0;
// let squares = document.getElementsByClassName("sqr");
let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];


let blackSqr = document.getElementById("rectHeader").onclick = function () {

    let sqrSec = document.getElementById("SqrSec");
    for (let i = 0; i < 3; i++) {
        if (document.getElementsByClassName("sqr").length >= 8) {
            // console.log(document.getElementsByClassName("sqr").length);
            return;
        }
        // let randomIndex = Math.floor(Math.random() * array.length);
        // letter =  array[randomIndex];
        const newSquare = document.createElement("div");// creating & appending a new square
        newSquare.className = "sqr";
        // newSquare.className = "sqr_shown";
        newSquare.addEventListener("click", assignRandomLetters);
        newSquare.style.top = `${topOffset}px`;
        newSquare.style.width = `${widthOffset}px`;
        newSquare.style.height = `${heightOffset}px`;
        // newSquare.innerHTML = "<h1>" + letter + "</h1>";

        sqrSec.appendChild(newSquare);
        widthOffset += 20;
        heightOffset += 20;


        if (document.getElementsByClassName("sqr").length == 7) {
            // letter = array[index];
            const newSquare = document.createElement("div");
            newSquare.className = "sqr";
            newSquare.style.top = `${topOffset}px`;
            newSquare.style.width = `${widthOffset}px`;
            newSquare.style.height = `${heightOffset}px`;
            // newSquare.innerHTML = "<h1>" + letter + "</h1>";
            sqrSec.appendChild(newSquare);
        }
    }
    return;
}
function assignRandomLetters() {
    shuffleArray(array);
    let squares = document.querySelectorAll("#SqrSec .sqr");
    // let letters = shuffleArray([...Array(squares.length/2).keys()].map(i => String.fromCharCode(65 + i)));

    let usedSquares = new Set(); // to keep track of squares that have been used
    for (let i = 0; i < squares.length; i++) {
        if (usedSquares.has(i)) {
            continue; // skip squares that have already been used in a pair
        }

        // find a random unassigned square that is not adjacent to the current square
        let j;
        do {
            j = Math.floor(Math.random() * squares.length);
        } while (usedSquares.has(j) || isAdjacent(i, j));

        // assign the same letter to the current and random square
        let letter = array.shift();
        squares[i].textContent = letter;
        squares[j].textContent = letter;

        let newHeading = document.createElement('h1');
        newHeading.textContent = letter;
        squares[i].appendChild(newHeading);
        squares[j].appendChild(newHeading.cloneNode(true));

        // add event listeners and mark squares as assigned
        squares[i].removeEventListener("click", assignRandomLetters);
        squares[j].removeEventListener("click", assignRandomLetters);
        squares[i].addEventListener("click", Startgame);
        squares[j].addEventListener("click", Startgame);
        squares[i].classList.add("assigned");
        squares[j].classList.add("assigned");

        usedSquares.add(i);
        usedSquares.add(j);
    }
}

// helper function to check if two squares are adjacent
function isAdjacent(i, j) {
    let row1 = Math.floor(i / 4);
    let col1 = i % 4;
    let row2 = Math.floor(j / 4);
    let col2 = j % 4;
    return Math.abs(row1 - row2) <= 1 && Math.abs(col1 - col2) <= 1;
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function Startgame() {

    let squares = document.querySelectorAll(".sqr");

    squares.forEach(square => {
        square.addEventListener("click", () => {
            if (square.classList.contains("matched")) {
                return;
            }
});});}
        
            // square.classList.add("flipped");
            // let flippedSquares = document.querySelectorAll(".flipped");

            // if (flippedSquares.length === 2) {
            //     // squares.forEach(sqr => {    
            //     //     sqr.removeEventListener("click", Startgame);
                // });
            //     console.log("here");

            //     if (flippedSquares[0].textContent === flippedSquares[1].textContent) {
            //         flippedSquares.forEach(square => {
            //             square.classList.add("matched");
            //         });
            //     } else {
            //         setTimeout(() => {
            //             flippedSquares.forEach(square1 => {
            //                 square1.classList.remove("flipped");
            //             });
            //             squares.forEach(square2 => {
            //                 if (!square2.classList.contains("matched")) {
            //                     square2.addEventListener("click", Startgame);
            //                 }
            //             });
            //         }, 1000);
            //     }
//             }
//         });
//     });
// }