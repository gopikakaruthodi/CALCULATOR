const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') {
      inputBox.value = '';
    } else if (value === 'DEL') {
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (value === '=') {
     inputBox.value = eval(inputBox.value);

    } else {
      inputBox.value += value;
    }
  });
});