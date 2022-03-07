const gameBorad = (function(){
    let firstChance = true;
    let winingPossibility = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let noWiner = true;

const markerFeild=document.querySelectorAll('.field');
const resultValue = document.querySelector('.result');
const restart = document.querySelector('.btn1');
markerFeild.forEach((m)=>{
    m.onclick=function(){
            playGame(m);               
    }    
});

let playerOne = [];
let playerTwo = [];

const playGame = (fillDiv)=>{
    if(noWiner){if(fillDiv.childNodes.length===0){
        if(firstChance){
            fillDiv.innerHTML='X';
            playerOne.push(parseInt(fillDiv.dataset.index))
            console.log(playerOne);
            display('player O turn')
            firstChance=false;
            if(playerOne.length >=3){
                checkWiner('player X',playerOne)
            }                

        }
        else{
            fillDiv.innerHTML = 'O';
            playerTwo.push(parseInt(fillDiv.dataset.index))
            console.log(playerTwo);
            display('player X turn')        
            firstChance=true;
            if(playerTwo.length >=3){
                checkWiner('player O',playerTwo)
            } 
        }
    }
    else{return;}

 }
}

const display = (status)=>{
    resultValue.innerHTML = status ;
}

let currentStatus = false;
const checkStatus = (arr)=>{
for(i=0;i<=winingPossibility.length-1;i++){
    currentStatus=winingPossibility[i].every(ele=>arr.includes(ele));
    if(currentStatus){
    return(currentStatus);
}
}
}

const checkWiner = (str,arr)=>{
    if(checkStatus(arr)){
        display(`${str} won the game`);
        noWiner = false;
       // checkStatus = false;
    }
    else if(playerOne.length+playerTwo.length==9){
    display('Game Tie');        
    }
}

const restartGame = ()=>{
    markerFeild.forEach((box)=>{
        box.innerHTML = '';
    })
    playerOne = [];
    playerTwo = [];
    display('player X turn')    
    noWiner = true;
    currentStatus = false;  
    firstChance = true;  
}

restart.addEventListener('click',restartGame);
})();
