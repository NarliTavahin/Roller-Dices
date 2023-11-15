

  //Player Name
let player1 = "player1";
let player2 = "player2";

function EditNames() {
    player1 = prompt("Change First Player Name :");
    player2 = prompt("Change Second Player Name :");

    if(player1.length < 1 || player2 < 1){
        alert('Please Enter Valid Name!!!');
        return;
    }
    document.querySelector("p.player1").innerHTML = player1;

    document.querySelector("p.player2").innerHTML = player2;
}


//Roller Dices

function RollTheDice() {
    let DiceNum1 = document.querySelector(".img-1");
    let DiceNum2 = document.querySelector(".img-2");

    DiceNum1.setAttribute("src", "diceroll.gif")
    DiceNum2.setAttribute("src", "diceroll.gif")

    let result = document.querySelector('h1') 
    result.innerHTML = "" 
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        DiceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
        DiceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');

  //Find the winner
     if(randomNumber1 === randomNumber2){
        result.innerHTML = "Draw!!!"
     }      
     else if (randomNumber1 < randomNumber2) {
        result.innerHTML = (player2 + " WINS!!!")
     }
     else {
        result.innerHTML = (player1 + " WINS!!!")
     }
    }, 2700);
}

