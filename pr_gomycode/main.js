console.log("JS file linked success !")

// Select elements
var plusBtns = Array.from(document.querySelectorAll('.fa-circle-plus'));
var minusBtns = Array.from(document.querySelectorAll('.fa-circle-minus'));
var favs = Array.from(document.querySelectorAll('.fa-heart'))
var deleteBtns = Array.from(document.querySelectorAll('.fa-trash-can'))
var cards = Array.from(document.querySelectorAll('.card'))

// console.log(cards)


// Favorites // Like Buttons
for (let fav of favs) {
    fav.addEventListener("click", function() {
        if (fav.style.color != 'red') {
            ( fav.style.color = 'red'  )
        } else {
            fav.style.color = 'rgb(33, 37, 41)'
        }
    })
}

// Remove btn
for ( let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function() {
        cards[i].remove()
        total()
    })
}

// Plus btn
for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click", function() {
        plusBtn.nextElementSibling.innerHTML++
        total()
    })
}

// minus btn
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click", function() {
        minusBtn.previousElementSibling.innerHTML > 0 ? minusBtn.previousElementSibling.innerHTML-- : null
        total()
    })
}


// Function total price
function total() {
    let qte = Array.from(document.querySelectorAll('.counter'))
    let price = Array.from(document.querySelectorAll('.unit-price'))

    let s = 0

    for (let i = 0; i < price.length; i++) {
        s = s + price[i].innerHTML * qte[i].innerHTML
    }
    document.getElementById('total-price').innerHTML = s
}