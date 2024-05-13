const form = document.getElementsByClassName('nyhetsbrev');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('/login', {
    method: 'POST',
    body: formData,
  })
   .then(response => response.json())
   .then(data => {
    })
   .catch(error => {
    });
});


const shoppingCart = [];

const shoppingCartBtn = document.getElementById('shopping-cart-btn');
const shoppingCartDiv = document.getElementById('shopping-cart');

shoppingCartBtn.addEventListener('click', () => {
  shoppingCartDiv.innerHTML = '';
  shoppingCart.forEach((item, index) => {
    shoppingCartDiv.innerHTML += `<p>${item.name} - ${item.price}</p>`;
  });
});

// const item = {
//   name: 'Måtorbåt',
//   price: 10000,
// };
// shoppingCart.push(item);

