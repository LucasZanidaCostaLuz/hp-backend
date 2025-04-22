const express = require("express");
const router = express.Router();
const wizardController = require("../controllers/wizardController");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware);
router.get("/", wizardController.getAllWizards);
router.get("/:id", wizardController.getWizard);
router.post("/", wizardController.createWizard);

module.exports = router;
