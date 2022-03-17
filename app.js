const body = document.querySelector('body')
const tbody = document.querySelector('tbody');

// valores de los inputs
const nombre = document.querySelector('#nombre');
const id = document.querySelector('#id');

// boton de agregar y actualizar***
const btn_A_U = document.querySelector('#btn_Add_Update');

// agregar usuario ala tabla
btn_A_U.onclick = addUSer
    

// ejecutar funcion despues de terminar de cargar el dom
body.onload = function(){
    addTable()
}

// crear filas (tr)
function createFila(usuario,i){
    const tr = document.createElement('tr');

    const tdDelete = document.createElement('td')
    const tdUpdate = document.createElement('td')

    const tdNombre = document.createElement('td');
    tdNombre.textContent = usuario.nombre

    const tdId = document.createElement('td');
    tdId.textContent = usuario.id
    
    // delete user
    const iDelete = document.createElement('i');
    iDelete.className="Idelete fas fa-trash-alt"
    
    iDelete.onclick = () => {
     const isConfirm = confirm('seguro')

     if(isConfirm){
         deleteUser(i)
         clearTable()
         addTable()
       }
    }

    const iUpdate = document.createElement('i')
    iUpdate.className="Iupdate fas fa-pen-square"
    
    // Update user
    iUpdate.onclick = (e) => {
       btn_A_U.textContent = "actualizar"

       nombre.value = usuario.nombre
       id.value = usuario.id

       btn_A_U.onclick = (u) => update(u,i)
       e.preventDefault()
    }
     
    // join
    tdDelete.appendChild(iDelete)
    tdUpdate.appendChild(iUpdate)
    // join
    tr.append(tdDelete,tdUpdate,tdNombre,tdId)

    return tr
}

// update user
function update(e,i){
    
    updateUser(i,nombre.value,id.value)
    clearTable()
    addTable()
    // alert('actualizado')
    e.preventDefault()
    nombre.value = '';
    id.value = '';
    btn_A_U.textContent = "guardar"
    btn_A_U.onclick = addUSer
}

// crear nuevo usuario ******
function addUSer(e){
    const indice = getUser().length;
    
    const nuevo_Usuario = newUser(nombre.value,id.value)
    const tr = createFila(nuevo_Usuario,indice)
    
    tbody.appendChild(tr)
    e.preventDefault()
}
  

// limpiar tabla 
function clearTable(){
  tbody.innerHTML = '';
}



// llenar tabla de nuevo
function addTable(){

// importo mi array del controlador
const user = getUser()
let trs = [];
 
// recorrer array user
   user.forEach((u,i) => {
         const tr = createFila(u,i)
          trs.push(tr)
        })

     // inserto dentro de tbody mis filas creadas 
     tbody.append(...trs) 
}
