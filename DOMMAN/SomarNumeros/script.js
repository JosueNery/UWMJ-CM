function somar() {
    var stringN1 = document.getElementById('txtn1');
    var stringN2 = document.querySelector('input#txtn2');
    var result = document.getElementById('result');

    var n1 = Number(stringN1.value);
    var n2 = Number(stringN2.value);

    var soma = n1 + n2;
    result.innerHTML = `${n1} + ${n2} = ${soma}`;
}