document.addEventListener('DOMContentLoaded', function () {
  
  // Definimos las variables  
  let calculadora,
    resultado,
    limpiar,
    borrar,
    potencia,
    division,
    num7,
    num8,
    num9,
    multiplicacion,
    num4,
    num5,
    num6,
    resta,
    num1,
    num2,
    num3,
    suma,
    num00,
    num0,
    punto,
    igual,
    mostrar,

    boton;

    // Hacemos referencia al elemento que corresponde cada variable
  calculadora = document.getElementById('calculadora');
  resultado = document.getElementById('resultado');
  limpiar = document.getElementById('limpiar');
  borrar = document.getElementById('borrar');
  potencia = document.getElementById('potencia');
  division = document.getElementById('division');
  num7 = document.getElementById('7');
  num8 = document.getElementById('8');
  num9 = document.getElementById('9');
  x = document.getElementById('x');
  multiplicacion = document.getElementById('multiplicacion');
  num4 = document.getElementById('4');
  num5 = document.getElementById('5');
  num6 = document.getElementById('6');
  resta = document.getElementById('resta');
  num1 = document.getElementById('1');
  num2 = document.getElementById('2');
  num3 = document.getElementById('3');
  suma = document.getElementById('suma');
  num00 = document.getElementById('00');
  num0 = document.getElementById('0');
  punto = document.getElementById('punto');
  igual = document.getElementById('igual');
  numero = document.getElementsByClassName('numero');

  boton = document.getElementsByTagName('button');
  mostrar = '';

  calculadora.addEventListener('submit', function (e) {
    e.preventDefault();    

    resta.addEventListener('click', function (e){
        e.preventDefault();
        mostrar = mostrar + '-';
        resultado.innerText = mostrar;
    })

    num7.addEventListener('click', function (e){
        e.preventDefault();
        mostrar = mostrar + '7';
        resultado.innerText = mostrar;
    })

    num7.addEventListener('click', function (e){
        e.preventDefault();
        mostrar = mostrar + '7';
        resultado.innerText = mostrar;
    })

    multiplicacion.addEventListener('click', function (e){
        e.preventDefault();
        mostrar = mostrar + 'x';
        resultado.innerText = mostrar;
    })
    // switch(boton) {
    //     case suma:
    //         resultado.innerText = '+';
    //         break;
    //     default:
    //         resultado.innerText = 'HOLA';
    //         break;
    // }
  });
});
