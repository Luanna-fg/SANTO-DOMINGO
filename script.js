const textoElemento = document.getElementById('texto');
let estilos = [
    { color: '#EF5A6F', fontSize: '24px', fontFamily: 'Arial, sans-serif' },
    { color: '#17153B', fontSize: '25px', fontFamily: 'Verdana, sans-serif' },
    { color: '#536493', fontSize: '26px', fontFamily: 'Georgia, serif' }
];
let indiceEstilo = 0;

function cambiarEstiloTexto() {
    textoElemento.style.transition = 'all 0.3s ease'; // Reducir la duración de la transición
    textoElemento.style.color = estilos[indiceEstilo].color;
    textoElemento.style.fontSize = estilos[indiceEstilo].fontSize;
    textoElemento.style.fontFamily = estilos[indiceEstilo].fontFamily;

    indiceEstilo = (indiceEstilo + 1) % estilos.length; // Avanzar al siguiente estilo circularmente
}

setInterval(cambiarEstiloTexto, 3000);