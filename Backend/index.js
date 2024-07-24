const express = require('express');
const app = express();
const {createTodo, updateTodo} = require('./types');
const { object } = require('zod');
const { todo } = require('./db');
const PORT = 3000;

app.use(express.json());

app.post('/todo', async(req, res) => {
    try {
        const createPayLoad = req.body
        const parsedPayLoad = createTodo.safeParse(createPayLoad);
        
        await todo.create({
            title: parsedPayLoad.title,
            description: parsedPayLoad.description,
            isCompleted:false
        });

        res.status(200).json({
            msg:'todo created sucuessfully'
        })
    } catch (error) {
        res.status(411).json({
            msg: 'Invalid input'
        })
    }
})
app.get('/todo', async(req, res) => {
    const renderedTodos = await todo.find({});
    if (!renderedTodos) {
        res.status(411).json({
            msg: "No todos found"
        });
    } else {
        res.status(400).json({
            renderedTodos
        })
    }
})

app.put('/completed', async(req, res) => {
    try {
        const updatePayLoad = req.body;
        const parsedPayLoad = updatePayLoad.safeParse(updatePayLoad);

        await todo.update({
            _id: req.body.id,
        }, {
            isCompleted: true
        })
        res.json({
            msg: 'todo marked as done'
        })
    } catch (error) {
        res.status(411).json({
            msg: 'Invalid input'
        })
    }
})

app.listen(PORT, () => {
    console.log('Connected to server Sucuessfully');
})

    