import logo from './logo.svg';
import './App.css';

import dice1 from "./images/dice1.png";
import dice2 from "./images/dice2.png";
import dice3 from "./images/dice3.png";
import dice4 from "./images/dice4.png";
import dice5 from "./images/dice5.png";
import dice6 from "./images/dice6.png";



function App() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = randomDiceImage;

 if (randomImageSource === "dice1.png") {
   randomImageSource = dice1;
 } else if (randomImageSource === "dice2.png") {
   randomImageSource = dice2;
 } else if (randomImageSource === "dice3.png") {
   randomImageSource = dice3;
 } else if (randomImageSource === "dice4.png") {
   randomImageSource = dice4;
 } else if (randomImageSource === "dice5.png") {
   randomImageSource = dice5;
 } else {
   randomImageSource = dice6;
 }

 // var image1 = document.querySelectorAll("img")[0];

 // image1.setAttribute("src", {randomImageSource});

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
   var randomDiceImage2 = "dice" + randomNumber2 + ".png";
   var randomImageSource2 =randomDiceImage2;
   if(randomImageSource2 === "dice1.png")
   {
     randomImageSource2 = dice1;
   }
    else if (randomImageSource2 === "dice2.png") {
      randomImageSource2 = dice2;
    }
     else if (randomImageSource2 === "dice3.png") {
       randomImageSource2 = dice3;
     }
      else  if (randomImageSource2 === "dice4.png") {
        randomImageSource2 = dice4;
      }
       else if (randomImageSource2 === "dice5.png") {
         randomImageSource2 = dice5;
       }
        else {
          randomImageSource2 = dice6;
        }
console.log(randomImageSource2);
 // var image2 = document.querySelectorAll("img")[1];

 // image2.setAttribute("src", {randomImageSource2});
 var ans = "Refresh Me";
  if (randomNumber1 > randomNumber2) {
    ans = "Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    ans = "Player 2 Wins";
  } else {
    ans = "Draw";
  }

    const  refreshPage = ()  => {
      window.location.reload(false);
    }
  return (
    <div className="App">
      <div className="container">
        <h1>{ans}</h1>
        <div className="dice">
          <p>Player 1</p>
          <img className="img1" src={randomImageSource} />
        </div>
        <div className="dice">
          <p>Player 2</p>
          <img className="img2" src={randomImageSource2} />
        </div>
        <br />
        <br />
        <br />
        <button
          style={{
            fontSize: "2rem",
            cursor: "pointer",
            backgroundColor: "#4ecca3",
            color: "black",
            padding: "10px",
            borderRadius: "35px",
          }}
          onClick={refreshPage}
        >
          Click Here to Refresh !
        </button>
      </div>
    </div>
  );
}

export default App;
