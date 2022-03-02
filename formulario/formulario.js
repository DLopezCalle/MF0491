'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let form, dni, password, confirm, size, i, division, dniHelp, passwordHelp, confirmHelp, enviar;

  form = document.getElementById('form');
  dniHelp = document.getElementById('dniHelp');
  dni = document.getElementById('dni');  
  password = document.getElementById('password');
  confirm = document.getElementById('confirm');  
  passwordHelp = document.getElementById('passwordHelp');
  confirmHelp = document.getElementById('confirmHelp');
  enviar = document.getElementById('enviar');

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

  // Comprobar y rellenar DNI
  dni.addEventListener('blur', function () 
  {
    size = dni.value + '';
    if (size.length == 8/* || size.length == 7*/ && size.length != 0 && +size != undefined) 
    {
      division = 0;

      division = +size % 23;
      dni.value = dni.value + letters[division];

      dniHelp.innerHTML = 'Formato correcto!';
      dniHelp.className = 'text-success';

      enviar = enviar + 1;
    } else if (size.length != 0 && size.length != 9)
    {
      dniHelp.innerHTML = 'No es un DNI válido';
      dniHelp.className = 'text-danger';
    }
    else if (+size == undefined)
    {
      console.log("entra")
    }
    else
    {
      dniHelp.innerHTML = 'Sólo en necesario que ingrese su número (Sin letra).';
      dniHelp.className = 'text-muted';
    }
  });

  // Comprobar contraseña
  password.oninvalid =  function(event) 
  { 
    event.target.setCustomValidity('Ejemplo: "Hola-123"');
    passwordHelp.innerHTML = 'La contraseña no cumple con los requisitos mínimos';
    passwordHelp.className = 'text-danger';
  }

  // Comprobar confirmación de contraseña
  confirm.addEventListener('blur', function () 
  {
    if (password.value === confirm.value && confirm.value != '')
    {
      confirmHelp.innerHTML = 'Las contraseñas coinciden!';
      confirmHelp.className = 'text-success';

      enviar.className = "btn btn-primary";
    }
    else if (confirm.value != '')
    {
      confirmHelp.innerHTML = 'Las contraseñas NO coinciden';
      confirmHelp.className = 'text-danger';
    }
    else
    {
      confirmHelp.innerHTML = 'Las contraseñas deben coincidir';
      confirmHelp.className = 'text-muted';
      enviar.className = "btn btn-secondary";
    }
  });
  

  form.addEventListener('blur', function (e) {
    e.preventDefault();


  });
});
