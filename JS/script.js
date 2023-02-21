const door = document.querySelector('.door');
const opena = document.querySelector('.open');
const clos = document.querySelector('.close');
const signal = document.querySelector('.signal');
const on = document.querySelector('.on');
const off = document.querySelector('.off');
const alerts = document.querySelector('.alert');
  
let visOne = false;
let vısTwo = false;

signal.addEventListener('click', function num() {
    vısTwo = !vısTwo
    on.style.display = vısTwo ? 'none' : 'block';
    off.style.display = vısTwo ? 'block' : 'none';
    if(opena.style.display == 'block' && alerts.style.display == 'block'){
         on.style.display = 'none';
         alerts.style.display = 'none'
         off.style.display = 'block';
    }else if(opena.style.display == 'block' && on.style.display == 'block'){
        alerts.style.display = 'block';
        on.style.display = 'none';
        off.style.display = 'none';
    }

    

    
})
door.addEventListener('click', function() {
    visOne = !visOne
    clos.style.display = visOne ? 'none' : 'block';
    opena.style.display = visOne ? 'block' : 'none';
    if(opena.style.display == 'block' && on.style.display == 'block'){
      alerts.style.display = 'block';
      on.style.display = 'none';
      off.style.display = 'none';
    }else if(opena.style.display == 'none' && alerts.style.display == 'block'){
      alerts.style.display = 'none'
      off.style.display = 'none';
      on.style.display = 'block';
    }
})