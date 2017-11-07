function validLogin(email) {
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  return pattern.test(email);
}

class RegistrationPage {
  constructor(formElement) {
    this.form = formElement;
    this.formLogin = formElement.getElementsByClassName('input-log__input')[0].value;
    this.formPassword = formElement.getElementsByClassName('input-pass__input')[0].value;
    this.formPasswordCheck = formElement.getElementsByClassName('input-pass-check__input')[0].value;
    this.formCheck = formElement.getElementsByClassName('check_input')[0].checked;
  }
  validate() {
    if (!validLogin(this.formLogin)) {
      this.errorMsg = 'Введите корректный email!';
      return false;
    }

    if (this.formPassword.length < 6) {
      this.errorMsg = 'Длина пароля должна составлять более 6 символов';
      return false;
    }

    if (this.formPassword !== this.formPasswordCheck) {
      this.errorMsg = 'Пароли не совпадают!';
      return false;
    }

    if (!this.formCheck) {
      this.errorMsg = 'Вы не согласны с правилами сайта!';
      return false;
    }

    return true;
  }
  success() {
    alert('Вы успешно зарегистрировались.');
  }
  error() {
    alert(this.errorMsg);
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