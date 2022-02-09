const minPrice = document.querySelector("#min-price")
const maxPrice = document.querySelector("#max-price")
const priceSidler = document.querySelector("#price-range")

priceSidler.addEventListener('input', (e) => {
     minPrice.innerHTML =  `₹ ${e.target.value}`
})