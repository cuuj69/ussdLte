// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('phone-form');
    const resultDiv = document.getElementById('result');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const operator = document.getElementById('operator').value;
      const phoneNumber = document.getElementById('phone').value;
      let resultMessage = '';
      
      //validate numbers
      if (operator === 'mtn' && phoneNumber.startsWith('024') || 'mtn' && phoneNumber.startsWith('054') || 'mtn' && phoneNumber.startsWith('055')  || 'mtn' && phoneNumber.startsWith('059') ) {
        resultMessage = 'Valid MTN number!';
      } else if (operator === 'vodafone' && phoneNumber.startsWith('050') || 'vodafone' && phoneNumber.startsWith('020')) {
        resultMessage = 'Valid Vodafone number!';
      } else if (operator === 'airtelTigo' && phoneNumber.startsWith('027') || 'airtelTigo' && phoneNumber.startsWith('026') || 'airtelTigo' && phoneNumber.startsWith('056') || 'airtelTigo' && phoneNumber.startsWith('057')) {
        resultMessage = 'Valid AirtelTigo number!';
      } else {
        resultMessage = 'Invalid number for the selected operator.';
      }
      
      resultDiv.innerHTML = resultMessage;
      resultDiv.classList.remove('hidden');
    });

    //theme switch
    themeToggle.addEventListener('click',()=>{
        body.classList.toggle('dark')
    })
  });
  

