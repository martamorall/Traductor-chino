//Cojo el objeto del input con el id letra
var letra=document.getElementById("letra");

letra.addEventListener("keyup", traducir, false); 

//Funcion que traduce letras a caracteres chinos
function traducir (){
    var cadena = document.getElementById("letra").value;              
    var posicion = cadena.length - 1;
    var codigoUnicode = cadena.charCodeAt(posicion);

    //Formula para convertir caracteres unicode a caracteres chinos
    /*Si introduces caracteres en mayusculas saldrán los caracteres chinos; en cambio, algunas letras 
    minusculas no las traduce como caracteres chinos
    */
    var chino = unescape("%u" + codigoUnicode + "e8");

    cadena = cadena.substring(0, cadena.length - 1);
    cadena = cadena + chino;
    document.getElementById("letra").value = cadena;

}

//Funciones para que aparezcan el tipo de evento, propiedad y caracter pulsado

//Evento type: tipo de evento
var eventoActual;
function tipoEvento(evt) {
    eventoActual = evt.type;
    document.getElementById("tipoEvento").innerHTML = eventoActual;
}
    document.addEventListener("keyup", tipoEvento, false);


//Evento keyCode: propiedad
function tipoPropiedad(evt){
    var num=evt.keyCode;
    document.getElementById("propiedad").innerHTML=num;
}
    document.addEventListener("keydown", tipoPropiedad, false);

//Evento which o keyCode: caracter pulsado
function caracterPulsado(evt){
    var charNum=evt.which || evt.keyCode;
    var charLetra=String.fromCharCode(charNum);
    document.getElementById("caracter").innerHTML=charLetra;
}
    document.addEventListener("keypress", caracterPulsado, false);

    

