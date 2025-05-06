const tarjeta = document.querySelector('#tarjeta'),
    btnFormulario = document.querySelector('#btn-formulario'),
    formulario = document.querySelector('#tarjeta-formulario'),
    numeroTarjeta = document.querySelector('#tarjeta .Numero'),
    nombreTarjeta = document.querySelector('#tarjeta .Nombre'),
    firma = document.querySelector('#tarjeta .firma p'),
    mesExpiracion = document.querySelector('#tarjeta .mes'),
    añoExpiracion = document.querySelector('#tarjeta .año'),
    ccv = document.querySelector('#tarjeta .CCV');

    //VOLTEAMOS LA TARJETA PARA MOSTRAR EL FRENTE
    const mostrarFrente = () => {
        if (tarjeta.classList.contains('active')){
            tarjeta.classList.remove('active');
        }
    }


//* ROTACION DE LA TARJETA
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

//* DESPLIEGUE DE FORMULARIO
btnFormulario.addEventListener('click', () => {
    btnFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});


//* SELECT DEL MES 
for(let i = 1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

//* SELECT DEL AÑO

const yaerActual = new Date().getFullYear();
for(let i = yaerActual; i <= yaerActual + 10; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectAño.appendChild(opcion);
}


// NUMERO DE TARJETA EN LA TARJETA


formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    //ELIMINAMOS ESPACOP EN BLANCO
    .replace(/\s/g, '')
    //ELIMINA LETRAS
    .replace(/\D/g, '')
    //PONEMOS ESPACIO CADA 4 NUMEROS
    .replace(/([0-9]{4})/g, '$1 ')
    //ELIMINA DEL ESPACIO FINAL
    .trim();

//Si no se marca nada o se borra que vuelva a su estado normal 
    numeroTarjeta.textContent = valorInput;

    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####'
    }

//SE VOLTEA TARJETA PARA QUE EL USUARIO LO VEA
    mostrarFrente();
});


//input NOMBRE DE TARJETA
formulario,inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = '---------'
    }

});


//SELECT DEL MES
formulario.selectMes.addEventListener('change', (e) =>{
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
})

//SELECT DEL AÑO
formulario.selectAño.addEventListener('change', (e) =>{
    añoExpiracion.textContent = e.target.value;
    mostrarFrente();
});

//SELECT CCV
formulario.inputCCV.addEventListener('keyup', () =>{
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.valuer = formulario.inputCCV.value
    //eliminar letras
    .replace(/\s/g, '')
    //ELIMINA LETRAS
    .replace(/\D/g, '');


    ccv.textContent = formulario.inputCCV.value;
});