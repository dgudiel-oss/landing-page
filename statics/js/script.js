//mostar el select cuando se presione estudiante
document.addEventListener('DOMContentLoaded', function () {
    function mostrarSelect() {
      var estudianteRadio = document.getElementById('estudiante');
      var selectElement = document.getElementById('opciones');
  
      if (estudianteRadio.checked) {
        selectElement.style.display = 'block';
      } else {
        selectElement.style.display = 'none'; 
      }
    }
  
   
    document.getElementById('Personageneral').addEventListener('change', mostrarSelect);
    document.getElementById('estudiante').addEventListener('change', mostrarSelect);
  
    
    mostrarSelect();
  });
  
  //Capturar y guardar datos
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('MyForm');
    form.addEventListener('submit', function(event){
    
        event.preventDefault();
    
   
    const formData = new FormData(form)
    const nombre = formData.get('Nombre');
    const apellido = formData.get('Apellido');
    const telefono = formData.get('Telefono');
    const tipo_participante = formData.get('Tipo_participante');
    const nivel = formData.get('Nivel');

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const urlencoded = new URLSearchParams();
urlencoded.append("Nombre", nombre);
urlencoded.append("Apellido", apellido);
urlencoded.append("Telefono", telefono);
urlencoded.append("Tipo_participante", tipo_participante);
urlencoded.append("Nivel", nivel);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow"
};

fetch("http://localhost:4200/adduser", requestOptions)
  .then((response) => response.text())
  .then((result) => alert(result))
  .catch((error) => console.error(error));

  });
});

//borra los datos que se ingresaron en los text
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('MyForm').addEventListener('submit', function (event) {
        // Borrar el contenido de los inputs y textarea
        document.getElementById('nombre').value = '';
        document.getElementById('aapellido').value = '';
        document.getElementById('ttelefono').value = '';

        // Deseleccionar los radio buttons
        document.getElementById('Personageneral').checked = false;
        document.getElementById('estudiante').checked = false;

        // Restablecer el select a la opción predeterminada
        document.getElementById('opciones').selectedIndex = 0;

        
        event.preventDefault();
    });
});

//muestra el login 
document.getElementById('mostrarLogin').addEventListener('click', function() {
  var loginForm = document.getElementById('loginForm');
  loginForm.classList.toggle('show');
});

