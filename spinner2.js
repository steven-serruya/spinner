
const spinnerCharacters = ['|', '/', '-', '\\'];
const animateSpinner = (index) => {
  process.stdout.write(`\r${spinnerCharacters[index]}   `);
  setTimeout(() => {
    if (index + 1 === spinnerCharacters.length) {
      index = 0;
    } else {
      index = index + 1;
    }
    animateSpinner(index);
  }, 200);
};

animateSpinner(0);