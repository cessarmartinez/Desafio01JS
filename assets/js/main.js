const formulario = document.getElementById("form");
const boton = document.getElementById("boton");
const seleccionar = document.querySelector('select');
const radio = document.querySelector('zonaRadio');
let cantEntradas = document.getElementById("cantEntradas"); 


let alta = document.getElementById('alta');
let baja = document.getElementById('baja');
let popular = document.getElementById('popular');

let total=0;

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

boton.addEventListener("click", calcularEntradas)

function calcularEntradas(){
    if( cantEntradas.value <= 0 ){
        alert("Ingrese un valor mayor a 0")
    }
    else{
        const zona = document.querySelector('input[name="zonaRadio"]:checked') || 'bajaRadio' || 'popularRadio';
        if(zona.value == 'altaRadio') {
            for (i=1;i <=cantEntradas.value ;i++ ){
                const div = document.createElement("div");
                div.textContent = "Usted a comprado una entrada en la Platea Alta con valor de Valor: 4000$";
                div.classList.add("card");
                div.classList.add("cartas"); 
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
                div.textContent = "Usted a comprado una entrada en la Platea Baja con valor de Valor: 5500$";
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
                div.textContent = "Usted a comprado una entrada en la Popular con valor de Valor: 2000$";
                div.classList.add("card");
                div.classList.add("cartas"); 
                document.body.appendChild(div);
            }
            const div = document.createElement("div");
            div.textContent = "El pago total es: " + (2000 * cantEntradas.value) + "$" ;
            document.body.appendChild(div);
        }
        else{
            alert("Seleccion una zona")
        }
    }
}