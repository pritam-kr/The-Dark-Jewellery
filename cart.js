const decreaseQuantity = document.querySelector("#decrease-quantity")
const increaseQuantity = document.querySelector("#increase-quantity")
const quantityCount = document.querySelector("#quantity-count")

var count = 0;

decreaseQuantity.addEventListener('click', () => {
    count--

    if (count < 0) {
        count = 0
    }

    quantityCount.innerHTML = count
})

increaseQuantity.addEventListener('click', () => {
    count++
    quantityCount.innerHTML = count
})