let Pedido ='';
let busqueda=[];
const Listproducts =[];

class Product {
 constructor(code,name,precio,imagen,descripcion) {
        this.code = code;
        this.name = name;
        this.precio = precio;
        this.imagen=imagen;
        this.descripcion=descripcion;
    }
}

class carrito {
    constructor() {
        this.productos = []
        this.name = ''
        this.total = 0
    }
    setName(value) {
        this.name = value
    }
   
    addProduct(product) {
        this.productos.push(product)
    }

    vaciarCarrito() {
        this.productos = [];
    }

    getTotal() 
        {
        Pedido ='';
        let cont=0;
        this.total = 0;
         for (const A of this.productos) 
            {
            this.total = this.total + A.precio
            }
         return this.total
        }
}

const cliente = new carrito();

let cantidad = JSON.parse(localStorage.getItem('cantidadProductos'));
if (cantidad ==0 || cantidad == null ) 
               cantidad=0 
var x = document.getElementById("contador");
x.innerHTML = parseInt(cantidad);


const almacenados = JSON.parse(localStorage.getItem("listaProductos"));

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
 

const fetchLocalData = () => {
	fetch('./assets/js/data.json').then((response) =>response.json())
	.then((result)=>{
        Listaproducts(result.product)
	}).catch((err)=>console.log(err))
	}
const Listaproducts = (body) =>{
	body.forEach((product) => {
        Listproducts.push (new Product(  product.code,product.name,product.precio, product.imagen, product.descripcion)  )                
         nike = Listproducts.filter((el) => el.code.includes('nike'))
         adidas = Listproducts.filter((el) => el.code.includes('adidas'))
         balenciaga = Listproducts.filter((el) => el.code.includes('balenciaga'))
         vans = Listproducts.filter((el) => el.code.includes('vans'))
         mostrarProductos(Listproducts)


	})


}

fetchLocalData()


const option = document.getElementById("option");

option.addEventListener("click", () => {
     switch (option.value){
            case "opt1":
                mostrarProductos(Listproducts)
                break;
            case "opt2":
                mostrarProductos(nike)
                break;
            case "opt3":
                mostrarProductos(adidas)
                break;
            case "opt4":
                mostrarProductos(vans)
                break;
            case "opt5":
                mostrarProductos(balenciaga)
                break;
            default:
                mostrarProductos(Listproducts)
                break;
        }
    })   

mostrarProductos(Listproducts)

function mostrarProductos (array) {
let lista = document.getElementById('lista')

lista.innerHTML = ''
        array.forEach((product) => {     
                        const tr = document.createElement('div')
                        tr.classList.add('col', 'mb-5')
                       const Content = `
                            <div class="card h-100">
                                <img class="card-img-top" src=${product.imagen} alt="${product.descripcion}" />
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

function agregarCarrito(productos) {

    cliente.addProduct(productos) ;  

    guardarLocal("listaProductos", JSON.stringify(cliente.productos));
    guardarLocal("Totalcarrito", JSON.stringify(cliente.getTotal()));

    carritoboton.disabled=false

    
    var x = document.getElementById("contador");
    x.innerHTML = parseInt(x.innerHTML)+1;
    localStorage.setItem("cantidadProductos",JSON.stringify(parseInt(x.innerHTML)))
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El Producto ha sido agregado',
        showConfirmButton: false,
        timer: 1500
      })
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