let displayElement = document.getElementById('display');

function clearDisplay() {
    displayElement.innerText = '0';
}

function deleteLast() {
    if (displayElement.innerText.length === 1) {
        displayElement.innerText = '0';
    } else {
        displayElement.innerText = displayElement.innerText.slice(0, -1);
    }
}

function appendValue(value) {
    if (displayElement.innerText === '0' && value !== '.') {
        displayElement.innerText = value;
    } else {
        displayElement.innerText += value;
    }
}

function calculate() {
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch {
        displayElement.innerText = 'Error';
    }
}