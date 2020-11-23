/**
 * ----------------------------
 * CatalogueData
 * ----------------------------
 * Define un conjunto de métodos para operar con la data/db.json
 *
 * fvvelasquez
 */

// Requerimos 'path'
const path = require("path");
// Requerimos file system.
const fs = require("fs");
// Traemos el nombre del DB_JSON
const { DB_JSON } = require("../config");
// ----------------------------

// DB.JSON
// PATH de la base de datos .json
const DB_PATH = path.join(__dirname, "..", "data", DB_JSON);
// ----------------------------
class Data {
	// ---------------------------- CATALOGUE db.json
	getCatalogue_JSON() {
		// Requerimos la db.json
		const db = require(DB_PATH);
		console.log(DB_PATH);
		return db;
	}
}

module.exports = new Data();
