// Declarion of PickMouse
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');


// Declartion of columns
let col1 = document.querySelector('.col1').childNodes;
let col2 = document.querySelector('.col2').childNodes;
let col3 = document.querySelector('.col3').childNodes;
let col4 = document.querySelector('.col4').childNodes;

// Colors
player1Color = ['red'];
player2Color = ['yellow'];

let score, color;
let activePlayer = 0;

// Lists of the columns nodes
let columns1 = [col1[1],col1[3],col1[5],col1[7]];
let columns2 = [col2[1],col2[3],col2[5],col2[7]];
let columns3 = [col3[1],col3[3],col3[5],col3[7]];
let columns4 = [col4[1],col4[3],col4[5],col4[7]];
color = [player1Color,player2Color]; // 0 ,  1


function intilizeGame() {
    if(p1) {
        clickCell(columns1,p1);
    }
    if(p2) {
        clickCell(columns2,p2);
    }
    if(p3) {
        clickCell(columns3,p3);
    }
    if(p4) {
        clickCell(columns4,p4);
    } 
}

intilizeGame();

function clickCell(column,p) {
    for(let i = column.length-1; i>-1;){ // 3 ,2
        p.addEventListener('click' , function(){
            column[i].classList.add(color[activePlayer]); // 3 ,2 
            winner(column);
            switchPlayer();
            i--;
        });
        break;
    }
}
    
function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}
        
function winner(columnN) {

    function colCheck(columnN){
        if (columnN[0].classList.contains(color[activePlayer]) && columnN[1].classList.contains(color[activePlayer]) && columnN[2].classList.contains(color[activePlayer]) && columnN[3].classList.contains(color[activePlayer]) ){
            console.log('win!');
        }
    }
    colCheck(columnN);
   
    function rowCheck(){
            for(let i=3;i>=0;i--){
                if (columns1[i].classList.contains(color[activePlayer]) && columns2[i].classList.contains(color[activePlayer]) && columns3[i].classList.contains(color[activePlayer]) && columns4[i].classList.contains(color[activePlayer]) ){
                    console.log(i+'row win');
                }
            }
    }
    rowCheck();

    function cross() {
        if (columns1[3].classList.contains(color[activePlayer]) && columns2[2].classList.contains(color[activePlayer]) && columns3[1].classList.contains(color[activePlayer]) && columns4[0].classList.contains(color[activePlayer]) ){
            console.log('left to right cross');
        }
        if (columns1[0].classList.contains(color[activePlayer]) && columns2[1].classList.contains(color[activePlayer]) && columns3[2].classList.contains(color[activePlayer]) && columns4[3].classList.contains(color[activePlayer]) ){
            console.log('right to left cross');
        }
    }
    cross();
}

// function reset() {
    
// }

// function alertWinner() {
//     console.log
// }


            // for(let i = columns1.length-1; i>-1;){ // 3 ,2
            //     p1.addEventListener('click' , function(){
            //         columns1[i].classList.add(color[activePlayer]); // 3 ,2 
            //         winner(columns1);
            //         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            //     i--;
            //     });
            //     break;
            // }
            // for(let i = columns2.length-1; i>-1;){ // 3 ,2
            //     p2.addEventListener('click' , function(){
            //         columns2[i].classList.add(color[activePlayer]); // 3 ,2 
            //         winner(columns2);
            //         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            //     i--;
            //     });
            //     break;
            // }
            // for(let i = columns3.length-1; i>-1;){ // 3 ,2
            //     p3.addEventListener('click' , function(){
            //         columns3[i].classList.add(color[activePlayer]); // 3 ,2 
            //         winner(columns3);
            //         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            //     i--;
            //     });
            //     break;
            // }
            // for(let i = columns4.length-1; i>-1;){ // 3 ,2
            //     p4.addEventListener('click' , function(){
            //         columns4[i].classList.add(color[activePlayer]); // 3 ,2 
            //         winner(columns4);
            //         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            //     i--;
            //     });
            //     break;
            // }

        // COLUMNS
 // if (col1Arr[0].classList.contains(color[activePlayer]) && col1Arr[1].classList.contains(color[activePlayer]) && col1Arr[2].classList.contains(color[activePlayer]) && col1Arr[3].classList.contains(color[activePlayer]) ){
    //     console.log(' col1 win!');
    // }
    // if (col2Arr[0].classList.contains(color[activePlayer]) && col2Arr[1].classList.contains(color[activePlayer]) && col2Arr[2].classList.contains(color[activePlayer]) && col2Arr[3].classList.contains(color[activePlayer]) ){
    //     console.log(' col2 win!');
    // }
    // if (col3Arr[0].classList.contains(color[activePlayer]) && col3Arr[1].classList.contains(color[activePlayer]) && col3Arr[2].classList.contains(color[activePlayer]) && col3Arr[3].classList.contains(color[activePlayer]) ){
    //     console.log(' col3 win!');
    // }
    // if (col4Arr[0].classList.contains(color[activePlayer]) && col4Arr[1].classList.contains(color[activePlayer]) && col4Arr[2].classList.contains(color[activePlayer]) && col4Arr[3].classList.contains(color[activePlayer]) ){
    //     console.log(' col4 win!');
    // }

        // ROW 
    // if (col1Arr[3].classList.contains(color[activePlayer]) && col2Arr[3].classList.contains(color[activePlayer]) && col3Arr[3].classList.contains(color[activePlayer]) && col4Arr[3].classList.contains(color[activePlayer]) ){
    //     console.log(' first row win');
    // }
    // if (col1Arr[2].classList.contains(color[activePlayer]) && col2Arr[2].classList.contains(color[activePlayer]) && col3Arr[2].classList.contains(color[activePlayer]) && col4Arr[2].classList.contains(color[activePlayer]) ){
    //     console.log(' second row win');
    // }
    // if (col1Arr[1].classList.contains(color[activePlayer]) && col2Arr[1].classList.contains(color[activePlayer]) && col3Arr[1].classList.contains(color[activePlayer]) && col4Arr[1].classList.contains(color[activePlayer]) ){
    //     console.log(' third row win');
    // }
    // if (col1Arr[0].classList.contains(color[activePlayer]) && col2Arr[0].classList.contains(color[activePlayer]) && col3Arr[0].classList.contains(color[activePlayer]) && col4Arr[0].classList.contains(color[activePlayer]) ){
    //     console.log(' forth row win');
    // }

































