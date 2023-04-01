const max = 6;
const min = 1;
let cnt = 0;
let player1 = 0;
let player2 = 0;
const h1 = document.querySelector('h1');
const btn = document.querySelector('#btn');
const p1result = document.querySelector('#p1');
const p2result = document.querySelector('#p2');

function nowStatus(){
    
    if(cnt == 0)
    {
        h1.textContent = "Player2's turn";
        cnt++;

    }
    else if(cnt == 1)
    {
        if(player1 > player2)
            h1.textContent = "Player1 Win";
        else if(player1 < player2)
            h1.textContent = "Player2 Win"
        else
            h1.textContent = "Draw"
        btn.textContent = "Replay";
        btn.addEventListener('click' , initialize);

    }

}

function initialize(){
    cnt = 0;
    player1 = 0;
    player2 = 0;
    h1.textContent = "Player1's turn";
    btn.textContent = "Roll"
    p1.textContent = "Player1's number";
    p2.textContent = "Player2's number";
    btn.addEventListener('click', rollDice);
    btn.removeEventListener('click',initialize);
}


function rollDice(){
    let dice = Math.floor(Math.random() * (max - min + 1)) + min;
    let myDice = document.querySelector('.dice');
        if(dice == 1)
            myDice.id = 'dice1';
        else if(dice == 2)
            myDice.id = 'dice2';
        else if(dice == 3)
            myDice.id = 'dice3';
        else if(dice == 4)
            myDice.id = 'dice4';
        else if(dice == 5)
            myDice.id = 'dice5';
        else if(dice == 6)
            myDice.id = 'dice6';
    if(cnt == 0)
    {
        player1 = dice;
        p1.textContent = `Player1's number is ${player1}`;
    }
    else if(cnt == 1)
    {
        player2 = dice;
        p2.textContent = `Player2's number is ${player2}`;
    }
    nowStatus();
}


btn.addEventListener('click', rollDice);

