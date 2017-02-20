var encontrarController = function(Contacto) {

    var post = function(req, res) {
        var contacto = new Contacto(req.body);//Creamos un esquema contacto que contiene el cuerpo de nuestra petición.

        Contacto.getOne(contacto.id, function(err) {//Utilizamos la función geOne para obtener la información de un contacto que tenga el mismo id que el del parámetro.
            if(err) {//Si el parámetro error contiene algo, retornamos un código de error.
                res.status(500).send(err);
                console.log('ERROR: ' + err);
            } else {//Si no, volvemos a cargar verContactos.
                res.render('editarContacto', {
                    contacto
                });
            }
        });
    };

    return {
        post: post //Retornamos la función dentro del campo post.
    };
};

module.exports = encontrarController;
