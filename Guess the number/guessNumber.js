// Math.random() hamesha decimal me deta hai to usko 100 se mul karna zaroori hai
let randomNumber =parseInt(Math.random()*100+1);
console.log(randomNumber)

const submit =document.querySelector('#subt')
const userInput =document.querySelector('#guessField')//.value yahin laga sakte hain 
const guessSlot =document.querySelector('.guesses')
const remaning =document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
 let prevGuess = []
 let numGuess =1

 let playGame = true//ye to har game me hota hai  isko check kar ke hi aage game continue hota hai (man lo guess, coins,energy khatam ho gayi)

 if(playGame){
   submit.addEventListener('click',function(e){
     e.preventDefault()
     const guess = parseInt(userInput.value)
     validateGuess(guess)
   })
 }
function validateGuess(guess){
  if(isNaN(guess)|| guess<1||guess>100){
      alert("please enter a valid number")
  }
  else{
    prevGuess.push(guess)

    if(numGuess==11){
      cleanUpGuess(guess)
      displayMessage(`Game Over !!  Number was ${randomNumber}`)
      endGame()
    }
    else{
      cleanUpGuess(guess)
      checkGuess(guess)
    }


  }
}



function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`correct guess YOU WIN!!`)
    endGame()
  }
  else if(guess< randomNumber){
    displayMessage("number is low")
  }
  else if(guess> randomNumber){
    displayMessage("number is high")
  }
}



function cleanUpGuess(guess){
  userInput.value = ''//clean up jaisa samajh lo isko
  guessSlot.innerHTML += `${guess}  ,`
  numGuess++;
  remaning.innerHTML =`${11- numGuess}`
}

function displayMessage(message){
  lowOrHigh.innerHTML=`<h2>${message}</h2>`
}


function endGame(){
  userInput.value ='' 
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML =`<h2 id ="newGame">Start new Game </h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame()
}

function newGame(){
  const newGameButton =document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber =parseInt(Math.random()*100+1);
    prevGuess = []
    numGuess =1
    guessSlot.innerHTML =''
    remaning.innerHTML =`${11- numGuess}`
    userInput.removeAttribute('disabled')//set kiya tha na jab chances khatam ho gayin thi
    startOver.removeChild(p)
    playGame = true
  })
}
