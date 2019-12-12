const express = require("express");
const app = express();
const SERVER_PORT = 3001;
const ctrl = require("./contollers/messagesController");

app.use(express.json());
app.post("/api/messages", ctrl.createMessages);
app.get("/api/messages", ctrl.readMessages);
app.put("/api/messages/:id", ctrl.updateMessages);
app.delete("/api/messages/:id", ctrl.deleteMessages);

app.listen(SERVER_PORT, () => {
	console.log(`Server listening on port ${SERVER_PORT}`);
});
