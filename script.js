const inputs = document.querySelectorAll('input[name="theme"]');
inputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});