const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const db = require('./models')
require('dotenv').config()

const port = process.env.PORT || 3000

// Api Router
const userRoute = require('./routes/user')

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/backend/user', userRoute)

db.sequelize.sync()
    .then(() => app.listen(port, () => console.log(`Example app listening at http://localhost:${port} 👏`)))