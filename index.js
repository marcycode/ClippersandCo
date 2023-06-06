

const alertContainer = document.getElementById('alertcontainer');


function verifyform() {
   
    const form = document.getElementById('contactus');
  

    form.addEventListener('submit',function(event){
      event.preventDefault();
      const isValid= validateForm();
      if (isValid){
        displayAlert('success','Thank you for contacting us! We will get back to you as soon as possible');
        form.reset();
        
      }
      else{
        displayAlert('danger','Please fill out all required fields');
       
        
      }
  

    });  
}

function validateForm(){
  const form = document.getElementById('contactus');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const inputs = form.querySelectorAll('input','textarea');

  if (name.length != 0 && email.length != 0 && message.length != 0){
    return true;

  }
  else{
    if (name.length == 0 || email.length == 0 || message.length == 0){
      return false;
    }
    
  }

}

function displayAlert(type, message) {
  const alertElement = document.createElement('div');
  alertElement.classList.add('alert', `alert-${type}`);
  alertElement.textContent = message;

  alertContainer.innerHTML = '';
  alertContainer.appendChild(alertElement);

  setTimeout(function() {
    alertElement.remove();
  }, 3000);
}

