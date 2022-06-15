const formulario = document.getElementById("form");
const boton = document.getElementById("boton");
const seleccionar = document.querySelector('select');
const radio = document.querySelector('zonaRadio');
let cantEntradas = document.getElementById("cantEntradas"); 
const entradas = document.getElementById("entradas");
const zonas = ["Platea ALta", "Platea Baja", "Popular"];


let alta = document.getElementById('alta');
let baja = document.getElementById('baja');
let popular = document.getElementById('popular');
let alertaZona = document.getElementById('alertaZona');
let alertaEntradas = document.getElementById('alertaEntradas');

seleccionar.addEventListener('change', elegirZona);

function elegirZona() {
  let eleccion = seleccionar.value;

  if (eleccion === 'alta__Value') {

    alta.classList.remove("oculto");
    baja.classList.add("oculto"); 
    popular.classList.add("oculto");

  } else if (eleccion === 'baja__Value') {

    alta.classList.add("oculto");
    baja.classList.remove("oculto"); 
    popular.classList.add("oculto");
    


  } else if (eleccion === 'popular__Value') {

    alta.classList.add("oculto");
    baja.classList.add("oculto"); 
    popular.classList.remove("oculto");

  }
}

boton.addEventListener("click", calcularEntradas);

function calcularEntradas(){
    alertaZona.classList.add("oculto");
    alertaEntradas.classList.add("oculto");
    if( cantEntradas.value <= 0 ){
        alertaEntradas.classList.remove("oculto");
    }
    else{
        const zona = document.querySelector('input[name="zonaRadio"]:checked') || 'bajaRadio' || 'popularRadio';
        if(zona.value == 'altaRadio') {
            for (i=1;i <=cantEntradas.value ;i++ ){
                const div = document.createElement("div");
                div.textContent = "Usted a comprado una entrada en la " + zonas [0] + " con valor de Valor: 4000$";
                div.classList.add("cartas");
                div.classList.add("card");  
                document.body.appendChild(div);
            }
            const div = document.createElement("div");
            div.textContent = "El pago total es: " + (4000 * cantEntradas.value) + "$" ;
            document.body.appendChild(div);
        }
        else if (zona.value == 'bajaRadio')
        {
            for (i=1;i <=cantEntradas.value ;i++ ){
                const div = document.createElement("div");
                div.textContent = "Usted a comprado una entrada en la " + zonas [1] + " con valor de Valor: 5500$";
                div.classList.add("card");
                div.classList.add("cartas"); 
                document.body.appendChild(div);
            }
            const div = document.createElement("div");
            div.textContent = "El pago total es: " + (5500 * cantEntradas.value) + "$" ;
            document.body.appendChild(div);
        }
        else if (zona.value == 'popularRadio')
        {
            for (i=1;i <=cantEntradas.value ;i++ ){
                const div = document.createElement("div");
                div.textContent = "Usted a comprado una entrada en la " + zonas [2] + " con valor de Valor: 2000$";
                div.classList.add("card");
                div.classList.add("cartas"); 
                document.body.appendChild(div);
            }
            const div = document.createElement("div");
            div.textContent = "El pago total es: " + (2000 * cantEntradas.value) + "$" ;
            document.body.appendChild(div);
        }
        else{
            alertaZona.classList.remove("oculto");
        }
    }
    boton.remove();
}

