const door = document.querySelector('.door');
const opena = document.querySelector('.open');
const clos = document.querySelector('.close');
const signal = document.querySelector('.signal');
const on = document.querySelector('.on');
const off = document.querySelector('.off');
const alerts = document.querySelector('.alert');
  
  let visible = false;

signal.addEventListener('click', function() {
    visible = !visible
    on.style.display = visible ? 'block' : 'none';
    if (on.style.display == 'block') {
        off.style.display = 'none';
    } else {
        off.style.display = 'block';
    }
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

let avisible = false;
door.addEventListener('click', function() {
    avisible = !avisible
    clos.style.display = avisible ? 'none' : 'block';
    if (clos.style.display == 'none') {
        opena.style.display = 'block';
    } else {
        opena.style.display = 'none';
    }
    if(opena.style.display == 'block' && on.style.display == 'block'){
        alerts.style.display = 'block';
        on.style.display = 'none';
        off.style.display = 'none';
    } else if (off.style.display == 'block' && opena.style.display == 'none') {
        off.style.display == 'block';
    }else if(opena.style.display == 'none' && on.style.display == 'none'){
        on.style.display = 'block';
        alerts.style.display = 'none';
        off.style.display = 'none';
    } 
})

// let visOne = false;
// let vısTwo = false;

// signal.addEventListener('click', function num() {
//     vısTwo = !vısTwo
//     on.style.display = vısTwo ? 'block' : 'none';
//     off.style.display = vısTwo ? 'none' : 'block';
//     if(opena.style.display == 'block' && alerts.style.display == 'block'){
//       on.style.display = 'none';
//       alerts.style.display = 'none'
//       off.style.display = 'block';
//     }else if(opena.style.display == 'block' && on.style.display == 'block'){
//       alerts.style.display = 'block';
//       on.style.display = 'none';
//       off.style.display = 'none';
//     }

    

    
// })
// door.addEventListener('click', function() {
//     visOne = !visOne
//     clos.style.display = visOne ? 'none' : 'block';
//     opena.style.display = visOne ? 'block' : 'none';
//     if(opena.style.display == 'block' && on.style.display == 'block'){
//       alerts.style.display = 'block';
//       on.style.display = 'none';
//       off.style.display = 'none';
//     } else if (off.style.display == 'block' && opena.style.display == 'none') {
//         off.style.display == 'block';
//     }else if(opena.style.display == 'none' && on.style.display == 'none'){
//       on.style.display = 'block';
//       alerts.style.display = 'none';
//       off.style.display = 'none';
//     } 
    
// })