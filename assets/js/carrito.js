const tbody = document.querySelector('.tbody')
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const totalCarrito = JSON.parse(localStorage.getItem("Totalcarrito"));
const cantidad = JSON.parse(localStorage.getItem('cantidadProductos'));

function realizarCompra()
         {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu compra ha sido confirmada',
                showConfirmButton: false,
                timer: 1500
              })
            guardarLocal("listaProductos", JSON.stringify([]));
            guardarLocal("Totalcarrito", JSON.stringify(0));
            guardarLocal("cantidadProductos", JSON.stringify(0));
            tbody.innerHTML = ''
            const contenedor = document.getElementById('Totales')
            contenedor.innerHTML = ''        
            const cantidad2 = JSON.parse(localStorage.getItem('CantidadProductos'));
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
                                  </div>
                                  <td><button ID = "btnEliminar" class="btnEliminar2 btn btn-outline-dark mt-auto ">x</button></td>
                                    <td><img src="${item.imagen}" alt="${item.descripcion}" height=100 width=100></td>
                                    <td>${item.name}</td>
                                    <td>1</td>
                                    <td>${item.precio}</td>                          
                          `
               
                            tr.innerHTML = Content;
                            tbody.append(tr)

                      }
                )
}

function armarPagina(){

        const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
        const totalCarrito = JSON.parse(localStorage.getItem("Totalcarrito"));
        const cantidad = JSON.parse(localStorage.getItem('cantidadProductos'));


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
                        <button class="btn btn-outline-dark" type=button >
                                Confirmar Compra
                        </button>
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
        const Inicio = document.createElement('button')
        const Content3 = `
                            <a href="../index.html">
                            <button class="btn btn-outline-dark" type=button >
                                Volver al Iniciio
                            </button>
                            </a>  
                         `
        Inicio.innerHTML = Content3;

        EfectuarCompra.appendChild(Inicio)
}

function BorrarCompra() 
{
    Swal.fire({
        title: 'Estas Seguro?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: "No",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
      }).then((result) => {
            tbody.innerHTML = ''
            const contenedor = document.getElementById('Totales')
            contenedor.innerHTML = ''
            const EfectuarCompra = document.getElementById('EfectuarCompra')
            EfectuarCompra.innerHTML= ''
            guardarLocal("listaProductos", JSON.stringify([]));
            guardarLocal("Totalcarrito", JSON.stringify(0));
            guardarLocal("cantidadProductos", JSON.stringify(0));
            armarPagina()
      })
}

function eliminar() {
    const btnEliminar = document.getElementsByClassName("btnEliminar2");
    for(let i =0; i < btnEliminar.length ; i++){
            btnEliminar[i].addEventListener("click", () => {


                guardarLocal("Totalcarrito", JSON.stringify(totalCarrito-almacenados[i].precio));
                guardarLocal("cantidadProductos", JSON.stringify(cantidad-1));
                almacenados.splice(i, 1);
                guardarLocal("listaProductos", JSON.stringify(almacenados));
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