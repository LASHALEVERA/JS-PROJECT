let search = document.querySelector("button");
let input1 = document.querySelector("#id1");
let input2 = document.querySelector("#id2");
let input3 = document.querySelector("#id3");
let section = document.querySelector("section");

search.addEventListener("click", function() {
 let inputvalue = input1.value.toLowerCase();
 console.log(inputvalue);
 let apiUrl = `https://api.everrest.educata.dev/shop/products/all/`;

fetch(apiUrl)
.then(response => response.json())
.then(response => renderer(response));

function renderer(itemList) {
console.log(itemList);

section.innerHTML = "";

for (let i = 0; i <= itemList.length; i++) {
// if (itemList[i].title.toLowerCase().includes(inputvalue)) {
section.innerHTML += `
<div class="card" style="width: 31rem;">
// <img src="${products[i].category.image}" class="img" alt="photo">
<h5>${products[i].title}</h5>
// <p class="rate">${products[i].price.current}</p>
</div>
    `;
    }
    }
    }
// }
);



// for (let i=0; i<itemList.length; i++) {
//     // if (item[i].category =="laptops")
//     section.innerHTML += `
//     <div class="card" style="width: 31rem;">
//     <img src="${itemList[i].images}" class="img" alt="photo">
//     <h5>${itemList[i].title}</h5>
//     <p class="rate">${itemList[i].price}</p>
//     </div>
//     `


// items.forEach(item => {
//     item.products.forEach(product=> {
// if (product.price.current >= input2.value && product.price.current <= input3.value && product.title.includes(input1.value)) {

//     section.innerHTML += `
//     <div class="card" style="width: 31rem;">
//     <img src="${product.images}" class="img" alt="photo">
//     <h5>${product.title}</h5>
//     <p class="rate">${product.price.current}</p>
//     </div>
//     `;











