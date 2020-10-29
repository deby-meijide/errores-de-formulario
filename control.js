var form = document.querySelector('form');
var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');

form.onsubmit = function(e) {
if (usuario.value === '' || clave.value === '') {
e.preventDefault();
alert('Completá ambos datos!') ;
} 
    else if(!usuario.value.includes("@")){
    e.preventDefault();
    console.log(usuario.value.includes("@"))
    alert('El usuario debe contener un @') ;
}
    else{
    alert('Los datos son correctos!🎉')
  }

}