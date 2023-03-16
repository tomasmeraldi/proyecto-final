import {Router} from 'express';

const productsRouter = Router();

router.get('/'), (req, res) => {
    //get products
}

router.get('/:id'), (req, res) => {
    //get productsbyid
}

export default productsRouter;