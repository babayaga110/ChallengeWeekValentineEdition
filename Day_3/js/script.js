document.getElementById("btn").addEventListener("click", correct)
const sentence = document.getElementById("paragraph")
const array = sentence.innerText.toString().toLowerCase().split(" ")

function correct() {
    let news = ""
    if(document.getElementById('uppercase').checked){
        news = sentence.innerText.toUpperCase()
    }
     if(document.getElementById('lowercase').checked){
        news = sentence.innerText.toLowerCase()
    }
     if(document.getElementById('capitalizecase').checked){
        for(let i = 0;i < array.length; i++){
        news += array[i].charAt(0).toUpperCase() + array[i].slice(1)
        news += " "
        }
    }
    
sentence.innerText = news
}
