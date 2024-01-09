function submitForm(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!firstName || !lastName || !email || !message) {
      alert('Please, fill all the fields.');
      return;
    }
  
    document.getElementById('confirmationMessage').innerText = 'Message sent successfully';
    document.getElementById('contactForm').reset();
  }