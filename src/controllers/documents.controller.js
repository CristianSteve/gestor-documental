const path = require("path");

documentCtrl = {};

documentCtrl.getDocuments = async (req, res) => {
	console.log(req.params.id);
	res.download(path.join(__dirname, "../../filesUploads/", req.params.id));
};

documentCtrl.setDocuments = async (req, res) => {
	console.log(req.files);
	if (req.files !== null) {
		let EDFile = req.files.files;
		EDFile.mv(
			path.join(__dirname, "../../filesUploads/", EDFile.name),
			(err) => {
				if (err) return res.status(500).send({ message: err });
				res.status(200).send({ message: "File upload" });
			}
		);
	} else {
		res.status(400).json({ message: "File null" });
	}
};

module.exports = documentCtrl;
