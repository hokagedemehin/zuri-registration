const myformBtn = document.querySelector('#myFormButton');
myformBtn.addEventListener('click', formSubmitted);
const myform = document.querySelector('#myForm');
function formSubmitted(event) {
  event.preventDefault();
  console.log('work');
  if (!myform.firstName.value) {
    document.querySelector('#firstName').classList.add('error');
    document.querySelector('#firstnameerror').classList.add('show');
    document.querySelector('#firstNameIcon').classList.add('show');
  }
  if (!myform.lastName.value) {
    document.querySelector('#lastName').classList.add('error');
    document.querySelector('#lastnameerror').classList.add('show');
    document.querySelector('#lastNameIcon').classList.add('show');
  }
  if (
    !myform.email.value ||
    !myform.email.value.includes('@') ||
    !myform.email.value.includes('.')
  ) {
    document.querySelector('#email').classList.add('error');
    document.querySelector('#emailerror').classList.add('show');
    document.querySelector('#emailIcon').classList.add('show');
  }
  if (!myform.password.value) {
    document.querySelector('#password').classList.add('error');
    document.querySelector('#passworderror').classList.add('show');
    document.querySelector('#passwordIcon').classList.add('show');
  }
}
