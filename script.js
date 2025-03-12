document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const textOutput = document.getElementById('text-output');
    const myButton = document.getElementById('my-button');

    myButton.addEventListener('click', function() {
        const text = textInput.value;
        textOutput.textContent = text;
    });
});
