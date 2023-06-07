

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



const dropdownButtons = document.querySelectorAll('.dropdown-toggle');
const dropdownItems = document.querySelectorAll('.dropdown-item');


dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
    
    const selectedValue = this.parentElement.getAttribute('data-value');
    
   
    const dropdownButton = this.closest('.dropdown').querySelector('.dropdown-toggle');

   
    dropdownButton.innerText = this.innerText;
  });
})


function isScheduleFormComplete() {
  const dropdownButtons = document.querySelector('#barberbutton');
  const serviceButtons = document.querySelector('#servicebutton');
  const textInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const commentInput = document.querySelector('#message');
  const dateInput = document.querySelector('#date');
  const timeInput = document.querySelector('#time');

  
  for (let i = 0; i < dropdownButtons.length; i++) {
    if (dropdownButtons[i].innerHTML === 'Barber') {
      return false; 
    }
  }
  for (let i = 0; i < serviceButtons.length; i++) {
    if (serviceButtons[i].innerHTML === 'Select a Service') {
      return false; 
    }
  }


  if (textInput.value.length === 0 || emailInput.value.length === 0 || dateInput.value === '' || timeInput.value === ''){
    return false;
  }

  return true; 
    
  }


 

  

  


function verifyscheduleform(){
  const form = document.getElementById('scheduleform');
 
 


  form.addEventListener('submit',function(event){
    
    event.preventDefault();
    const isValid =isScheduleFormComplete();

    if (isValid){
      console.log('Form submitted successfully!');


      window.location.href = "confirmation.html";
      
     
        
    }
    else{
     
      displayAlert('danger','Please fill out all required fields');
       
        
    }
  

  });  
}
