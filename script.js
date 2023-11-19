
window.addEventListener('DOMContentLoaded', (event) => {

    // ATIVIDADE 1

    const e1 = document.getElementById('e1');
    const n1_e1 = e1.querySelector('#n1');
    const n2_e1 = e1.querySelector('#n2');
    var r1_e1 = e1.querySelector('#r1');
    
    n1_e1.addEventListener('input', maiorOuMenor);
    n2_e1.addEventListener('input', maiorOuMenor);
    
    
    function maiorOuMenor() {
        const num1 = parseFloat(n1_e1.value) || 0;
        const num2 = parseFloat(n2_e1.value) || 0;
        r1_e1.textContent = num1 > num2? "1º Maior" : "2º Maior";
    }

    // ATIVIDADE 3

    const e3 = document.getElementById('e3');
    const n1_e3 = e3.querySelector('#n1');
    var r1_e3 = e3.querySelector('#r1');
    
    n1_e3.addEventListener('input', descreveNota);    
    
    function descreveNota() {
        const nota = parseFloat(n1_e3.value) || 0;
        let r;
        if (nota >= 0) {
            if (nota < 6) {
                r = "Reprovado"
            } else if (nota >= 6 && nota < 8) {
                r = "Aprovado"
            } else if (nota >= 8){
                r = "Aprovado com louvor"
            }
            r1_e3.textContent = r;
        }
    }

    // ATIVIDADE 4

    const e4 = document.getElementById('e4');
    const n1_e4 = e4.querySelector('#n1');
    var r1_e4 = e4.querySelector('#r1');
    
    n1_e4.addEventListener('input', calculaMedia);    
    
    function calculaMedia() {        
        let vetor = [];
        var soma = 0;
        var count = 0;
        vetor = n1_e4.value.split(" "); 
        vetor.forEach(function(v){
            if (v === "" || v === " ") {
                vetor.pop(v);
            } else if (!isNaN(parseFloat(v))) {
                soma += parseFloat(v);
                count++;
            }
        });
        if (vetor.length > 0) {
            r1_e4.textContent = "A média dos valores é = " + (soma / count);
        } else {
            r1_e4.textContent = "Nenhum número inserido.";
        }
    }

    // ATIVIDADE 5

    const e5 = document.getElementById('e5');
    const n1_e5 = e5.querySelector('#n1');
    var r1_e5 = e5.querySelector('#r1');
    
    n1_e5.addEventListener('input', descreveLetra);    
    
    function descreveLetra() {
        let r;
        console.log(n1_e5)
        if (n1_e5.value === "a") {
            r = "A"
        } else if (n1_e5.value === "b") {
            r = "B"
        } else {
            r = "Outro"
        }
        r1_e5.textContent = r;
    }

    // ATIVIDADE 6

    const e6 = document.getElementById('e6');
    const m = e6.querySelector('#m');
    var r1_e6 = e6.querySelector('#r1');
    
    m.addEventListener('input', calculaSoma);    
    
    function calculaSoma() {    
        console.log(m.value);
        var linhas = m.value.split('\n');
        console.log(linhas);
        const matriz = linhas.map(linhas => linhas.split(' '));
        var soma = 0;
        console.log(matriz);

        matriz.forEach(linha => {
            linha.forEach(e => {
              if (!isNaN(parseFloat(e))) {
                soma += parseFloat(e);
              }
            });
          });

        r1_e6.textContent = "A soma é igual a" + soma;
    }

    //ATIVIDADE 7

    const e7 = document.getElementById('e7');
    const n1_e7 = e7.querySelector('#n1');
    var r1_e7 = e7.querySelector('#r1');
    
    n1_e7.addEventListener('input', calculaFatorial);    
    
    function calculaFatorial() {
        if (n1_e7.value === 0 || n1_e7.value === 1) {
            r1_e7.textContent = 1;
            return;
        }
        
        n = parseFloat(n1_e7.value);

        for (var i = n - 1; i >= 1; i--) {
          n = n * i;
        }
        r1_e7.textContent = n.toString();
    }

    //ATIVIDADE 8
    const e8 = document.getElementById('e8');
    const menu = e8.querySelector('#menu');
    var r1_e8 = e8.querySelector("#r1");

    
    menu.addEventListener('input', retornaValue);

    function retornaValue() {
        if (menu.value != null && menu.value != "") {
            r1_e8.textContent = menu.value;
        }
    }

    // ATIVIDADE 9

    const e9 = document.getElementById('e9');
    const v = e9.querySelector('#v');
    var r1_e9 = e9.querySelector('#r1');

    v.addEventListener('input', calculaMaior);

    function calculaMaior() {
        let vetor = v.value.split(" ").map(Number).filter(num => !isNaN(num));

        if (vetor.length > 0) {
            if (!isNaN(Math.max(...vetor))) {
                const maior = Math.max(...vetor);
                r1_e9.textContent = "O maior número é " + maior;
            } else {
                r1_e9.textContent = "Não é possível determinar o maior número.";
            }
        } else {
            r1_e9.textContent = "Nenhum número inserido.";
        }
    }

    // ATIVIDADE 10

    const e10 = document.getElementById('e10');
    const m2 = e10.querySelector('#m2');
    var r1_e10 = e10.querySelector('#r1');
    
    m2.addEventListener('input', calculaMediaMatriz);    
    
    function calculaMediaMatriz() {    
        console.log(m2.value);
        var linhas = m2.value.split('\n');
        console.log(linhas);
        const matriz = linhas.map(linhas => linhas.split(' '));
        var soma = 0;
        var count2 = 0;
        console.log(matriz);

        matriz.forEach(linha => {
            linha.forEach(e => {
              if (!isNaN(parseFloat(e))) {
                soma += parseFloat(e);
                count2 ++;
              }
            });
          });

        r1_e10.textContent = "A média é igual a " + (soma / count2);
    }

});
