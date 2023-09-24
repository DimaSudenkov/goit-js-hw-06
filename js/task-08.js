const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerForm);

function handlerForm(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value
  }


  if (password.value === '' || email.value === '') {
    alert('all fields must be filled');
  }

  console.log(data);

  event.currentTarget.reset()

}
