require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const GroupController = require('./controllers/GroupController');
const UserController = require('./controllers/UserController');
const MessageController = require('./controllers/MessageController');

const app = express();
const server = app.listen(process.env.PORT, () => console.log('Servidor ligado!'));;
const io = require('socket.io').listen(server);

const users = [];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

io.on('connection', async socket => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.on('sendMessage', async messageObject => {
        try {
            await MessageController.add(messageObject);
            socket.broadcast.emit('receiveMessage', messageObject);
        } catch (error) {
            console.log(error);
        }
    });

    socket.on('newGroup', () => {
        socket.broadcast.emit('loadGroups');
    });

    socket.on('chooseGroup', async (group) => {
        try {
            const messages = await MessageController.load(group);
            messages.sort((a, b) => a.timestamp - b.timestamp);
            socket.emit('changeGroup', messages);
        } catch (error) {
            console.log(error);
        }
    });
});


// Group

app.post('/createGroup', async (req, res) => {
    try {
        const jsonFind = await GroupController.searchName(req.body);
        if (jsonFind) {
            return res.status(200).json('Grupo existente.');
        } else {
            const jsonCreate = await GroupController.add(req.body);
            return res.status(200).json(jsonCreate);
        }
    } catch (err) {
        return res.json(err);
    }
})

app.post('/groupList', async (req, res) => {
    try {
        const json = await GroupController.list();
        return res.json(json);
    } catch (err) {
        return res.json(err);
    }
})


// User

app.post('/createUser', async (req, res) => {
    try {
        const json = await UserController.add(req.body);
        return res.json(json);
    } catch (err) {
        return res.json(err)
    }
});

app.post('/login', async (req, res) => {
    try {
        const json = await UserController.login(req.body);
        return res.json(json);
    } catch (err) {
        return res.json(err);
    }
});


// Message

app.post('/loadMessages', async (req, res) => {
    try {
        const messages = await MessageController.load(req.body);
        return res.json(messages);
    } catch (error) {
        return res.json(err);
    }
});