// Simple form submission handler
function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Log form data to the console (you can replace this with actual form submission logic)
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  
    // Optional: Clear the form after submission
    document.getElementById('contact-form').reset();
  }
  