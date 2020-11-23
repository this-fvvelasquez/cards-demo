/**
 * ----------------------------
 * MainController
 * ----------------------------
 * Define un conjunto de métodos que generan la respuesta a las peticiones recibidas.
 *
 * fvvelasquez, this.fvvelasquez@gmail.com
 */

// Requerimos 'path'
const path = require("path");
// Requerimos file system.
const fs = require("fs");
// ----------------------------
const db_DATA = require("../data/data");

// HTML RENDER
// PATH común para los html a endiar como respuesta.
const views_PATH = path.join(__dirname, "..", "views");
// Metodo privado que se encarga de enviar el html correspondiente a la solicitud
function render(response, fileName) {
	const file_PATH = path.join(views_PATH, fileName + ".html");
	console.log(file_PATH);
	return response.status(200).sendFile(file_PATH);
}
// ----------------------------

// Definimos los métodos que serán invocados cuando sus corresponsientes rutas sean solicitadas:
// ----------------------------
class MainController {
	// ---------------------------- CATALOGUE
	async catalogue(request, response) {
		return render(response, "catalogue");
	}
	// ---------------------------- ABOUT
	async about(request, response) {
		return render(response, "about");
	}
	// ---------------------------- CATALOGUE db.json
	async getCatalogue(request, response) {
		return response.send(db_DATA.getCatalogue_JSON());
	}
	// ---------------------------- NOT FOUND
	async notFound(request, response) {
		return response.status(404).send({ message: "Page Not Found" });
	}
	// ----------------------------
}

// Default export:
module.exports = new MainController();
// ----------------------------
