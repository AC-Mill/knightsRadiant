"use strict"

// Get the button:
let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Form Validation

function checkForm() {
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const reedError = document.getElementById('reedError');
    const commentError = document.getElementById('commentError');
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    reedError.innerHTML = '';
    commentError.innerHTML = '';
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const reed = document.getElementById('reed');
    const comments = document.getElementById('comments');
  
    name.classList.remove('error');
    email.classList.remove('error');
    reed.classList.remove('error');
  
  
    let errorsFound = false;
  
  
    if (!name.value) {
      errorsFound = true;
      name.classList.add('error');
      const nameErr = document.createElement("li");
      nameErr.textContent = "Missing name.";
      nameError.appendChild(nameErr);
    }
  
  
    if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
      errorsFound = true;
      email.classList.add('error');
      const emailErr = document.createElement("li");
      emailErr.textContent = "Invalid or missing email address.";
      emailError.appendChild(emailErr);
    }
  
    if(!reed.value || !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(reed.value)){
      errorsFound = true;
      reed.classList.add('error');
      const reedErr = document.createElement("li");
      reedErr.textContent = "Invalid or missing span reed number.";
      reedError.appendChild(reedErr);  
    }
  
    if(!comments.value){
      errorsFound = true;
      comments.classList.add('error');
      const commentsErr = document.createElement("li");
      commentsErr.textContent = "Commenting is required.";
      commentError.appendChild(commentsErr);
    }
  
  
    if (errorsFound) {
      nameError.classList.remove('hide');
      emailError.classList.remove('hide');
      reedError.classList.remove('hide');
      commentError.classList.remove('hide');
    } else {
      nameError.classList.add('hide');
      emailError.classList.add('hide');
      reedError.classList.add('hide');
      commentError.classList.add('hide');
    }
  }

//Event Handlers 

document.getElementById("submitForm").addEventListener("click", function(event) {
    
    checkForm();
   
    event.preventDefault();

    document.getElementById("myForm").reset();
});






