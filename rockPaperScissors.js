/*
The purpose of this project is to create a console
game in which the player selects rock, paper or scissors
and the computer selects one of these three values. 
Winning is defined as:

rock > scissors
scissors > paper
paper > rock

if the user and computer select the same value,
the result is a tie

psuedo:

1. get computer selection
2. set selection to a fixed value, eg:
    rock = 0
    paper = 1
    scissors = 2

3. get user selection
4. set to fixed value (see step 2)
5. compare user & computer values:
    if computer - user = positive 





*/





function getComputerChoice(){
    var computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        var result = "rock";
    }
    else if (computerChoice == 1){
        result = "paper"
    }
    else {
        result = "scissors"
    }
    return result;
}

console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Please input rock, paper, or scissors: ");
}

console.log(getHumanChoice());