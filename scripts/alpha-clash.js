/*function play(){
    // step-1: hide the home screen. to hide te screen add the class hidden to the home section
    const homeScreen = document.getElementById('home-screen')
    homeScreen.classList.add('hidden')
    // show the playground
    const playGround = document.getElementById('playground')
    playGround.classList.remove('hidden')
}*/
function handleKeyBoardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log('player pressed', playerPressed);

  const currentAlphabetElement = document.getElementById('crrent-alphabet')
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (playerPressed === expectedAlphabet) {

    console.log('you get a point ');
    const currentScore =  getTextElementValueById('current-score');
    console.log(currentScore);
    const newScore = currentScore + 1;
    setTextElementValueById('current-score',newScore)


    console.log('you have pressed correctly', expectedAlphabet)
    removeBackgroundColor(expectedAlphabet)

    continueGame();

  }
  else {
    console.log('you lose try again');
    const currentLife = getTextElementValueById('current-life')
    const updatedLife = currentLife -1;
    setTextElementValueById('current-life',updatedLife)


    if(updatedLife == 0){
     gameOver();
    }
  }

  console.log(playerPressed, expectedAlphabet);
}

document.addEventListener('keyup', handleKeyBoardKeyUpEvent)

function continueGame() {

  const alphabet = getARandomAlphabet();

  const currentAlphabet = document.getElementById('crrent-alphabet');
  currentAlphabet.innerText = alphabet;

  setBackgroundColor(alphabet)

}
function play() {
  hideElement('home-screen');
  hideElement('score')
  showElement('playground');
  setTextElementValueById("current-life",5)
  setTextElementValueById('current-score',0)
 
  continueGame();
}

function gameOver (){
 hideElement('playground')
 showElement('score')

 const lastScore = getTextElementValueById("current-score");
 console.log(lastScore);
 setTextElementValueById('last-score')
}