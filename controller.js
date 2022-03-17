// array para almacenar las instancias de la clase (User)
let db = [];

// funcion para importar nuestro array db
function getUser(){
    return db;
}

// funcion de crear nuevo usuario
function newUser(nombre,id){
   const new_user = new User(nombre,id)
   db.push(new_user)
   return new_user
}

// funcion actualizar usuario

function updateUser(i,newNombre,newId){
   db[i].nombre = newNombre
   db[i].id = newId
}

// funcion eliminar usuario
function deleteUser(i){

   db.splice(i,1)
}