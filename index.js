

var numOfWon = 0;
var numOfLost = 0;

for(var i=1; i<=5; i++)
{
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5: "));

    var randomNumber =  Math.floor(Math.random()*5) + 1;

    if(guessNumber===randomNumber){
        document.write("Your given number :" + guessNumber + " YOU WON !" +  "<br>");
        numOfWon++;
    }else{
        document.write("Your given number :" + guessNumber + " You have lost . Random number was :" + randomNumber + "<br>");
        numOfLost++;
    }

}

document.write("Total Number of won = " + numOfWon + "<br>");

document.write("Total Number of lost = " + numOfLost + "<br>");

