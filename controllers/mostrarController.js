var mostrarController = function(Contacto) {

    var post = function(req, res) {
        
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
    };

    return {
        post: post//Retornamos la función dentro del campo post.
    };
};

module.exports = mostrarController;
