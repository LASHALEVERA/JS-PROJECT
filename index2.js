
let apiUrl = `https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50&sort_by=price&sort_direction=asc`;
fetch(apiUrl)
.then(response => response.json())
.then(response => productRenderer(response.products))

function productRenderer(productDetails) {
console.log(productDetails);
}

// section.innerHTML = ""


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