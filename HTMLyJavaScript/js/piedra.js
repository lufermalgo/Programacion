$(function () {
    $('button, input[type="button"]').click(
      function (){

        // var opcionUsuario = document.getElementById("opciones").value;
        var opcionUsuario = $('input:button[name="opcionUsuario"]').val();

        function aleatorio(minimo, maximo) {
        var numero = Math.floor( Math.random() * (maximo - minimo + 1 ) + minimo )
        return numero;
        }

        var opcines = ["piedra", "papel", "tijera"];

        var opcionUsuario;
        var evaluar;
        var opcionMaquina = opcines[aleatorio(0,2)];

        if (opcionUsuario == opcionMaquina) {
          evaluar = "Empate";
        } else if ((opcionUsuario == "piedra" && opcionMaquina == "tijera") || (opcionUsuario == "papel" && opcionMaquina == "piedra") || (opcionUsuario == "tijera" && opcionMaquina == "papel")) {
            evaluar = "Ganaste";
            var actual = parseInt($('.usuario').html());
            actual += parseInt(1);
            $('.usuario').html(actual);
        } else {
          evaluar = "Perdiste";
          var actual = parseInt($('.ordenador').html());
          actual += parseInt(1);
          $('.ordenador').html(actual);
        }
        $('#resultado').html("Usuario juega " + opcionUsuario + " - Ordenador juega " + opcionMaquina + "<br> El resultado es " + evaluar);
    });
});
