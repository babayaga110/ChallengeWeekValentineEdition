const greetingDisplay = document.getElementById("greeting-display")
const toInput = document.getElementById("recipient-input")
const fromInput = document.getElementById("sender-input")
const greeting = document.getElementById("greeting-select")
const form = document.getElementById("form")
const hearbeat = document.getElementById("heartbeat")
function writeGreeting() {
    let toName = "" ;
    let fromName = "";
    let greetingMessage = "";
    if(toInput.value){
        toName = `Dear, ${toInput.value}`
    }
    if(fromInput.value){
        fromName = `Love, ${fromInput.value}`
    }
  hearbeat.classList.add("heart")
   greetingDisplay.innerHTML = `
                                <h4 class="name">${toName}</h4>
                                <p class="greeting">${greeting.options[greeting.selectedIndex].value}</p>
                                <h4 class="name">${fromName}</h4>
                                `
}

form.addEventListener('input', writeGreeting)