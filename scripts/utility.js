function hideElement(enterIdName) {
    const element = document.getElementById(enterIdName);
    element.classList.add('hidden');
}
function showElement(enterIdName){
    const element = document.getElementById(enterIdName);
    element.classList.remove('hidden')
}

function getARandomAlphabet(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz' ;
    const alphabets = alphabetString.split('')

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    
    return alphabet;

}

function setBackgroundColor(enterIdName){
    const element = document.getElementById(enterIdName);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColor(enterIdName){
    const element = document.getElementById(enterIdName);
    element.classList.remove('bg-orange-400');
}
function getTextElementValueById(enterIdName){
    const element = document.getElementById(enterIdName);
    const elementValueText = element.innerText;
    const value = parseFloat(elementValueText)
    return value;
}
function setTextElementValueById(enterIdName,value){
    const element = document.getElementById(enterIdName);
    element.innerText = value;
}