const checkBox = document.getElementById('discount-checkbox');
const timeNumber = document.getElementById('discount-text');
checkBox.addEventListener('input', e => {
  e.target.checked ? timeNumber.disabled = false : timeNumber.disabled = true;
});
