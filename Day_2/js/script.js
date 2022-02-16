document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
const food = document.getElementById("food-select")
const transport = document.getElementById("transport-select")
const balloon = document.getElementById("balloon-checkbox")
 

function calculate() {
    const foodValue = food.options[food.selectedIndex].value
    const transportValue = transport.options[transport.selectedIndex].value
    
    if(foodValue === ''){
        document.getElementById('food-select').classList.add("alert")
        alert("Select One of the Food")
    }else{
         document.getElementById('food-select').classList.remove("alert")   
    }
    if(transportValue === ''){
        document.getElementById('transport-select').classList.add("alert")
        alert("Select One of the Transport")
    }else{
          document.getElementById('transport-select').classList.remove("alert")   
    }
    if(foodValue && transportValue ){
         if(balloon.checked){
            costEl.innerText = "$"+(parseInt(foodValue)+parseInt(transportValue) + parseInt(balloon.value))
        }else{
            costEl.innerText = "$"+(parseInt(foodValue) + parseInt(transportValue))
        }
    } 
}
 