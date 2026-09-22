function solve(text, modifyCommand) {
    let output = '';

    if (modifyCommand !== 'Camel Case'
        && modifyCommand !== 'Pascal Case') {

        output = 'Error!';
        console.log(output);
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

    console.log(output);
}

solve("this is an example", "Camel Case");
solve("secOND eXamPLE", "Pascal Case");
solve("Invalid Input", "Another Case");
