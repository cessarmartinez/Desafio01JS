const tbody = document.querySelector('.tbody')
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const almacenados = JSON.parse(localStorage.getItem("listaEntradas"));
const totalCarrito = JSON.parse(localStorage.getItem("Totalcarrito"));
const cantidad = JSON.parse(localStorage.getItem('cantidadEntradas'));

function realizarCompra()
         {alert("Muchas gracias por su compra!")
     
                    guardarLocal("listaEntradas", JSON.stringify([]));
                    guardarLocal("Totalcarrito", JSON.stringify(0));
                    guardarLocal("cantidadEntradas", JSON.stringify(0));
                      tbody.innerHTML = ''
                     
                  const cantidad2 = JSON.parse(localStorage.getItem('CantidadEntradas'));
                    if (cantidad2 == null ) {cantidad2=0}
                    var x = document.getElementById("contador");
                    x.innerHTML = parseInt(cantidad2);
        }

function renderCarrito(){
          tbody.innerHTML = ''
          almacenados.map(item => {
                          const tr = document.createElement('tr')
                          tr.classList.add('ItemCarrito')
                          const Content = `
                          
                          <th scope="row"></th>
                                <td ><p>${item.name}</p></td>
                                <td class="table__price"><p> $ ${item.precio}      </p>                                </td>
                                    <div id="divEliminar" class="text-center">
                                        <button ID = "btnEliminar" class="btnEliminar2 btn btn-outline-dark mt-auto ">X
                                        </button>
                                    </div>                          
                          `
               
                            tr.innerHTML = Content;
                            tbody.append(tr)

                      }
                )
}

function armarPagina(){

        const almacenados = JSON.parse(localStorage.getItem("listaEntradas"));
        const totalCarrito = JSON.parse(localStorage.getItem("Totalcarrito"));
        const cantidad = JSON.parse(localStorage.getItem('cantidadEntradas'));


        for (const objeto of almacenados)
              {
                renderCarrito()
              }

        const contenedor = document.getElementById('Totales')
        const totales = document.createElement('h3')

        totales.textContent = ` El total de la compra es $ ${totalCarrito} `

        contenedor.appendChild(totales)

        const EfectuarCompra = document.getElementById('EfectuarCompra')
        const Confir = document.createElement('button')
        const Content = `
                        <a href="..\\index.html">
                            <button class="btn btn-outline-dark" type=button >
                                Confirmar Compra
                            </button>
                        </a> 
                         `
         Confir.innerHTML = Content;

        Confir.addEventListener("click", () => {     realizarCompra()        })  

        EfectuarCompra.appendChild(Confir)

        const vaciarCarrito = document.createElement('button')
        const Content2 = `
                            <button class="btn btn-outline-dark" type=button >
                                Vaciar Carrito
                            </button>
                         `
         vaciarCarrito.innerHTML = Content2;

        vaciarCarrito.addEventListener("click", () => {     BorrarCompra()        })  

        EfectuarCompra.appendChild(vaciarCarrito)
}

function BorrarCompra() 
{
                    tbody.innerHTML = ''
                    const contenedor = document.getElementById('Totales')
                    contenedor.innerHTML = ''
                    const EfectuarCompra = document.getElementById('EfectuarCompra')
                    EfectuarCompra.innerHTML= ''
                    guardarLocal("listaEntradas", JSON.stringify([]));
                    guardarLocal("Totalcarrito", JSON.stringify(0));
                    guardarLocal("cantidadEntradas", JSON.stringify(0));
                    armarPagina()
}

function eliminar() {
    const btnEliminar = document.getElementsByClassName("btnEliminar2");

    for(let i =0; i < btnEliminar.length ; i++){
            btnEliminar[i].addEventListener("click", () => {


                guardarLocal("Totalcarrito", JSON.stringify(totalCarrito-almacenados[i].precio));
                guardarLocal("cantidadEntradas", JSON.stringify(cantidad-1));
                almacenados.splice(i, 1);
                guardarLocal("listaEntradas", JSON.stringify(almacenados));
                const contenedor = document.getElementById('Totales')
                contenedor.innerHTML = ''
                const EfectuarCompra = document.getElementById('EfectuarCompra')
                EfectuarCompra.innerHTML= ''
                armarPagina()
                location.reload()
            })   
}
}

armarPagina()
eliminar()