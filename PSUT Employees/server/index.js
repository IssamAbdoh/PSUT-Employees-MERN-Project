import express from 'express';
import bodyParser from 'body-Parser';
import mongoose from 'mongoose';
import cors from 'cors';
import CardRoutes from './routes/cards.js';

const app = express();

app.use(bodyParser.json({ limit: "40mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "40mb", extended: true }));
app.use(cors());

app.use('/cards', CardRoutes);
const CONNECTION_URL = 'mongodb+srv://samer_5033:Sa98479588@cluster0.mf6ob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    }) )

    .catch((error) => {
        console.log(error.message);
    });
