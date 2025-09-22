let moveOrder = 1;
let gameButton = document.querySelectorAll(".gameplay-box__grid-elem");
let animation = document.querySelectorAll(".animation");
let resultButton = document.querySelector(".result-block")
const titleBlock = document.querySelector('.game-name-block');
const restartButton = document.querySelector('.restart-block');
let gridElem1Counter = document.querySelector(".grid-elem1");
let gridElem2Counter = document.querySelector(".grid-elem2");
let gridElem3Counter = document.querySelector(".grid-elem3");
let gridElem4Counter = document.querySelector(".grid-elem4");
let gridElem5Counter = document.querySelector(".grid-elem5");
let gridElem6Counter = document.querySelector(".grid-elem6");
let gridElem7Counter = document.querySelector(".grid-elem7");
let gridElem8Counter = document.querySelector(".grid-elem8");
let gridElem9Counter = document.querySelector(".grid-elem9");
let winnerSequence = [
    [gridElem1Counter, gridElem2Counter, gridElem3Counter],
    [gridElem4Counter, gridElem5Counter, gridElem6Counter],
    [gridElem7Counter, gridElem8Counter, gridElem9Counter],
    [gridElem1Counter, gridElem4Counter, gridElem7Counter],
    [gridElem2Counter, gridElem5Counter, gridElem8Counter],
    [gridElem3Counter, gridElem6Counter, gridElem9Counter],
    [gridElem1Counter, gridElem5Counter, gridElem9Counter],
    [gridElem3Counter, gridElem5Counter, gridElem7Counter]
];


gameButton.forEach(button => {
    button.onclick = function(){
        if (this.classList.contains("gameplay-box__cross") || this.classList.contains("gameplay-box__zero")){
            return moveOrder;
        } else {
            moveOrder++;
        }
        updateAnimationMoveOrder();
        updateMoveOrder(this);
        isDraw();
        isWin();
        if (this.classList.contains("gameplay-box__cross") || this.classList.contains("gameplay-box__zero")){
            gameButton.forEach(btn => {
                if (btn.classList.contains("gameplay-box__cross") || btn.classList.contains("gameplay-box__zero")) {
                    let animationElement = btn.closest('.gameplay-box__grid-elem').querySelector('.animation');
                    if (animationElement) {
                        animationElement.classList.remove("cross_animation", "zero_animation");
                    }
                }
            });
        };
    };
});
function isWin(){
    for (let i = 0; i < winnerSequence.length; i++){
        const combination = winnerSequence[i];
        if (combination[0].classList.contains("gameplay-box__cross") &&
            combination[1].classList.contains("gameplay-box__cross") &&
            combination[2].classList.contains("gameplay-box__cross")) {
            resultButton.textContent = "X Win!!";
            showRestartButton();
            break;
        };
        if (combination[0].classList.contains("gameplay-box__zero") &&
            combination[1].classList.contains("gameplay-box__zero") &&
            combination[2].classList.contains("gameplay-box__zero")) {
            resultButton.textContent = "O Win!!";
            showRestartButton();
            break;
        };
    };
};
function isEven(num){
    return num % 2 === 0
};
function isDraw() {
    const allFilled = Array.from(gameButton).every(button => {
        return button.classList.contains("gameplay-box__cross") || 
        button.classList.contains("gameplay-box__zero");
    });
    if (allFilled) {
        resultButton.textContent = "Draw !!!";
        showRestartButton();
    };  
};
function showRestartButton() {
    titleBlock.classList.add('hidden');
    restartButton.classList.add('visible');
    restartButton.onclick = restartGame;
};
function restartGame(){
    moveOrder = 1;
    gameButton.forEach(button =>{
        button.classList.remove("gameplay-box__cross");
        button.classList.remove("gameplay-box__zero");
    });
    resultButton.textContent = "Result";
    titleBlock.classList.remove("hidden");
    restartButton.classList.remove("visible");
    updateAnimationMoveOrder();
};
function updateAnimationMoveOrder(){
    if (isEven(moveOrder) === false){
        animation.forEach(animation => {
            animation.classList.add("cross_animation");
        });
        animation.forEach(animation => {
            animation.classList.remove("zero_animation");
        });
    } else if (isEven(moveOrder) === true) {
        animation.forEach(animation => {
            animation.classList.remove("cross_animation");
        });
        animation.forEach(animation => {
            animation.classList.add("zero_animation");
        });
    };
};
function updateMoveOrder(clickedButton){
    if (isEven(moveOrder-1) === false){
        clickedButton.classList.add("gameplay-box__cross");
    } else {
        clickedButton.classList.add("gameplay-box__zero");
    };
};
updateAnimationMoveOrder();
