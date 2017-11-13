
//Generar contador
     
//1- primera parte,debo generar un posteo en pantalla al comentario de mi text area.
//2-Debo permitir que el button al hacer click, logre el posteo.
     
function add(){  //creo una función que va a agregar el comentario y la mostrara una vez presionado el boton tweet

    var comments = document.getElementById('comment').value;  //Rescato el elemento ID con .value//
     document.getElementById('comment').value =""; //Cuando agarre el valor este sera limpiado del text área//
     var newComments= document.createElement('div'); //div con todo lo que vendrá
     
     var cont= document.getElementById('cont'); //agrega un id al contenedor div que se creo arriba//

     var check= document.createElement('input'); //Al momento de darle clik al boton, se genera un check que seria el tweet ya posteado
     check.type= 'checkbox';

     //ORDEN//

     var paragraph= document.createElement('p'); //Debe ponerse esta variable para que me permita incluir el texto (p)//
     paragraph.classList.add("color"); //es solo el elemento pe, pero no hay nada dentro del p hasta que se haga click//


     var nodoText= document.createTextNode(comments);  //se le llama sin comillas por ser una variable, y corresponde a la primera variable//
     paragraph.appendChild(nodoText); //nodotext hijo del padre paragraph//

    //Es englobado todo desde lo micro a lo macro, menos a mas//

    paragraph.textContent = comment; //hijo de la variable cont. realizada al inicio
    newComments.insertBefore()
   }    


     















 //Ingresar hora del posteo//
