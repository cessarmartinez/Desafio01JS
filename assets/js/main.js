let Pedido ='';
const Listproducts =[];
let busqueda=[]

class Product {
 constructor(code,name,precio,imagen) {
        this.code = code;
        this.name = name;
        this.precio = precio;
        this.imagen=imagen;
    }
}

class carrito {
    constructor() {
        this.entradas = []
        this.name = ''
        this.total = 0
    }
    setName(value) {
        this.name = value
    }
   
    addProduct(product) {
        this.entradas.push(product)
    }

    vaciarCarrito() {
        this.entradas = [];
    }

    getTotal() 
        {
        Pedido ='';
        let cont=0;
        this.total = 0;
         for (const A of this.entradas) 
            {
            this.total = this.total + A.precio
            }
         return this.total
        }
}

const cliente = new carrito();

let cantidad = JSON.parse(localStorage.getItem('cantidadEntradas'));
if (cantidad ==0 || cantidad == null ) 
               cantidad=0 
var x = document.getElementById("contador");
x.innerHTML = parseInt(cantidad);


const almacenados = JSON.parse(localStorage.getItem("listaEntradas"));

const carritoboton = document.getElementById('carrito')

if (almacenados !=null && almacenados.length!=0) {
        for (const objeto of almacenados)
              {          
                cliente.addProduct(objeto)                   
              }
  }
  else
  {
                    carritoboton.disabled=true
  }
 
Listproducts.push (new Product('01','PLATEA ALTA',10000,"./assets/img/alta.png" ));
Listproducts.push (new Product('02','PLATEA BAJA',8500,"./assets/img/baja.png" ));
Listproducts.push (new Product('03','POPULAR',5000,"./assets/img/popular.png" ));
  
const alta = Listproducts.filter((el) => el.code.includes("01"))
const baja = Listproducts.filter((el) => el.code.includes("02"))
const popular = Listproducts.filter((el) => el.code.includes("03"))
const option = document.getElementById("option");

option.addEventListener("click", () => {
     switch (option.value){
            case "opt1":
                mostrarEntradas(Listproducts)
                break;
            case "opt2":
                mostrarEntradas(alta)
                break;
            case "opt3":
                mostrarEntradas(baja)
                break;
            case "opt4":
                mostrarEntradas(popular)

                break;
            default:
                mostrarEntradas(Listproducts)
                break;
        }
    })   

mostrarEntradas(Listproducts)

function mostrarEntradas (array) {
let lista = document.getElementById('lista')

lista.innerHTML = ''
        array.forEach((product) => {     
                        const tr = document.createElement('div')
                        tr.classList.add('col', 'mb-5')
                       const Content = `
                            <div class="card h-100">
                                <img class="card-img-top" src=${product.imagen} alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">${product.name}</h5>
                                       $ ${product.precio}
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center">
                                        <button class="btn btn-outline-dark mt-auto " id="boton">Agregar
                                        </button>
                                    </div>
                                </div>
                            </div>
                          `
                          
                          tr.innerHTML = Content;
                            tr.addEventListener("click",()=>{ agregarCarrito(product) } ) 
                            
                            lista.appendChild(tr)
    })
}
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

function agregarCarrito(entradas) {

    cliente.addProduct(entradas) ;  

    guardarLocal("listaEntradas", JSON.stringify(cliente.entradas));
    guardarLocal("Totalcarrito", JSON.stringify(cliente.getTotal()));

    carritoboton.disabled=false

    
    var x = document.getElementById("contador");
    x.innerHTML = parseInt(x.innerHTML)+1;
    localStorage.setItem("cantidadEntradas",JSON.stringify(parseInt(x.innerHTML)))
}

function operacion(valor1, valor2, operacion) {
    switch (operacion){
            case "1":
                return valor1 + valor2;
                break;
            case "2":
                return valor1 - valor2;
                break;
            case "3":
                return valor1 * valor2;
                break;
            case "4":
                return valor1 / valor2;
                break;
            default:
            return 0;
                break;

        }
}


const fetchLocalData = () => {
	fetch('./assets/js/data.json').then((response) =>response.json())
	.then((product)=>{
        console.log(product)
	}).catch((err)=>console.log(err))
	}
fetchLocalData()