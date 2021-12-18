const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(fileUpload());


const useRoutes = require('./routes/routes');
useRoutes(app)


const PORT = process.env.PORT || 8000
mongoose.connect('mongodb+srv://hasib:hrhasib11@cluster0.w1b5o.mongodb.net/charit-able', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is connected at http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.log(error);
    })
