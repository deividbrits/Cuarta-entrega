const Id =  require ('/Users/davidbritoledesma/Desktop/Cuarta entrega/models /models.js'); 

class RegistroUsuario {

      static userController (req,res) {
            const usuario = new Id (req.body.identificador, req.body.nombre, req.body.email);
            res.send(`Usuario Registrado : ${usuario.getId()}`);

      
      }

}
module.exports = RegistroUsuario;