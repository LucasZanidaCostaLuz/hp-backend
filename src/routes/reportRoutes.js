const express = require("express");
const router = express.Router();
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware);
const reportController = require("./../controllers/reportController");

//Rota para gerar CSV
router.get("/report/csv", reportController.exportWizardCSV);

//Rota para o PDF
router.get("/report/pdf", reportController.exportWizardPDF);


module.exports = router;