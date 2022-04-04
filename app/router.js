const express = require('express');

const controller = require("./controller/controller");
const APIError = require("./service/APIError");
const ErrorMessage = require("./service/httpStatusCode");

const router = express.Router();

router.get("/",controller.get);
router.post("/",controller.post);

router.get("/ping",controller.ping);

// Je suis dans le cas où je veux renvoyer une erreur NOT FOUND (404)
router.use(APIError.log(ErrorMessage.NOT_FOUND));

module.exports = router;