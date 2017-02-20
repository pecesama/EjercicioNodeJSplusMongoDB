var express = require('express');//Declaramos una variable que implemente la librería express.
var encontrarRouter = express.Router();//Declaramos una variable de tipo router.

var routes = function(Contacto) {
    var encontrarController = require('../controllers/encontrarController')(Contacto);//Creamos una variable que implemente el controlador guardarController y el esquema Contacto.

    encontrarRouter.route('/')
        .post(encontrarController.post);//Las peticiones post realizadas desde la ruta especificada invocaran el método post del controlador guardarcontroller.
        
    return encontrarRouter;
};

module.exports = routes;//Exportamos el router para que pueda ser utilizado en otras partes del documento.