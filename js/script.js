"use strict";

let highScore = 0,
    mark = 20,
    hiddenNum,
    playerGuessed;

//function to generate random number
function hiddenNumGenerator() {
    hiddenNum = Math.trunc(Math.random() * 20 + 1);
    document.querySelector("body").style.backgroundColor = "#101111";
    valueAssigner(".guess", "");
}
//function to display text in dom
const textAssigner = (element, text) =>
    (document.querySelector(element).textContent = text);

//function to display numbers in dom
const valueAssigner = (element, value) =>
    (document.querySelector(element).value = value);

hiddenNumGenerator();

//if clicked on check button
document.querySelector(".check").addEventListener("click", () => {
    playerGuessed = Number(document.querySelector(".guess").value);
    valueAssigner(".guess", "");

    // if not a number
    if (!playerGuessed) {
        textAssigner(".message", "Not a Number 🛑");
    }
    //if the guessed number is wrong
    else if (Number(playerGuessed) < hiddenNum) {
        textAssigner(".message", "Your Number too low ⬇");
        mark = mark - 1;
        textAssigner(".score", mark);
    } else if (Number(playerGuessed) > hiddenNum) {
        textAssigner(".message", "Your Number too high ⬆");
        mark = mark - 1;
        textAssigner(".score", mark);
    }
    else {
        textAssigner(".score", mark);
        textAssigner(".message", `👏You guessed it. Hidden number is ${hiddenNum}`);
        document.querySelector("body").style.backgroundColor = "#33c26f";
        valueAssigner(".guess", playerGuessed);

        if (mark > highScore) {
            highScore = Number(mark);
            document.querySelector(".highScore").textContent = highScore;
        }
    }
    if (mark < 1) {
        mark = 0;
        textAssigner(
            ".message",
            `Hidden Number was ${hiddenNum}.
                Your score is 0.Click 'Again' button`
        );
        document.querySelector("body").style.backgroundColor = "#da262f";
        //if the guessed number is correct
    }

});

//if clicked on restart button
document.querySelector(".again").addEventListener("click", function () {
    hiddenNumGenerator();
    mark = 20;
    textAssigner(".score", mark);
    textAssigner(".message", "Start guessing...");
});
