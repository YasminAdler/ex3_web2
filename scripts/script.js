let leftOffset = 0;
let topOffset = 0;
let widthOffset = 80;
let heightOffset = 80;
let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

let blackSqr = document.getElementById("rectHeader").onclick = function () {

    let sqrSec = document.getElementById("SqrSec");
    for (let i = 0; i < 3; i++) {
        if (document.getElementsByClassName("sqr").length >= 8) {
            return;
        }
        const newSquare = document.createElement("div");
        newSquare.className = "sqr";
        newSquare.addEventListener("click", startGame);
        newSquare.style.top = `${topOffset}px`;
        newSquare.style.width = `${widthOffset}px`;
        newSquare.style.height = `${heightOffset}px`;

        sqrSec.appendChild(newSquare);
        widthOffset += 20;
        heightOffset += 20;

        if (document.getElementsByClassName("sqr").length == 7) {
            const newSquare = document.createElement("div");
            newSquare.className = "sqr";
            newSquare.style.top = `${topOffset}px`;
            newSquare.style.width = `${widthOffset}px`;
            newSquare.style.height = `${heightOffset}px`;

            sqrSec.appendChild(newSquare);
        }
    }
}

function startGame() {
    const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const shuffledArray = shuffleArray(array);
    
    const cards = document.querySelectorAll('.sqr');
    let selectedCards = [];
    let matches = [];
    
    const squares = document.querySelectorAll('.sqr');
    squares.forEach(square => {
        square.removeEventListener('click', startGame);
    });
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (selectedCards.length < 2 && !matches.includes(card) && !card.classList.contains('flipped')) {
                card.classList.add('flipped');
                selectedCards.push(card);
    
                if (selectedCards.length === 2) {
                    setTimeout(() => {
                        if (selectedCards[0].innerHTML === selectedCards[1].innerHTML) {
                            matches.push(selectedCards[0], selectedCards[1]);
                            if (matches.length === cards.length) {
                                alert('Congratulations, you won!');
                            }
                        } else {
                            selectedCards[0].classList.remove('flipped');
                            selectedCards[1].classList.remove('flipped');
                        }
                        selectedCards = [];
                    }, 1000);
                }
            }
        });
    });

    const shuffledIndexes = shuffleIndexes(cards.length);
    let index = 0;
    while (index < cards.length) {
        cards[shuffledIndexes[index]].innerHTML = shuffledArray[index];
        cards[shuffledIndexes[index+1]].innerHTML = shuffledArray[index];
        index += 2;
    }
}

function shuffleArray(array) {
    let currentIndex = array.length, tempValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
    return array;
}

function shuffleIndexes(numCards) {
    const indexes = Array.from(Array(numCards).keys());
    let currentIndex = numCards, tempValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        tempValue = indexes[currentIndex];
        indexes[currentIndex] = indexes[randomIndex];
        indexes[randomIndex] = tempValue;
    }
    return indexes;
}