import { Router } from 'express';
import Users from '../models/users.js';
import Profiles from '../models/profiles.js';


const router = new Router(); 

//POST - Create a User/Register User
router.post('/register', async (req, res) => {
    try {
        const user = await Users.create(req.body);
        await Profiles.create({user_id: user.id});
        res.status(201).json(user)
    } catch (e) {
        console.log(e.message);
    }
})

//GET - GET ALL USERS
router.get('/', async (req, res) => {
    try {
        const users = await Users.find({})
        res.status(200).json(users)
    } catch(e){
        console.log(e.message);
    }
})

//GET - GET USER BY ID
router.get('/:id', async (req, res) => {
    try {
       const user_id = await Users.find(req.params.id);
        res.status(200).json(user_id)
    } catch(e){
        console.log(e.message);
    }
})

//GET - GET USER BY USERNAME
router.get('/username/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        console.log({"username": req.params.id});
        const username = await Users.findOne({"username": req.params.id});
        if(!username) res.status(404).send("Username Not Found");
        else res.status(200).json(username);
    } catch (e){
        console.log(e);
    }
})


//PUT - UPDATE A USER BY ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req.params;
        const updateUser = await Users.findByIdAndUpdate(id, body, {new: true});
        res.status(201).json({updateUser})

    } catch (e) {
        console.log(e.message);
    }
})

//DELETE - DELETE USER BY ID
router.delete('/:id', async (req, res) => {
    try{ 
        const { id } = req.params;
        const deletedUser = await Users.findByIdAndDelete(id);
        res.json({msg: `User ${deletedUser.email} was Deleted`})
    } catch (e){
        console.log(e.message);
    }
})











export default router;