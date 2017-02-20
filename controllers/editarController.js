var editarController = function(Contacto) {

    var post = function(req, res) {
        var contacto = new Contacto(req.body);//Creamos un esquema contacto que contiene el cuerpo de nuestra petición.

        console.log(contacto);

        Contacto.updateOne(contacto, function(err) {//utilizamos la función save para guardar nuestro esquema de contacto en la base de datos.
            if(err) {//Si el parámetro error contiene algo, retornamos un código de error.
                res.status(500).send(err);
                console.log('ERROR: ' + err);
            } else {//Si no, volvemos a cargar verContactos.
                Contacto.getAll(function(err, contacto) {//A través del esquema de contacto, mandamos llamar su función getAll().
                    if(err){//Si la variable error contiene algo, retornamos un código de error.
                        res.status(500).send(err);
                        console.log('ERROR: ' + err);
                    } else {//Si no, redirigimos a la vista ver contacto y enviamos un esquema con los resultados de la función getAll().
                        res.render('verContactos', {
                            contactos: contacto
                        });
                    }
                });
            }
        });
    };

    return {
        post: post //Retornamos la función dentro del campo post.
    };
};

module.exports = editarController;
