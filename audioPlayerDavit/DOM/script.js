// let para = document.getElementsByTagName("p")

// console.log(para[1])

// for (let i = 0; i < para.length; i++) {
//     para[i].style.backgroundColor = "aqua"
//     para[i].style.fontSize = "50px"
//     para[i].style.textAlign = "center"
// }

// ------------------------------------------


let numbers = [-2, -5, -1, 0, 5, 7, 3, -9, 0, 10, -3]
let main = document.getElementsByClassName("main")
console.log(main)

main[0].style.display = "flex"

for (let i = 0; i < numbers.length; i++) {
    let h1 = document.createElement("h1")
    main[0].appendChild(h1)
    h1.innerHTML = numbers[i]
    h1.style.margin = "10px"
    if (numbers[i] === 0) {
        h1.style.color = "orange"
    } else if (numbers[i] > 0) {
        h1.style.color = "red"
    } else {
        h1.style.color = "blue"
    }
}


////
let but = document.createElement("button")
document.body.appendChild(but)
but.style.height = "50px"
but.style.width = "80px"
but.textContent = "Change"


function change() {
    console.log("test");
    let letters = document.getElementsByTagName("h1")
    for (let i = 0; i < letters.length; i++) {
        let elem = letters[i]

        elem.style.fontSize = "80px"

        if (elem.style.color === "red") {
            elem.style.color = "blue"
        } else if (elem.style.color === "blue") {
            elem.style.color = "red"
        }

        if (elem.innerHTML == 0) {
            main[0].removeChild(elem)
        }
        main[0].classList.toggle("mystyle")

    }

}


but.addEventListener("click", change)