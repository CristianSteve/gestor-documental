uploadFileCtrl = {};
const Document = require("../models/Document");

uploadFileCtrl.createFile = async (req, res) => {
	const { name, alias, author, type, long, description } = req.body;
	if (
		name == null ||
		alias == null ||
		author == null ||
		type == null ||
		long == null
	) {
		res.json({ message: "parametros obligatorios no informado" });
	} else {
		const newFile = Document({
			name,
			alias,
			author,
			type,
			long,
			description,
			dateCreated: new Date(),
		});
		await newFile.save();
		res.json({ message: "created" });
	}
};

uploadFileCtrl.findFile = async (req, res) => {
	const documentList = await Document.find();
	if (documentList == null) res.json({ message: "No hay datos" });
	res.json(documentList);
};

uploadFileCtrl.findNameFiles = async (req, res) => {
	const { name } = req.query;
	const documentList = await Document.find({
		name: { $regex: name, $options: "i" },
	}).limit(10);
	res.json(documentList);
};
module.exports = uploadFileCtrl;
