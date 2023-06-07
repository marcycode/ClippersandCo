function isFormComplete() {
    const dropdownButton = document.querySelector('#dropdownButton');
    const textInput = document.querySelector('#fullname');
    const emailInput = document.querySelector('#email');
    const commentInput = document.querySelector('#message');
    const dateInput = document.querySelector('#dateInput');
    const timeInput = document.querySelector('#timeInput');
  
   
    if (dropdownButton.innerHTML === 'Select a Service' ||
        textInput.value.trim() === '' ||
        dateInput.value === '' ||
        timeInput.value === '' || emailInput.value === '' ||
        commentInput === '') {
      return false; 
    }
  
    return true;
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

const myForm = document.querySelector('#scheduleform');

myForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  if (isFormComplete()) {
    displayAlert('success','Your appointment was scheduled successfully')
   
    myForm.submit();
  } else {
    displayAlert('warning','Please fill out all the fields')
   
  }
});

  