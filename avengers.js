document.getElementById('encabezado').style.display="block";
document.getElementById('vista1').style.display="block";
document.getElementById('vista2').style.display="none";
document.getElementById('vista3').style.display="none";
document.getElementById('vista4').style.display="none";

function funcionClick(){
const name= document.getElementById('nombre').value;
document.getElementById('usuario').innerHTML= name;
document.getElementById('encabezado').style.display="block";
document.getElementById('vista1').style.display="none";
document.getElementById('vista2').style.display="block";
document.getElementById('vista3').style.display="none";
document.getElementById('vista4').style.display="none";
}
function funcionIro(){
  document.getElementById('encabezado').style.display="block";
  document.getElementById('vista1').style.display="none";
  document.getElementById('vista2').style.display="none";
  document.getElementById('vista3').style.display="block";
  document.getElementById('vista4').style.display="none";
}
function funcionCapi(){
  document.getElementById('encabezado').style.display="block";
  document.getElementById('vista1').style.display="none";
  document.getElementById('vista2').style.display="none";
  document.getElementById('vista3').style.display="none";
  document.getElementById('vista4').style.display="block";
}
function funcionVolverJugar(){
  document.getElementById('encabezado').style.display="block";
  document.getElementById('vista1').style.display="none";
  document.getElementById('vista2').style.display="block";
  document.getElementById('vista3').style.display="none";
  document.getElementById('vista4').style.display="none";
}
function funcionResultadoIro(){
let resultado=0;
if(document.getElementById('r1i1').checked){resultado++};
if(document.getElementById('r2i2').checked){resultado++};
if(document.getElementById('r3i3').checked){resultado++};
document.getElementById('resultado1').innerHTML= "Respuestas correctas: "+resultado;

}
function funcionResultadoCapi(){
let resultado=0;
if(document.getElementById('r1c1').checked){resultado++};
if(document.getElementById('r2c2').checked){resultado++};
if(document.getElementById('r3c3').checked){resultado++};
document.getElementById('resultado2').innerHTML= "Respuestas correctas: "+resultado;
}
