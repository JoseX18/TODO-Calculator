//Botones
const result = document.getElementById("resultadoOperacion");
const btnSuma = document.getElementById("suma");
const btnResta = document.getElementById("resta");
const btnMulti = document.getElementById("multi");
const btnDivision = document.getElementById("division");
const btnClear = document.getElementById("clear");

//Datos
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultadoOperacion");

//Accion borrar numeros
function clearData() {
    btnClear.addEventListener("click", () => {
        num1.value = '';
        num2.value = '';
        resultado.innerHTML = '';
    })
}

//Sumar
function sumarData() {
    btnSuma.addEventListener("click", () => {
        if (num1.value != null && num2.value != null) {
            resultado.innerHTML = `${parseFloat(num1.value) + parseFloat(num2.value)}`
        }
    })
}

//Restar
function restarData() {
    btnResta.addEventListener("click", () => {
        if (num1.value != null && num2.value != null) {
            resultado.innerHTML = `${parseFloat(num1.value) - parseFloat(num2.value)}`
        }
    })
}

//Multiplicacion
function multiData() {
    btnMulti.addEventListener("click", () => {
        if (num1.value != null && num2.value != null) {
            resultado.innerHTML = `${parseFloat(num1.value) * parseFloat(num2.value)}`
        }
    })
}

//Division
function divisinData() {
    btnDivision.addEventListener("click", () => {
        if (num1.value != null && num2.value != null) {
            resultado.innerHTML = `${parseFloat(num1.value) / parseFloat(num2.value)}`
        }
    })
}

clearData();
sumarData();
restarData();
multiData();
divisinData();