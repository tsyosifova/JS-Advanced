function extract(content) {
    const text = document.getElementById(content).textContent;
    const regexp = /\(([^)]+)\)/g;
    const result = text.match(regexp).map(el => el.slice(1, -1)).join('; ');

    return result;
}