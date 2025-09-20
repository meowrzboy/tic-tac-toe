let moveOrder = 1;
let gameButton = document.querySelectorAll("button");
let animation = document.querySelectorAll(".animation");

gameButton.forEach(button => {
    button.onclick = function(){
        moveOrder++;
        updateAnimationMoveOrder();
        updateMoveOrder(this);
        console.log(moveOrder);
        return moveOrder;
    };
});
function isEven(num){
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
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
    clickedButton.classList.remove("cross_animation", "zero_animation");
    if (isEven(moveOrder-1) === false){
        clickedButton.classList.add("gameplay-box__cross");
    } else {
        clickedButton.classList.add("gameplay-box__zero");
    };
};
updateAnimationMoveOrder();
