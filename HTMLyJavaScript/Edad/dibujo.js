var texto = document.getElementById("txtLineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dubujoPorClick );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;


var l = 0;
var yi,xf;
var colorcito = "#FAA";

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokerStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dubujoPorClick()
{
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;

  for(l=0;l<lineas;l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLineas(colorcito,0,yi,xf,300);
  }
  dibujarLineas(colorcito,1,1,1,229);
  dibujarLineas(colorcito,1,299,299,299);
}
