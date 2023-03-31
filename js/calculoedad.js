setTimeout (window.onload = function() {
    
    //Utilicé la función "setTimeout (window.onload = function() {});" porque sino no me recalculaba la edad. 
    //Entiendo que los otros scripts no terminaban de ejecutarse a tiempo y eso hacia que no encuentre el dato
    // fechanacimiento para poder calcular la Edad.
  
    // Código a ejecutar una vez que se hayan cargado la página, el html, las librerías etc..
    
    // Obtener la fecha actual
    var fechaActual = new Date();

    // Obtener la fecha de nacimiento del elemento HTML
    var fechaNacimiento = new Date(document.getElementById("fechanacimiento").textContent);

    // Calcular la diferencia entre las fechas
    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    // Ajustar la edad si aún no se ha cumplido el año
    var mesActual = fechaActual.getMonth() + 1;
    var mesNacimiento = fechaNacimiento.getMonth() + 1;
    if (mesNacimiento > mesActual || (mesNacimiento === mesActual && fechaNacimiento.getDate() > fechaActual.getDate())) {
        edad--;
    }

    // Mostrar la edad en el elemento HTML correspondiente
    document.getElementById("edad").textContent = edad;


  },400);
  
  

   

