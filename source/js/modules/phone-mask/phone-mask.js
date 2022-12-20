// Источник : https://webkaa.ru/javascript/maska-nomera-telefona-js
document.addEventListener('DOMContentLoaded', function () {
  let eventCalllback = function (e) {
    let el = e.target;
    let clearVal = el.dataset.phoneClear;
    let pattern = el.dataset.phonePattern;
    let matrixDef = '+7(___) ___-__-__';
    let matrix = pattern ? pattern : matrixDef;
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = e.target.value.replace(/\D/g, '');
    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.setCustomValidity('Заполните поле в формате: +7(___)___-__-__');
        return;
      }

      e.target.setCustomValidity('');
      return;
    }
    if (def.length >= val.length) {
      val = def;
    }
    e.target.value = matrix.replace(/./g, function (a) {
      // eslint-disable-next-line no-nested-ternary
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
  };
  let phoneInputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phoneInputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});
