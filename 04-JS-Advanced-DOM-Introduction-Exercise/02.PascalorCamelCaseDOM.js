function solve() {
  let text = document.getElementById('text').value;
  let modifyCommand = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let output = '';

  if (modifyCommand !== 'Camel Case'
    && modifyCommand !== 'Pascal Case') {

    output = 'Error!';
    result.textContent = output;
    return;
  }

  let textArr = text.toLowerCase().split(' ');

  for (let i = 0; i < textArr.length; i++) {
    let word = textArr[i];
    let modWord = '';

    if (modifyCommand === 'Camel Case') {

      if (i === 0) modWord = word;
      else modWord = word[0].toUpperCase() + word.slice(1);

    } else if (modifyCommand === 'Pascal Case') {
      modWord = word[0].toUpperCase() + word.slice(1);

    }

    output += modWord;
  }

  result.textContent = output;
}