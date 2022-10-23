const button = document.querySelector(".button")
const background = document.querySelector(".item")
const output = document.querySelector(".output")



button.addEventListener("click", () => {
    const num1 = Math.floor(Math.random() * 255) + 1;
    const num2 = Math.floor(Math.random() * 255) + 1;
    const num3 = Math.floor(Math.random() * 255) + 1;
    const num4 = Math.floor(Math.random() * 255) + 1;
    output.innerText = `rgba(${num1},${num2},${num3},${num4})`
    background.style.backgroundColor = `rgb(${num1},${num2},${num3},${num4})`;
    
})