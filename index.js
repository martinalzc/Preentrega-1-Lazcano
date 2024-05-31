// JUEGO PIEDRA, PAPEL, TIJERAS CONTRA EL ORDENADOR


// Variables
let terminarPartida;
let partidaUser;
let puntosOrdenador = 0;
let puntosUsuario = 0;
let punto;
let i = 0


// FUNCIONES

// FUNCION para que el ordenador elija su jugada aletoriamente
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// FUNCION para guardar el puntaje
function puntaje(usuario,ordenador){
    alert(`*Puntaje del oponente: ${ordenador} \n*Tu puntaje: ${usuario}`)
}


// Inicio del juego
prompt('Juego "piedra, papel, tijeras"  \n Reglas: \n 1. El papel envuelve a la piedra \n 2. La piedra rompe las tijeras \n 3. Las tijeras cortan el papel \n ¿Listo para jugar?')


// Estructura while, que mientras el jugador quiera continuar jugando se seguira repitiendo
do{
        partidaUser = prompt("Elije tu jugada: \n Piedra \n Papel \n Tijera")


    //Llamado a la funcion para que el ordenador elija su jugada de forma aleatoria
    partidaOrdenador = aleatorio(0,2);
    

    //Sentencia switch para que el juego reaccione dependiendo de la jugada del usuario
    switch (partidaUser.toLowerCase){
        case "piedra":
            if (partidaOrdenador === 0){
                alert("Yo elegi piedra tambien!. Empate :)");
            } else if (partidaOrdenador === 1){
                puntosUsuario++;
                alert("Yo elegi tijeras. Me ganaste! :(");
            } else{
                puntosOrdenador++;
                alert("Yo elegi papel. Te gane! :)");
            } 
            break;
        case "tijera":
            if (partidaOrdenador === 0){
                puntosOrdenador++;
                alert("Yo piedra. Te gane! :)");
            } else if (partidaOrdenador === 1){
                alert("Yo tijeras tambien!. Empate :)");
            } else{
                puntosUsuario++;
                alert("Yo papel. Me ganaste! :(");
            }
            break;
        case "papel":
            if (partidaOrdenador === 0){
                puntosUsuario++;
                alert("Yo piedra. Me ganaste! :(");
            } else if (partidaOrdenador === 1){
                puntosOrdenador++;
                alert("Yo tijeras. Te gane! :)");
            } else{
                alert("Yo papel tambien!. Empate :)");
            }
            break;
        default:
            alert("Introduzca una jugada valida");
            continue;
    }
    

    //Llamado a la funcion que almacena los puntajes
    puntaje(puntosUsuario, puntosOrdenador);


    //Pregunta que determina si el ciclo se sigue repitiendo o si el juego finaliza
    terminarPartida = prompt("Quieres jugar otra ronda? \n- Si \n- No");


    //Pregunta que determina si el ciclo se sigue repitiendo o si el juego finaliza
} while (terminarPartida !== "no")



//Mostrar quien gano
if (puntosUsuario > puntosOrdenador){
    alert("GANASTE :D \nGracais por jugar!!")
} else if (puntosUsuario < puntosOrdenador){
    alert("Mejor suerte la proxima :/ \nGracias por jugar!!")
} else if (puntosUsuario === puntosOrdenador){
    alert("Empate :| \nGracias por jugar!!")
}

