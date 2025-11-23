const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

const SECRET_Key = 'My_secret_key2123';

app.use(cors());
app.use(bodyParser.json());

const dummyUser = {
    username: 'testuser',
    password: 'Login@123'
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === dummyUser.username && password === dummyUser.password) {
        const token = jwt.sign(
            { username: dummyUser.username },
            SECRET_Key,
            { expiresIn: '1h' }
        );
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to JWT Login API. Use POST /login');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
