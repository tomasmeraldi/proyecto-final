import express from 'express';
import cartsRouter from './routes/carts.router';
import productsRouter from './routes/products.router';

const app = express();
const server = app.listen(8080, () => console.log("Listening on 8080"));
