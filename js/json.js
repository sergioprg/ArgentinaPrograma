
const url = 'https://sergioprg.github.io/ArgentinaPrograma/json/registros.json';
//const tituloheaderSpan = document.getElementById('tituloheader');
const nombreSpan = document.getElementById('nombre');
const apellidoSpan = document.getElementById('apellido');
const tituloSpan = document.getElementById('titulo');
const dniSpan = document.getElementById('dni');
const generoSpan = document.getElementById('genero');
const fechanacimientoSpan = document.getElementById('fechanacimiento');
const nacionalidadSpan = document.getElementById('nacionalidad');
//const perfilcortoSpan = document.getElementById('perfilcorto');
//const perfillargoSpan = document.getElementById('perfillargo');
const emailSpan = document.getElementById('email');
const telefonoSpan = document.getElementById('telefono');
const direccionSpan = document.getElementById('direccion');
const codigopostalSpan = document.getElementById('codigopostal');
const localidadSpan = document.getElementById('localidad')


fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    //tituloheaderSpan.textContent = data.datospersonales.titulo;
    nombreSpan.textContent = data.datospersonales.nombre;
    apellidoSpan.textContent = data.datospersonales.apellido;
    tituloSpan.textContent = data.datospersonales.titulo;
    dniSpan.textContent = data.datospersonales.dni;
    generoSpan.textContent = data.datospersonales.genero;
    fechanacimientoSpan.textContent = data.datospersonales.fechanacimiento;
    nacionalidadSpan.textContent = data.datospersonales.nacionalidad;
    //perfilcortoSpan.textContent = data.datospersonales.perfilcorto;
    //perfillargoSpan.textContent = data.datospersonales.perfillargo;
    emailSpan.textContent = data.datospersonales.email;
    telefonoSpan.textContent = data.datospersonales.telefono;
    direccionSpan.textContent = data.datospersonales.direccion;
    codigopostalSpan.textContent = data.datospersonales.codigopostal;
    localidadSpan.textContent = data.datospersonales.localidad

  })
  .catch(error => console.error(error));
