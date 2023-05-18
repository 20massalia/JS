function show(char) {
    var formula = document.getElementById('result');
    formula.value += char;
}

function calculate() {
    var formula = document.getElementById('result');
    var result = eval(formula.value);
    document.getElementById('result').value = result;
}

function ac() {
    document.getElementById('result').value = "";
}