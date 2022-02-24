'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let form, dni, password, confirm, size, i, division;
  

  form = document.getElementById('form');
    dni = document.getElementById('dni');
    password = document.getElementById('password');
    confirm = document.getElementById('confirm');

  let letters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
  ];

  dni.addEventListener('blur', function ()
    {
        size = dni.value + '';
        if (size.length <= 8)
        {
            division = 0;

            division = +size % 23;
            dni.value = dni.value + ' - ' + letters[division];

            console.log(division);
        }
    })

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    

    

    
  });
});
