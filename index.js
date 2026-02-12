console.log("JS loaded");

let num1 = 0
let num2 = 0

let num1El = document.getElementById("num1")
let num2El = document.getElementById("num2")

function add1H() {
    num1 += 1
    num1El.textContent = num1
}

function add2H() {
    num1 += 2
    num1El.textContent = num1
}

function add3H() {
    num1 += 3
    num1El.textContent = num1
}

function add1G() {
    num2 += 1
    num2El.textContent = num2
}

function add2G() {
    num2 += 2
    num2El.textContent = num2
}

function add3G() {
    num2 += 3
    num2El.textContent = num2
}