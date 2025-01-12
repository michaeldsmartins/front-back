import express from 'express';
import { IndexController } from './controllers/index';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexController = new IndexController();

app.get('/', indexController.home);
app.get('/api/data', indexController.getData);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});