const { Router } = require("express");

const router = Router();
const {
	getDocuments,
	setDocuments,
} = require("../controllers/documents.controller");

const {
	createFile,
	findFile,
	findNameFiles,
} = require("../controllers/uploadFile.controller");

router.route("/").post(setDocuments);
router.route("/download/:id").get(getDocuments);
router.route("/file").get(findFile).post(createFile);
router.route("/files/").get(findNameFiles);
module.exports = router;
