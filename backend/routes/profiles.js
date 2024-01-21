import { Router } from "express";
import Profiles from "../models/profiles.js";

const router = new Router();

//GET - GET ALL PROFILES
router.get('/', async (req, res) => {
    try{ 
        const profiles = await Profiles.find({}).populate({path: "user_id"});
        res.status(200).send(profiles)
    } catch (e){
        console.log(e.message);
    }
})

//GET PROFILE BY ID
router.get('/:id', async (req, res) => {
    try {
        const profileId = await Profiles.find(req.params.id).populate({path: "user_id"});
        res.status(200).json(profileId)
    } catch (e){
        console.log(e.message);
    }
})



export default router;