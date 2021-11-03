const cors = require("cors");
const express = require("express");

const controllers = require('./controllers/todosController');

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', controllers.getTodos);
app.post('/', controllers.addTodo);
app.put('/:id', controllers.editTodo);
app.delete('/:id', controllers.deleteTodo);

app.listen(port, () => { console.log(`Server is running on port: ${port}`) });