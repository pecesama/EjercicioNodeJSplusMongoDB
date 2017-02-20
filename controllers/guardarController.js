var guardarController = function(Contacto) {

    var post = function(req, res) {
        var contacto = new Contacto(req.body);//Creamos un esquema contacto que contiene el cuerpo de nuestra petición.

        contacto.save(function(err, contacto, num) {//utilizamos la función save para guardar nuestro esquema de contacto en la base de datos.
            if(err) {//Si el parámetro error contiene algo, retornamos un código de error.
                res.status(500).send(err);
                console.log('ERROR: ' + err);
            } else {//Si no, retornamos un código positivo y cargamos la vista nuevoContacto.
                res.render('nuevoContacto');
            }
        });
    };

    return {
        post: post //Retornamos la función dentro del campo post.
    };
};

module.exports = guardarController;
