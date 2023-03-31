const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
    alert("Por favor, complete todos los campos");
  } else {
    alert("Gracias por contactarnos, " + name + ". Nos pondremos en contacto contigo pronto.");
    form.reset();
  }
});






