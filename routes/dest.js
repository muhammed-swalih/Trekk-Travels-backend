import express from 'express'
import Destination from '../models/Destination.js';

const router  = express();

router.post('/' , async(req,res)=>{

    const newDestination = new Destination({
        place : req.body.place,
        price : req.body.price,
        days : req.body.price
    })

    try {
        const savedDestination = await newDestination.save()
        res.status(200).json(savedDestination)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/' , async(req,res)=>{
    try {
        const getDestination = await Destination.find();
        res.status(200).json(getDestination)
    } catch (error) {
        res.status(200).json(error)
    }
})

router.delete('/:id' , async(req,res)=>{
    try {
        await Destination.findByIdAndDelete(req.params.id)
        res.status(200).json("Destianation has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})
export default router