import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import bookRoutes from './route/book.routes.js'
import userRoutes from './route/user.route.js'
import authRoutes from './route/auth.route.js';
import Template from './../template.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())



app.use('/api',bookRoutes);
app.use('/api', userRoutes)
app.use('/api', authRoutes)

app.get('/', (req, res) => {
    res.status(200).send(Template()) 
    })

export default app;