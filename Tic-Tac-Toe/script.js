console.log("Tic tac toe");
let music = new Audio("bgmusic.mp3");
let audioTurn = new Audio("gamestart.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isgameover = false;
// Function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to chech win
const checkWin = () => {
  //for collecting all the boxtext element as an array
  let boxtexts = document.querySelectorAll(".boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText = `${boxtexts[e[0]].innerText} : "Won"`;
      isgameover = true;
      document.querySelector(".image").getElementsByTagName('img')[0].style.width ="200px";
    }
  });
};

// music.play();
// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext"); // we are selecting each boxtext for every iteration
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      // audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.querySelector(".info").innerText = `Turn for : ${turn}`;
      }
    }
  });
});

// adding listener for reset button 
document.querySelector('#reset').addEventListener('click',function(){
  let boxText = document.querySelectorAll('.boxtext');
  Array.from(boxText).forEach((e)=>{
    e.innerText = " ";
    isgameover = false;
    document.querySelector(".info").innerText = "Turn for : X";
    document.querySelector(".image").getElementsByTagName('img')[0].style.width ="0px"
  })
})
