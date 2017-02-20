var express = require('express'),//Se declara una variable que implemente la librería express.
    app = express(),//Se declara una variable de tipo express.
    bodyParser = require('body-parser'),//Se declara una variable que implemente la librería body-parser.
	mongoose = require('mongoose');//Se declara una variable que implemente la librería mongoose.

app.use(bodyParser.json());//Se implementa el uso de la función json de la libería body-parser en la variable app.
app.use(bodyParser.urlencoded({//Se implementa el uso de la función urlencoded de la libería body-parser en la variable app.
    extended: true
}));

var Contacto = require('./models/contactoModel');//Se crea un esquema de tipo contacto.
var guardarRouter = require('./routes/guardarRoutes')(Contacto);//Se crea una variable que implementa el router guardarRoutes y utiliza como modelo de datos a Contacto.
var mostrarRouter = require('./routes/mostrarRoutes')(Contacto);//Se crea una variable que implementa el router mostrarRoutes y utiliza como modelo de datos a Contacto.
var eliminarRouter = require('./routes/eliminarRoutes')(Contacto);//Se crea una variable que implementa el router eliminarRoutes y utiliza como modelo de datos a Contacto.
var encontrarRouter = require('./routes/encontrarRoutes')(Contacto);
var editarRouter = require('./routes/editarRoutes')(Contacto);

app.use('/guardar', guardarRouter);//Se implementa el uso del router guardarRouter en la variable app y se le asigna el alias '/guardar'.
app.use('/mostrar', mostrarRouter);//Se implementa el uso del router mostrarRouter en la variable app y se le asigna el alias '/mostrar'.
app.use('/eliminar', eliminarRouter);//Se implementa el uso del router eliminarRouter en la variable app y se le asigna el alias '/eliminar'.
app.use('/encontrar', encontrarRouter);
app.use('/editar', editarRouter);

app.set('view engine', 'ejs');//Se establece el motor de vistas como tipo ejs.

app.get('/', function(req, res) {//Toma las peticiones a la ruta especificada.
   res.render('nuevoContacto');//Carga la vista nuevoContacto.
});

app.get('/verContactos', function(req, res) {//Toma las peticiones a la ruta especificada.
   res.render('verContactos');//Carga la vista verContactos.
});

mongoose.connect('mongodb://localhost:27017/contactosApp', function(err) {//Se establece una conexión con la base de datos especificada.
    if(err) //En caso de que algún error exista se envía el mensage de error.
        throw err;
    
    app.listen(3000, function (err) {//Indica que la aplicación escuchará peticiones por el puerto 3000
        if(err) //En caso de que algún error exista se envía el mensage de error.
            throw err;
        else
            console.log('Escuchando por el puerto 3000');//Si no, logueamos en consola que nuestra aplicación está escuchando por el puerto 3000
    });
});