const express = require('express');

const controller = require("./controller/controller");

const routerWrapper = require("./middleware/routerWrapper");
const handleError = require("./middleware/handleError");
const APIError = require('./service/APIError');

const router = express.Router();

/* ROUTES */

router.get("/movie",routerWrapper(controller.get));
router.post("/movie",routerWrapper(controller.post));

router.get("/ping",routerWrapper(controller.ping));



/* GESTION D'ERREUR */

// Je suis dans le cas où je veux renvoyer une erreur NOT FOUND (404)
//router.use(APIError.log(ErrorMessage.NOT_FOUND));

router.use((req,_,next)=>{
    //next(new APIError("This url cannot be found",req.url,404));
    /// je déclenche moi même mon erreur
    throw new APIError("This url cannot be found",req.url,404); // les deux sont possibles
});

// Gestion d'erreur
router.use(handleError);

module.exports = router;