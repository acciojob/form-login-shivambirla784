function getFormvalue() {
  // Get the form by its ID
  let form = document.getElementById('form1');
  
  // Get the values of first name and last name from the form inputs
  let firstName = form.elements['fname'].value;
  let lastName = form.elements['lname'].value;
  
  // Show the values in an alert
  alert(firstName + " " + lastName);
  
  // Prevent the form from submitting (so the page doesn't reload)
  return false;
}

