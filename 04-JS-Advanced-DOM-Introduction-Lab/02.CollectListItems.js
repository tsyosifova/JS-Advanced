function extractText() {
    const items = Array.from(document.getElementsByTagName('li')).map(el => el.textContent).join('\n');
    const result = document.getElementById('result');
    result.value = items;
}