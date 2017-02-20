var express = require('express');//Declaramos una variable que implemente la librería express.
var guardarRouter = express.Router();//Declaramos una variable de tipo router.

var routes = function(Contacto) {
    var guardarController = require('../controllers/guardarController')(Contacto);//Creamos una variable que implemente el controlador guardarController y el esquema Contacto.

    guardarRouter.route('/')
        .post(guardarController.post);//Las peticiones post realizadas desde la ruta especificada invocaran el método post del controlador guardarcontroller.
        
    return guardarRouter;
};

module.exports = routes;//Exportamos el router para que pueda ser utilizado en otras partes del documento.