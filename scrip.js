// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Función que copia el número al portapapeles
    function copyNumberToClipboard() {
        const number = BigInt('2850600140095354249768'); // El número a copiar

        // Usa la API del portapapeles para copiar el número
        navigator.clipboard.writeText(number.toString()).then(function() {
            // Muestra el mensaje de confirmación
            const status = document.getElementById('status');
            status.style.display = 'block';

            // Oculta el mensaje después de 2 segundos
            setTimeout(function() {
                status.style.display = 'none';
            }, 3000);
        }).catch(function(error) {
            console.error('Error al copiar el número: ', error);
        });
    }

    // Asigna la función al botón de copiar
    document.getElementById('copyBtn').addEventListener('click', copyNumberToClipboard);        });

    // Fecha objetivo para la cuenta regresiva (por ejemplo, el 31 de diciembre de 2024)
const targetDate = new Date('Novembre 30, 2024 12:30:00').getTime();

const countdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculando días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizando el HTML con los valores calculados
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Si la cuenta regresiva ha terminado, mostrar un mensaje
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = '¡El evento ha comenzado!';
    }
};
// Actualizando la cuenta regresiva cada segundo
const interval = setInterval(countdown, 1000);



//ACTIVA AUDIO

document.getElementById('sonido-imagen').addEventListener('click', function() {
      const audioElement = document.getElementById('audio');
     const isPlaying = !audioElement.paused;

    if (isPlaying) {
        audioElement.pause();
         this.src = './img/mdi--music.svg'; // Cambia la imagen a "play"
      } else {
         audioElement.play();
         this.src = './img/material-symbols--pause.svg'; // Cambia la imagen a "pause"
      }
  });
