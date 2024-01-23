import { Router } from "express";
import Comedians from '../models/comedian.js'

const router = new Router(); 

//POST - Create a Comedian Profile
router.post('/create', async (req, res) => {
    try {
        const comedian = await Comedians.create(req.body);
        res.status(201).json(comedian)

    } catch (e){
        console.log(e.message);
    }
})

//GET - GET ALL COMEDIANS
router.get('/', async (req, res) => {
    try {
        const comedians = await Comedians.find({});
        res.status(200).json(comedians)
    } catch (e){
        console.log(e.message);
    }
})

//GET - GET USER BY ID
router.get('/:id', async (req, res) => {
    try {
       const comedian_id = await Comedians.find(req.params.id);
        res.status(200).json(comedian_id)
    } catch(e){
        console.log(e.message);
    }
})

//GET - GET USER BY NAME
router.get('/name/:id', async (req, res) => {
    try {
        const name = await Comedians.findOne({"name": req.params.id});
        if(!name) res.status(404).send("Comedian Not Found");
        else res.status(200).json(name);
    } catch (e){
        console.log(e);
    }
})




export default router;