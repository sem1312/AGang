const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

router.route('/inicio').get(myController.inicio);

router.route("/costi").get(myController.costilla);

router.route("/pajan").get(myController.pajan);

router.route("/pocho").get(myController.pocho);

router.route("/medran").get(myController.medran);

router.route("/bolita").get(myController.bolita);

router.route("/pepis").get(myController.pepis);

module.exports = router;