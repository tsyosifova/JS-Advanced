function editElement(ref, match, replacer) {
    const text = ref.textContent;
    const matcher = new RegExp (match, `g`);
    const newText = text.replace(matcher, replacer);
    ref.textContent = newText;     
}