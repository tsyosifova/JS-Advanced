function addItem() {
    const textInput = document.getElementById('newItemText');
    const textValue = document.getElementById('newItemValue');

    const opt = document.createElement('option');
    opt.textContent = textInput.value;
    opt.value = textValue.value;

    document.getElementById('menu').appendChild(opt);

    textInput.value = '';
    textValue.value = '';
}
