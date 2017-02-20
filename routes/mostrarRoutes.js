var express = require('express');//Declaramos una variable que implemente la librería express.
var mostrarRouter = express.Router();//Declaramos una variable de tipo router.

var routes = function(Contacto) {
    var mostrarController = require('../controllers/mostrarController')(Contacto);//Creamos una variable que implemente el controlador mostrarController y el esquema Contacto.

    mostrarRouter.route('/')
        .post(mostrarController.post);//Las peticiones post realizadas desde la ruta especificada invocaran el método post del controlador mostrarController.
        
    return mostrarRouter;
};

module.exports = routes;//Exportamos el router para que pueda ser utilizado en otras partes del documento.