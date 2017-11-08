
//Twitter primera parte,debo generar un posteo en pantalla al comentario de mi text area.
//Debo permitir que el button al hacer click, logre el posteo.


function add(){  //Se almacena el valor//
    var comments = document.getElementById('comment').value;  //Rescato el elemento ID con .value//
     document.getElementById('comment').value =""; //Cuando agarre el valor este sera limpiado del text área//

     var newComments= document.createElement('div'); //div con todo lo que vendrá
     var cont= document.getElementById('cont'); //agrega un id al contenedor div que se creo arriba//

     var check= document.createElement('input');
     check.type= 'checkbox';

     //ORDEN//

     var paragraph= document.createElement('p'); //Debe ponerse esta variable para que me permita incluir el texto (p)//
     paragraph.classList.add("color"); //es solo el elemento pe, pero no hay nada dentro del p//


     var nodoText= document.createTextNode(comments);  //se le llama sin comillas por ser una variable, y corresponde a la primera variable//
     paragraph.appendChild(nodoText); //nodotext hijo del padre//

    //Es englobado todo desde lo micro a lo macro, menos a mas//
     newComments.appendChild(check); 
     newComments.appendChild(paragraph);
     cont.appendChild(newComments); //hijo del cont//


   }    

// Debo impedir que el button funcione si hay texto vacio//
     
function desactiva(){
	if ('comment' == ""){ //si el comentario es = vacio, el boton se desactiva
	    button= disabled;
	}else('comment > 0'){ // si el comentario es  mayor a 0 el boton funciona
		button =enabled;
	}
}

// Conteo regresivo tweeter//

 //Ingresar hora del posteo//
