let jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);

app.get('/jwt', (req, res) => {
    let token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY);
    res.cookie("jwt", token, {
        httpOnly: true
    });
    res.send('토큰 발행 완료');
})

//GET 
app.get('/jwt/decoded', (req, res) => {
    let receivedJWT = req.headers["authorization"];
    let decoded = jwt.verify(receivedJWT, process.env.PRIVATE_KEY)
    res.send(decoded);
})
