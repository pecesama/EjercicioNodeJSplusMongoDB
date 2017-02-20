var express = require('express');//Declaramos una variable que implemente la librería express.
var editarRouter = express.Router();//Declaramos una variable de tipo router.

var routes = function(Contacto) {
    var editarController = require('../controllers/editarController')(Contacto);//Creamos una variable que implemente el controlador guardarController y el esquema Contacto.

    editarRouter.route('/')
        .post(editarController.post);//Las peticiones post realizadas desde la ruta especificada invocaran el método post del controlador guardarcontroller.
        
    return editarRouter;
};

module.exports = routes;//Exportamos el router para que pueda ser utilizado en otras partes del documento.