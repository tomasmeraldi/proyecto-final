import {Router} from 'express';

const cartsRouter = Router();

router.get('/'), (req, res) => {
    //get cart
}

router.get('/:id'), (req, res) => {
    //get cartbyid
}

export default cartsRouter;