let i = 0;
let j = 0;

while(i < 5 && j < 5){

    function getcomputerchoice() {
        let random = Math.floor(Math.random() * 3); 
        if (random == 0) {
            return "Rock";
        }
        else if (random == 1) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
    }

    let computerselection = getcomputerchoice();

    let playerselection = prompt("Select between rock, paper and scissors");

    function capitalize(text) {

        let first = text.substring(0, 1);
        let rest = text.substring(1);
        let Up = first.toUpperCase();
        let Low = rest.toLowerCase();
        let answer = Up + Low;

        return answer;

    }

    playerselection = capitalize(playerselection);

    while (playerselection != "Rock" && playerselection != "Paper" && playerselection != "Scissors"){
    playerselection = prompt("Invalid text(type rock,paper or scissors)");
    playerselection = capitalize(playerselection);
    }

    function playround(a,b) {
        if (a == b){
            return 0;
        }
        else if (a == "Rock" && b == "Scissors" || a == "Paper" && b == "Rock"|| a == "Scissors" && b == "Paper" ){
            return 1;
        }
        else {
            return 2;
        }
    }

    let result = playround(playerselection,computerselection);

    
    if (result == 0){
        console.log("Tie");
    }
    else if (result == 1){
        i++;
        console.log("Player Wins");
    }
    else if (result == 2){
        j++;
        console.log("Computer Wins");
    }
}

if (i == 5){
    console.log("Victory");
}
if (j == 5){
    console.log("Defeat");
}
