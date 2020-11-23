/**
============================
CARDS DEMO, Back End.
============================
'javascript', 'express', 'nodejs', 'axios'
fvvelasquez, this.fvvelasquez@gmail.com

Servidor API REST express que sirve un catalogo de CARDS desde un db.json con axios y JS.
Separamos las responsabilidades del código en capas, tipo MVC.

 */


// EXPRESS:
const express = require("express");
const express_application = express();
// ----------------------------
// DEFINICIONES propias:
const { PORT, APP_SIGNATURE } = require("./config");
// Traemos nuestro 'express.Router()'.
const { MainRouter } = require("./routes");
// ----------------------------

// MIDDLEWARE
// Hacemos './public' accesible para usar por otros recursos.
express_application.use(express.static("./public"));
// Usamos nuestro 'express.Router()', que invoca al controlador de rutas que definimos.
express_application.use("/", MainRouter);
// ----------------------------

// Levantamos la EXPRESS APPLICATION SERVER, escuchndo en el puerto PORT.
express_application.listen(PORT, () => {
	console.log(APP_SIGNATURE + " listening on PORT " + PORT);
});
// ----------------------------
