// DOM of columns
let col1pick = document.querySelector('.col1');
let col2pick = document.querySelector('.col2');
let col3pick = document.querySelector('.col3');
let col4pick = document.querySelector('.col4');
// DOM for cells
let col1 = document.querySelector('.col1').children;
let col2 = document.querySelector('.col2').children;
let col3 = document.querySelector('.col3').children;
let col4 = document.querySelector('.col4').children;
// Lists of the columns nodes
let columns1 = [col1[0],col1[1],col1[2],col1[3]];
let columns2 = [col2[0],col2[1],col2[2],col2[3]];
let columns3 = [col3[0],col3[1],col3[2],col3[3]];
let columns4 = [col4[0],col4[1],col4[2],col4[3]];
// Colors
let player1Color , player2Color;
let color = [];
player1Color = 'red';
player2Color = 'yellow';
color = [player1Color,player2Color];
let playerZoneColor = document.querySelector('.playerZone');

// activePlayer variable
let activePlayer = 0;

function intilizeGame() {
    if(col1pick) {
        clickCell(columns1,col1pick);
    }
    if(col2pick) {
        clickCell(columns2,col2pick);
    }
    if(col3pick) {
        clickCell(columns3,col3pick);
    }
    if(col4pick) {
        clickCell(columns4,col4pick);
    } 
}
intilizeGame();

function clickCell(column,colpick) {
    for(let i = column.length-1; i>=0;i--){
        // hover color for column  
        colpick.addEventListener('mouseover', function(){
            colpick.style.background = 'rgba(0, 57, 82, 0.98)';
            colpick.addEventListener('mouseout',function(){
                colpick.style.background = '#002552';
                colpick.style.borderRadius = '50px';
            });
        });
        // event that fill the specific cell 
        colpick.addEventListener('click' , function(){
            column[i].style.background = color[activePlayer];
            column[i].classList.add('animated', 'bounceInDown');
            winner(column);
            switchPlayer();
            i--;
        });
        break;
    }}
// function that switch between players
function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    playerZoneColor.style.background = color[activePlayer];
    let playerTurn = document.querySelector('#player').innerText = activePlayer +1;
    playerTurn;
}
// function that check if there is a winner 
function winner(columnN) {
    function colCheck(columnN){
        if (columnN[0].style.background == color[activePlayer] && columnN[1].style.background == color[activePlayer] &&
            columnN[2].style.background == color[activePlayer] && columnN[3].style.background == color[activePlayer] ){
            ShowDialog(); 
        }
    }
    colCheck(columnN);
   
function rowCheck(){
    for(let i=3;i>=0;i--){
        if (columns1[i].style.background == color[activePlayer] && columns2[i].style.background == color[activePlayer] &&
            columns3[i].style.background == color[activePlayer] && columns4[i].style.background == color[activePlayer] ){ 
            ShowDialog();
                }
            }
    }
   rowCheck();

    function cross() {
        if (columns1[3].style.background == color[activePlayer] && columns2[2].style.background == color[activePlayer] &&
            columns3[1].style.background == color[activePlayer] && columns4[0].style.background == color[activePlayer] ){
            ShowDialog();
        } 
        if (columns1[0].style.background == color[activePlayer] && columns2[1].style.background == color[activePlayer] &&
            columns3[2].style.background == color[activePlayer] && columns4[3].style.background == color[activePlayer] ){
            ShowDialog();
        } 
    }
    cross();

    function tie() {
        if (!(columns1[0].style.background == '#fff') && !(columns2[0].style.background == '#fff') &&
            !(columns3[0].style.background == '#fff') && !(columns4[0].style.background == '#fff') ){
                console.log('tie!');
            }
            
    }
    tie();
}

function ShowDialog() {
        let dialogs = document.querySelector("#dialog-box");
        let playerTurn = document.querySelector('#playerw').innerText = activePlayer+1;
        playerTurn;
        dialogs.showModal();
}































