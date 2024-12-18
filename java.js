function getComputerChoice()
{
    const number  = Math.floor(Math.random() *3);
    return number;
}

let arr = ["rock","paper","scissors"];

let humanscore = 0;
let computerscore = 0;

function highlightChoice (element) {
    element.classList.add('highlight');
    setTimeout(() => { element.classList.remove('highlight');}, 1000);
}

function highlightChoice1 (element) {
    element.classList.add('highlight1');
    setTimeout(() => { element.classList.remove('highlight1');}, 7000);
}

function playround(e) {
    // Getting the choice based on the clicked element's ID
    const userChoice = e.target.id; // This gets the ID of the clicked element
    const computerChoice = arr[getComputerChoice()];

    highlightChoice(e.target);

    const hu = document.querySelector(".human-score");
    const comp = document.querySelector(".comp-score");

    const reuslt = document.createElement("div");
    reuslt.textContent = `You chose: ${userChoice}, Computer chose: ${computerChoice}`;
    reuslt.classList.add("reuslt-message");
    
    reuslt.style.fontSize = "150%";

    const body = document.querySelector("body");
    const but = document.querySelector(".button");
    
    body.insertBefore(reuslt,but);

    // Here you can add the logic for determining the winner
    if (userChoice === computerChoice) {
        reuslt.textContent += " - It's a tie!";
        
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanscore += 1;
        // alert("You win this round!");
        reuslt.textContent += " - You win this round!";
    } else {
        computerscore += 1;
        // alert("Computer wins this round!");
        reuslt.textContent += " - Computer wins this round!";
    }
    hu.textContent = humanscore;
    comp.textContent= computerscore;
    setTimeout(() => {
        body.removeChild(reuslt);
    }, 3000);
    


    if(humanscore==5)
    {
        humanscore=0;
        computerscore=0;
        
        

        display = document.createElement("div");
        display.textContent = "You Win";
        
        body.insertBefore(display,but);
        display.style.fontSize = "300%";
        display.style.color = "yellow";

        const winner = document.querySelector("#boy");
        highlightChoice1(winner);

        setTimeout(() => {
            hu.textContent = humanscore;
            comp.textContent= computerscore;
            body.removeChild(display);
        }, 7000);
    }

    if(computerscore==5)
    {
        humanscore=0;
        computerscore=0;

        display = document.createElement("div");
        display.textContent = "You Lose";
        
        body.insertBefore(display,but);
        display.style.fontSize = "300%";
        display.style.color = "yellow";

        const winner = document.querySelector("#rob");
        highlightChoice1(winner);

        setTimeout(() => {
            hu.textContent = humanscore;
            comp.textContent= computerscore;
            body.removeChild(display);
        }, 7000);
    }

    
    
}

const act1 = document.querySelector("#rock");
act1.addEventListener("click",playround);



const act2 = document.querySelector("#paper");
act2.addEventListener("click", playround);

const act3 = document.querySelector("#scissors");
act3.addEventListener("click", playround);