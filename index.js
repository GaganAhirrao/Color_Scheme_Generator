const colourInput = document.getElementById("select-colour")
const selectTone = document.getElementById("select-colour-tone")
const btn = document.querySelector(".btn")

btn.addEventListener("click", function(){
    const chosenColour = colourInput.value.slice(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColour}&mode=${selectTone.value}&count=5`)
        .then( res => res.json())
        .then( data => {
            renderColours(data)
        })

})

function renderColours(data){

    // Selecting the five div's and changing the background colours 
    document.querySelector(".one").style.backgroundColor = data.colors[0].hex.value
    document.querySelector(".two").style.backgroundColor = data.colors[1].hex.value
    document.querySelector(".three").style.backgroundColor = data.colors[2].hex.value
    document.querySelector(".four").style.backgroundColor = data.colors[3].hex.value
    document.querySelector(".five").style.backgroundColor = data.colors[4].hex.value


    // Selecting the paragraph tags and showing the colour codes
    document.querySelector(".hex-code-one").textContent = data.colors[0].hex.value
    document.querySelector(".hex-code-two").textContent = data.colors[1].hex.value
    document.querySelector(".hex-code-three").textContent = data.colors[2].hex.value
    document.querySelector(".hex-code-four").textContent = data.colors[3].hex.value
    document.querySelector(".hex-code-five").textContent = data.colors[4].hex.value

}

document.querySelector(".one").addEventListener("click", function(){
    const code = document.querySelector(".hex-code-one").textContent
    navigator.clipboard.writeText(code)
})

document.querySelector(".two").addEventListener("click", function(){
    const code = document.querySelector(".hex-code-two").textContent
    navigator.clipboard.writeText(code)
})

document.querySelector(".three").addEventListener("click", function(){
    const code = document.querySelector(".hex-code-three").textContent
    navigator.clipboard.writeText(code)
})

document.querySelector(".four").addEventListener("click", function(){
    const code = document.querySelector(".hex-code-four").textContent
    navigator.clipboard.writeText(code)
})

document.querySelector(".five").addEventListener("click", function(){
    const code = document.querySelector(".hex-code-five").textContent
    navigator.clipboard.writeText(code)
})

