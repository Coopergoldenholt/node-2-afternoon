let messages = [];
let id = 0;

module.exports = {
	createMessages: (req, res) => {
		const { text, time } = req.body;
		messages.push({
			id,
			text,
			time
		});
		id++;
		res.status(200).send(messages);
	},

	readMessages: (req, res) => {
		res.status(200).send(messages);
	},

	updateMessages: (req, res) => {
		const { id } = req.params;
		console.log(id);
		const index = messages.findIndex(ele => ele.id === +id);
		const updatedMessage = { ...messages[index], ...req.body };
		messages[index] = updatedMessage;
		res.status(200).send(messages);
	},

	deleteMessages: (req, res) => {
		const { id } = req.params;
		const index = messages.findIndex(ele => ele.id === +id);
		messages.splice(index, 1);
		res.status(200).send(messages);
	}
};
