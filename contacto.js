const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const comentario = document.getElementById("comentario")
const boton = document.getElementById("boton");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/;
const subjectRegex = /^[a-zA-Z]$/;
const numberRegex = /^[0-9]{9}$/;

boton.addEventListener('click', ()=>{
    // nombre

    if(subjectRegex.test(nombre.value)){
      Swal.fire({
        title: "Ingrese el formato correcto en nombre.",
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: '5000',
        timerProgressBar: true,
    });
        event.preventDefault();
    }
    if(nombre.value == ""){
      Swal.fire({
        title: "Debe ingresar su nombre",
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: '5000',
        timerProgressBar: true,
    });
        console.log("No hay registro.");
        event.preventDefault();
      }else{
        console.log("Campo nombre completo")
      }

    // email
    if(emailRegex.test(email.value)){
      Swal.fire({
        title: "Ingrese el formato correcto en email.",
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: '5000',
        timerProgressBar: true,
    });
        event.preventDefault();
    }

      if(email.value == ""){
        Swal.fire({
          title: "Debe ingresar su email.",
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: '5000',
          timerProgressBar: true,
      });
        console.log("No hay registro.");
        event.preventDefault();
      }else{
        console.log("Campo email completo")
      }

    // telefono
    if(numberRegex.test(telefono.value)){
      Swal.fire({
        title: "Ingrese el formato correcto en telefono.",
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: '5000',
        timerProgressBar: true,
    });
        event.preventDefault();
    }

      if(telefono.value == ""){
        Swal.fire({
          title: "Debe ingresar su numero celular.",
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: '5000',
          timerProgressBar: true,
      });
        console.log("No hay registro.");
        event.preventDefault();
      }else{
        console.log("Campo telefono completo")
      }
    

      // comentario
      if(subjectRegex.test(comentario.value)){
        Swal.fire({
          title: "Ingrese el formato correcto en comentario.",
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: '5000',
          timerProgressBar: true,
      });
        event.preventDefault();
    }

      if(comentario.value == ""){
        Swal.fire({
          title: "Debe ingresar un comentario.",
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: '5000',
          timerProgressBar: true,
      });
        console.log("No hay registro.");
        event.preventDefault();
      }else{
        console.log("Campo comentario completo")
      }

    })