function getComputerChoice()
{
    const number  = Math.floor(Math.random() *3);
    return number;
}

function getHumanChoice()
{
    const hc = prompt("Rock, Paper or Scissors");
    const lowerCaseString = hc.toLowerCase();
    return lowerCaseString;
}
let arr = ["rock","paper","scissors"];

let humanscore = 0;
let computerscore = 0;

function playround()
{
    const cc = arr[getComputerChoice()];
    const userChoice = getHumanChoice();
    

    
    if (userChoice === cc) {
        humanscore+=0;
        computerscore+=0;
    } else if (
        (userChoice === 'rock' && cc === 'scissors') ||
        (userChoice === 'paper' && cc === 'rock') ||
        (userChoice === 'scissors' && cc === 'paper')
    ) {
        humanscore += 1;
    } else {
        computerscore += 1;
    }
}

for(let i=0;i<5;i++)
{
    playround();
}
if(humanscore > computerscore)
{
    alert("You Win");
}
else if(humanscore < computerscore)
{
    alert("You Lose");
}
else
{
    alert("Tie");
}