const playersInput = document.getElementById("players-input")
const playersContainer = document.querySelector("#players-container")
const playersArray = []
const pushBtn = document.getElementById("push")
const startBtn = document.querySelector("#start")
const result = document.querySelector("#demo")

let lastresult = null ;
let i = 0;


pushBtn.addEventListener("click" , addplayer )

function addplayer() {
    
    const newplayer = document.createElement("p")
    newplayer.innerText = playersInput.value
    playersContainer.appendChild(newplayer) 
    playersInput.value = ""
    playersInput.focus()
    

    newplayer.index = i
    i++
    if (newplayer.innerText) {
    playersArray.push(newplayer) }
    else { }
    newplayer.addEventListener("click" , removeplayer )
}

function removeplayer()  {
    playersArray.splice(this.index , 1)
    this.remove()
}

startBtn.addEventListener("click" , askplayer)
function askplayer() {
let n = Math.floor( Math.random() * (playersArray.length ) )
let m = Math.floor( Math.random() * (playersArray.length  ) )
let askerPlayer = playersArray[n].innerText
let askedPlayer = playersArray[m].innerText

if ( m !== n ) {
    
result.innerText = `${askerPlayer} Asks ${askedPlayer}`
if ( lastresult === result.innerText ) { 
     askplayer()  }
lastresult = result.innerText ;
}

else {
 askplayer()}


}

