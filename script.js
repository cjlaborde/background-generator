const css = document.querySelector("h3") 
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const body = document.getElementById("gradient")

console.log(body)
// body.style.background = "red"

console.log(css)
console.log(color1)
console.log(color2)

// event for input

function colorSwitcher() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value 
    + ")"

    css.textContent = body.style.background
}


color1.addEventListener('input', colorSwitcher)

color2.addEventListener('input', colorSwitcher)



// color1.addEventListener('input', function() {
//     // console.log(color1.value)
//     colorSwitcher()

// })
// color2.addEventListener('input', function() {
//     // console.log(color1.value)
//     colorSwitcher()

// })