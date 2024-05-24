// FUNCION para que el ordenador elija su jugada aletoriamente
function aleatorio(min, max){
    return Math.round(Math.random() * (max-min));
}

// FUNCION para guardar el puntaje

// FUNCION de el juego completo


// Variables
let terminarPartida
let partidaUser;


// Inicio del juego
prompt('Juego "piedra, papel, tijeras"  \n Reglas: \n 1. El papel envuelve a la piedra \n 2. La piedra rompe las tijeras \n 3. Las tijeras cortan el papel \n ¿Listo para jugar?')


// Estructura while, que mientras el jugador quiera continuar jugando se seguira repitiendo
while (terminarPartida = "si"){
    partidaUser = prompt("Elije tu jugada: \n Piredra \n Papel \n Tijera")

    //Llamado a la funcion para que el ordenador elija su jugada de forma aleatoria
    aleatorio(1,3);
    

    //Sentencia switch para que el juego reaccione dependiendo de la jugada del usuario
    switch (partidaUser){
        case partidaUser = "piedra":
            if (partidaOrdenador = 0){
                result = alert("Yo piedra tambien!");
                punto = alert("Empate :)")
            } else if (partidaOrdenador = 1){
                result = alert("Yo tijeras.");
                punto = alert("Me ganaste! :(");
            } else if (partidaOrdenador = 2) {
                result = alert("Yo papel.");
                punto = alert("Te gane! :)")
            } 
            break
        case partidaUser = "tijera":
            if (partidaOrdenador = 0){
                result = alert("Yo piedra, te gane! :)");
            } else if (partidaOrdenador = 1){
                result = alert("Yo tijeras tambien!. Empate :)");
            } else if (partidaOrdenador = 2) {
                result = alert("Yo papel, me ganaste! :(");
            }
            break
        case partidaUser = "papel":
            if (partidaOrdenador = 0){
                result = alert("Yo piedra, me ganaste! :(");
            } else if (partidaOrdenador = 1){
                result = alert("Yo tijeras, te gane! :)");
            } else if (partidaOrdenador = 2) {
                result = alert("Yo papel tambien!. Empate :)");
            }
            break
    }


    //Pregunta que determina si el ciclo se sigue repitiendo o si el juego finaliza
    prompt(terminarPartida = "Quieres jugar otra ronda? \n -Si \n -No")
}

// Despedida del juego
alert("Gracias por jugar!")


