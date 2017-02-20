var mongoose = require('mongoose'), //Declaramos una variable que implemente la librería mongoose.
    Schema = mongoose.Schema; //Declaramos un Schema utilizando la variable mongoose.

   contacto = new Schema({//Creamos un nuevo esquema llamado contacto.
      //Definimos las variables que contendrá nuestro esquema.
   	id: {
         type: String
      },
      nombre: {
   		type: String,//Esta opción define el tipo de datos que contendrá nuestra variable.
   		required: true//Esta opción indica que el campo es requerido para que el esquema pueda ser insertado.
   	},
   	apellidoP: {
   		type: String,
   		required: true
   	},
   	apellidoM: {
   		type: String,
   		required: true
   	},
   	direccion: {
   		type: String,
   		required: true
   	},
   	telefono: {
   		type: Number,
   		required: true
   	},
   	email: {
   		type: String,
   		required: true
   	}
	});

   //Definimos una funcion estática, a través de la cual obtendremos los contactos de nuestra base de datos.
   contacto.statics.getAll = function(fexec) {//El atributo fexec contendrá una función que se ejecutará al final.
      //this hace referencia al esquema que invoca la funcion.
      //find() es una funcion de MongoDB que retorna todos los esquemas contenidos en una colección.
      //sort() es una función que ordena los resultados obtenidos por la función find().
      //{"nombre":1} el parametro indica que la función sort() ordenara los esquemas por el campo nombre("nombre") de forma ascendente(1).
      //exec() executa la función que recibe como parametro.
      return this.find().sort({"nombre":1}).exec(fexec);
   }

   contacto.statics.deleteOne = function(id, fexec){
      //remove() es una funcion de MongoDB que remueve todos los esquemas contenidos en una colección que coincidan con el parametro enviado.
      this.remove({_id: id}).exec(fexec);
   }

   contacto.statics.getOne = function(id, fexec){
      this.find({_id: id}).exec(fexec);
   }

   contacto.statics.updateOne = function(contacto, fexec){
      this.update({_id: contacto.id}, {
         nombre: contacto.nombre, 
         apellidoP: contacto.apellidoP, 
         apellidoM: contacto.apellidoM, 
         direccion: contacto.direccion, 
         telefono: contacto.telefono, 
         email: contacto.email
      }).exec(fexec);
   }

//Indica que un esquema de tipo contacto puede ser creado desde cualquier parte del proyecto.
module.exports = mongoose.model('Contacto', contacto);
//El parámetro 'Contacto' indica el alias que tendrá el esquema fuera del modelo.
//El parámetro contacto indica el esquema que se está exportando.