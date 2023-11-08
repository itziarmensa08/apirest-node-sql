import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { dbConnectMySQL } from './config/mysql';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Tu app está lista en http://localhost:${PORT}`)
});

dbConnectMySQL();