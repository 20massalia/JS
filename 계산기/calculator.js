var isCalculatedFormula = false;

function show(char) {
    if (!isCalculatedFormula) {
        var formula = document.getElementById('result');
        formula.value += char;
    }

    else {
        document.getElementById('result').value = "";
        var formula = document.getElementById('result');
        formula.value += char;
        isCalculatedFormula = false;
    }
}

function calculate() {
    var formula = document.getElementById('result');
    var result = eval(formula.value);
    document.getElementById('result').value = result;
    isCalculatedFormula = true;
    //alert("isCalculatedFormula is " + isCalculatedFormula);
}

function ac() {
    document.getElementById('result').value = "";
    isCalculatedFormula = false;
    //alert("isCalculatedFormula is " + isCalculatedFormula);
}