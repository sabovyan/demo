const myInput = document.getElementById('my-input');
const display = document.getElementById('display');

myInput.addEventListener('input', (e) => {
  display.textContent = e.target.value;
})