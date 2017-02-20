var express = require('express');//Declaramos una variable que implemente la librería express.
var eliminarRouter = express.Router();//Declaramos una variable de tipo router.

var routes = function(Contacto) {
    var eliminarController = require('../controllers/eliminarController')(Contacto);//Creamos una variable que implemente el controlador guardarController y el esquema Contacto.

    eliminarRouter.route('/')
        .post(eliminarController.post);//Las peticiones post realizadas desde la ruta especificada invocaran el método post del controlador guardarcontroller.
        
    return eliminarRouter;
};

module.exports = routes;//Exportamos el router para que pueda ser utilizado en otras partes del documento.