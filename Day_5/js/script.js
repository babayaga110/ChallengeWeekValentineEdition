const url = "https://apis.scrimba.com/hexcolors/?count=2"
const body = document.body
const heart = document.getElementById('heart')
document.getElementById("btn").addEventListener("click", changeColor)

async function changeColor() {
    heart.classList.remove("ani")
    const response = await fetch(url)
                        .then(resp =>resp.json())
                        .then(data=>data)
                        .catch((error) =>{
                            console.log('Error: ', error);
                        });
                        console.log(response.colors[1].value)
    let colorOne = response.colors[0].value
    let colorTwo = response.colors[1].value
    if(colorOne === colorTwo){
        changeColor();
    }else{
        body.style.backgroundColor = colorOne
        heart.style.setProperty('--white', colorTwo)
        heart.classList.add("ani")
    }
}
