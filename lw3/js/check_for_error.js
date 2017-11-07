class RegistrationPage {
  constructor(formElement) {
    this.form = formElement;
    this.formLogin = formElement.getElementsByClassName('input-log__input')[0].value;
    this.formPassword = formElement.getElementsByClassName('input-pass__input')[0].value;
    this.formPasswordCheck = formElement.getElementsByClassName('input-pass-check__input')[0].value;
    this.formCheck = formElement.getElementsByClassName('check_input')[0].checked;
  }
  validate() {
  }
  success() {
    alert('Вы успешно зарегистрировались.');
  }
  error() {
    alert('Error');
  }
}

document.querySelector('.login-page').onsubmit = function () {
  var form = new RegistrationPage(document.getElementsByClassName('login-page')[0]);
  if (form.validate()) {
    form.success();
  }
  else {
    form.error();
  }
  return false;
};