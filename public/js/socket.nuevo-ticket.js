// Comando para establecer la conexión
var socket = io();

//Variables para JQUERY
var label = $('#lblNuevoTicket');

//Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Escuchar
socket.on('estadoActual', function(data) {
    label.text(data.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);
    });
})