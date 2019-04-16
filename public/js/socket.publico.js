var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');


socket.on('estadoActual', function(data) {

    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {

    var audio = new Audio('audio/new-ticket.mp3');

    audio.play();

    actualizaHTML(data);
});

function actualizaHTML(ultimos4) {

    if (ultimos4[0] != null) {
        lblTicket1.text('Ticket ' + ultimos4[0].numero);
        lblEscritorio1.text('Escritorio ' + ultimos4[0].escritorio);
    }

    if (ultimos4[1] != null) {
        lblTicket2.text('Ticket ' + ultimos4[1].numero);
        lblEscritorio2.text('Escritorio ' + ultimos4[1].escritorio);
    }

    if (ultimos4[2] != null) {
        lblTicket3.text('Ticket ' + ultimos4[2].numero);
        lblEscritorio3.text('Escritorio ' + ultimos4[2].escritorio);
    }

    if (ultimos4[3] != null) {
        lblTicket4.text('Ticket ' + ultimos4[3].numero);
        lblEscritorio4.text('Escritorio ' + ultimos4[3].escritorio);
    }
}