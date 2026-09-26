function lockedProfile() {
    const profiles = Array.from(document.getElementsByClassName('profile'));

    profiles.forEach(profile => {
        const button = profile.querySelector('button');
        const hiddenFields = profile.querySelector('div[id$="HiddenFields"]');
        const radioLock = profile.querySelector('input[value="lock"]');

        button.addEventListener('click', () => {

            if (radioLock.checked) return;

            const isHidden = hiddenFields.style.display === 'none' || hiddenFields.style.display === '';

            hiddenFields.style.display = isHidden ? 'block' : 'none';
            button.textContent = isHidden ? 'Hide it' : 'Show more';

        })

    })
}