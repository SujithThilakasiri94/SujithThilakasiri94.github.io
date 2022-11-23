"use strict";

let highScore = 0,
    mark,
    hiddenNum;

function hiddenNumGenerator() {
    hiddenNum = Math.trunc(Math.random() * 20 + 1);
    //console.log(hiddenNum);
}

hiddenNumGenerator();

document.querySelector(".check").addEventListener("click", () => {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "Not a Number 🛑";
    } else {
        if (hiddenNum != Number(guess)) {
            mark = document.querySelector(".score").textContent - 1;
            document.querySelector(".score").textContent = mark;
            if (Number(guess) < hiddenNum) {
                document.querySelector(".message").textContent = "Your Number too low";
            } else {
                document.querySelector(".message").textContent = "Your Number too high";
            }
            if (mark < 0) {
                mark = 0;
                document.querySelector(".message").textContent =
                    `Hidden Number was ${hiddenNum}.
                    Your score is 0.Click 'Again' button`;
                document.querySelector(".score").textContent = 0;
            }
        } else {
            document.querySelector(".score").textContent = mark;
            console.log("Mark = " + mark);
            document.querySelector(
                ".message"
            ).textContent = `You guessed it. Hidden number is ${hiddenNum}`;

            if (mark > highScore) {
                highScore = Number(mark);
                document.querySelector(".highScore").textContent = highScore;
            }
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    hiddenNumGenerator();
    mark = 20;
    document.querySelector(".score").textContent = 20;
    document.querySelector(".message").textContent = "Start guessing...";
});
