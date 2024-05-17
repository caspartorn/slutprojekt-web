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



function addtocart(){
  alert("Tillagd i Varukorg!");
}

