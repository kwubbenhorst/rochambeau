var wins = 0;
var losses = 0;
var ties = 0;
var optionsArr = ["R", "P", "S"];


function anotherRoundQuery (anotherRoundResponse) {
    var anotherRoundResponse = confirm("Do you want to play again? (Click 'OK' for yes and 'Cancel' for no).");
        console.log(anotherRoundResponse);
    
    if(anotherRoundResponse) {
        playGame();
        } else {
            alert("Thanks for playing. Bye, Bye");       
        }
    };

    function getGameResult(playerSelection, computerSelection) {
        var gameResult; //I am declaring the variable gameResult in function scope so that it is available when I try to give it a value in each part of the condition.  Those definitions of the variable in the conditional blocks are important or else I will not be able to console log gameResult at the end.
        
        if (
            (playerSelection == "R" && computerSelection == "S") || 
            (playerSelection == "S" && computerSelection == "P") || 
            (playerSelection == "P" && computerSelection == "R")
        ) {
            wins++;
            alert("Yay! you won this round. You have now had " + wins + " wins, " + losses + " losses, and " + ties + " ties against the computer.");
            gameResult = "win"; //define gameResult in each of the conditional sections so I can log it at the end.
        } else if (
            (playerSelection == "R" && computerSelection == "P") ||
            (playerSelection == "S" && computerSelection == "R") ||
            (playerSelection == "P" && computerSelection == "S")
        ) {
            losses++;
            alert("Aw! you lost this round. You have now had " + wins + " wins, " + losses + " losses, and " + ties + " ties against the computer.");
            gameResult = "loss"; 
        } else {
            ties++;
            alert("That's a tie! You have now had " + wins + " wins, " + losses + " losses, and " + ties + " ties against the computer.");
            gameResult = "tie"; 
        }
    
        console.log(gameResult); 
        //I have removed return gameResult from the earlier version of my code because I don't need this value to increment my wins, losses and ties -- that is happening already in each block of the condition, and I don't need it anywhere else in my program.
    }
    

/*

function getGameResult (playerSelection, computerSelection) {{
    if (
        (playerSelection == "R" && computerSelection == "S") || 
        (playerSelection == "S" && computerSelection == "P") || 
        (playerSelection == "P" && computerSelection == "R")
        ) {
        wins++;
        alert("Yay! you won this round. You have now had " + wins + " wins, " + losses + " losses, and " + ties + " ties against the computer.");
        return "win"; 
    } else if (
        (playerSelection == "R" && computerSelection == "P") ||
        (playerSelection == "S" && computerSelection == "R") ||
        (playerSelection == "P" && computerSelection == "S")
        ) {
        losses++;
        alert("Aw! you lost this round. You have now had " + wins + " wins, " + losses + " losses, and " + ties + " ties against the computer.");
        return "loss";
    } else {
        ties++;
        alert("That's a tie! You have now had " + wins + " wins, " + losses + " losses, and " + ties + " ties against the computer.");
        return "tie";
    }
    var gameResult = getGameResult(playerSelection, computerSelection);
    console.log(gameResult);
    return gameResult;
    }
};

*/



function getComputerSelection() {
    var randomIndex = Math.floor(Math.random() * optionsArr.length);
    var computerSelection = optionsArr[randomIndex];
    alert("The computer has selected " + computerSelection + ".");
    console.log(computerSelection);
    return computerSelection;
};



function getPlayerSelection(playerSelection) {
        var playerSelection = prompt("Player, please make your selection", "R, P, S").toUpperCase();
        
        if (playerSelection === "R" || playerSelection === "P" || playerSelection === "S") {
            console.log(playerSelection);
            return playerSelection;  // Return the valid playerSelection
        } else {
            alert("Invalid entry. Please type either 'R', 'P' or 'S' and hit OK");
            return getPlayerSelection(); // Recursive call and return the result
        }
    }
/*  This is important!  This is the block as I had it first, but it had a bug.  The value of playerSelection was not returning correctly in the case where an invalid input had been entered first.  This was because the value was not being returned to the original function but to the recursive function (the two were different).  The updated code returns the playerSelection value within both the if and else code blocks, so the only way of capturing the value which is the output of a recursive function call is to return it explicitly and separately.     
    var playerSelection = prompt("Player, please make your selection", "R, P, S").toUpperCase();
        if (playerSelection === "R" || playerSelection === "P" || playerSelection === "S") {
            console.log(playerSelection);
        } else {
            alert("Invalid entry. Please type either 'R', 'P' or 'S' and hit OK");
            getPlayerSelection(); //recursive function call so another playerSelection value can be submitted
        }
        return playerSelection; // Return the playerSelection value
    };
*/



function playGame() {
    var playerSelection = getPlayerSelection();  // playerSelection has been returned here to the place where the getPlayerSelection was called from but to use the value it has to be stored in a variable, otherwise it will not be passable to the getGameResult function
    var computerSelection = getComputerSelection();  // same here with the computerSelection
    var gameResult = getGameResult(playerSelection, computerSelection);  // Pass player and computer selections
    anotherRoundQuery();
    
};

playGame();