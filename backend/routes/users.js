import { Router } from 'express';
import Users from '../models/users.js';

const router = new Router(); 

//GET - get all users
router.get('/', async (req, res) => {
    try {
        const users = await Users.find({})
        res.status(200).json(users)
    } catch(e){
        console.log(e.message);
    }
})

//POST - Create a User/Register User
router.post('/register', async (req, res) => {
    try {
        const user = await Users.create(req.body)
        res.status(201).json(user)
    } catch (e) {
        console.log(e.message);
    }
})



export default router;