
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}



function sendEmail() {
    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Initialize EmailJS with your user ID
    emailjs.init('fNT_MR51jR8AHidmY');
  
    // Use the EmailJS send function to send the email
    emailjs.send('service_nh8ss2q', 'template_qzf2lph', {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
}

