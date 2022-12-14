const usersCtrl = {};

const userModel = require("../models/User");

usersCtrl.getUsers = async (req, res) => {
	const userList = await userModel.find();
	if (userList == null) res.json({ message: "No hay datos" });
	res.json(userList);
};

usersCtrl.createUsers = async (req, res) => {
	const { userName, name, lastName, typeUser, typeState } = req.body;
	if (
		userName == null ||
		name == null ||
		lastName == null ||
		typeUser == null ||
		typeState == null
	) {
		res.json({ message: "parametros obligatorios no informado" });
	} else {
		const newUser = userModel({
			userName,
			name,
			lastName,
			typeUser,
			typeState,
		});
		await newUser.save();
		res.json({ message: "created" });
	}
};

usersCtrl.deleteUser = async (req, res) => {
	const idUser = req.params.id;
	if (idUser != null) await userModel.deleteOne({ _id: req.params.id });
	res.json({ message: "delete ok" });
};

usersCtrl.updateUsers = (req, res) => res.json({ message: "update" });

module.exports = usersCtrl;
