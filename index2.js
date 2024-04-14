let section = document.querySelector("section")

let apiUrl = `https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50&sort_by=price&sort_direction=asc`;
fetch(apiUrl)
.then(response => response.json())
.then(response => productRenderer(response.products))

function productRenderer(productDetails) {
console.log(productDetails);


// section.innerHTML = ""

productDetails.forEach(product => {
  if (product._id = "6526b9bb57e3ec956179e6ee") {
  section.innerHTML = `
  <div class="card" style="width: 25rem;">
  <img src="${item.images}" class="img" alt="photo">
  <h5 class="title">${item.brand}</h5>
  <h5 class="title">${item.brand}</h5>
  <h5 class="title">${item.brand}</h5>
  <h5 class="title">${item.brand}</h5>
  <h3 class="title">${item.title}</h3>
  <h4 class=discounted>${item.price.beforeDiscount} </h4>
  <h5> ${item.price.current}</h5>
  <p class="rate">${item.description}</p>
  </div>
  `
  
  }
})
}


const productId = item.title.toLowerCase().includes(input1.value.toLowerCase())
getProductIdFromURL();
fetchItemDetails(productId)
  .then(itemDetails => { displayItemDetails(itemDetails);
  })
  .catch(error => {
    console.error('Error fetching item details:', error);
  });

function fetchItemDetails(productId) {
  const apiUrl = `https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50&sort_by=price&sort_direction=asc`;
  return fetch(apiUrl)
    .then(response => response.json())
    .then(itemDetails => {
      return itemDetails; 
    });
}

function displayItemDetails(itemDetails) {
  const productDetailsContainer = document.getElementById('product-details');
  const htmlMarkup = `
    <h2>${itemDetails.title}</h2>
    <img src="${itemDetails.image}" alt="${itemDetails.title}">
    <p>${itemDetails.description}</p>
    <!-- Add more details as needed -->
  `;
}

// ${productId}