// Requerimos un Router de express.
const router = require("express").Router();
// Requerimos nuestra clase que contiene los controladores de ruta.
const { MainController } = require("../controllers");
// ----------------------------

// Definimos las rutas disponibles:
// ----------------------------
// GET:
router.get("/", MainController.catalogue);
router.get("/about", MainController.about);
router.get("/catalogue", MainController.catalogue);
router.get("/catalogue/all", MainController.getCatalogue);
router.get("**", MainController.notFound);
// ----------------------------

// Default export:
module.exports = router;
// ----------------------------
