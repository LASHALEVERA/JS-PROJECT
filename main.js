let search = document.querySelector("button");
let input1 = document.querySelector("#id1");
let input2 = document.querySelector("#id2");
let input3 = document.querySelector("#id3");
let section = document.querySelector("section");
let apiUrl = `https://api.everrest.educata.dev/shop/products/all/`;
// let apiUrl = `https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50&sort_by=price&sort_direction=asc`;

search.addEventListener("click", function() {
//  let inputvalue = input1.value.toLowerCase();
//  console.log(inputvalue);

fetch(apiUrl)
.then(response => response.json())
.then(response => htmlRenderer(response.products))

function htmlRenderer(itemList) {
console.log(itemList)

section.innerHTML = ""

itemList.forEach(item => {
if (item.price.current >= input2.value && item.price.current <= input3.value && item.title.toLowerCase().includes(input1.value.toLowerCase())) {
section.innerHTML += `
<div class="card" style="width: 25rem;">
<h3>${item.brand}</h3>
<h5>${item.price.current}</h5>
<img src="${item.images}" class="img" alt="photo">
<p class="rate">${item.description}</p>
<a href="./index2.html" class="btn btn-primary">დეტალურად</a>
</div>
`
}
})
}
})

// <img src="${item.category.image}" class="img" alt="photo">

function fetchPrices() {
const symbols = ['BTC', 'ETH', 'XRP', 'FIL', 'MATIC', 'SOL'];

symbols.forEach(symbol => {
fetch(`https://api.coinbase.com/v2/prices/${symbol}-USD/spot`)
.then(response => response.json())
.then(data => {
document.getElementById(`${symbol}-price`).innerText = `${symbol}: $${data.data.amount}`;
})
.catch(error => {
console.error('Error fetching price:', error);
});
});
}
window.onload = fetchPrices;
setInterval(fetchPrices, 3000);