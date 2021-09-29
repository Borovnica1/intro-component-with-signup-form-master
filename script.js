const submitBtn = document.querySelector('.form__submit');
const labels = document.querySelector('.sign-up__form').querySelectorAll('label');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showError(element) {
  element.style.overflow = 'initial';
  element.style.height = '100%';
  element.style.border = '2px solid rgba(255,0,0,.6)';
}

function removeError(element) {
  element.style.overflow = 'hidden';
  element.style.height = '0%';
  element.style.border = '0px solid rgba(255,0,0,.6)';
}

submitBtn.addEventListener('click', (e) => {
  for (let label of labels) {
    const inputEl = label.children[0];
    if (inputEl.value.length == 0 && label.getAttribute('for') != 'email') {
      showError(label.children[1]);
      label.style.marginBottom = '25px';
    } else if (label.getAttribute('for') == 'email') {
      if (!validateEmail(inputEl.value)) {
        showError(label.children[1]);
        label.style.marginBottom = '25px';
      }
    }
  }

});

for (let label of labels) {
  label.addEventListener('click', (e) => {
    label.style.marginBottom = '15px';
    removeError(label.children[1]);
  })
}