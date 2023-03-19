import multer from 'multer';
import sharp from 'sharp'
import Path from 'path'
import thekkadyModel from '../models/Resort-Models/thekkadyModel.js'
const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: Storage
}).single('testImage')




export const postThekkady = ((req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
        } else {
            const image = sharp(req.file.path)
                .resize(800)
                .jpeg({ quality: 30 });

            const compressedImageBuffer = await image.toBuffer();
            const resort = new thekkadyModel({
                place: req.body.place,
                price: req.body.price,
                days: req.body.days,
                description : req.body.description,
                image: {
                    data: compressedImageBuffer,
                    contentType: 'image/jpeg || image/png'
                }
            })

            try {
                const savedResort = await resort.save()
                res.status(200).json("added")
            } catch (error) {
                res.status(500).json('The image file must be jpeg or png file . And choose medium or low quality image')
            }
        }
    })
})

export const getThekkadyResort = (async (req, res) => {
    try {
        const resorts = await thekkadyModel.find();
        res.status(200).json(resorts)
    } catch (error) {
        res.status(200).json(error)
    }
})

export const deleteThekkadyResort = (async (req, res) => {
    try {
        await thekkadyModel.findByIdAndDelete(req.params.id)
        res.status(200).json("resort has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

export const getThekkadyResortById = (async(req,res)=>{
    try {
        const resort = await thekkadyModel.findById(req.params.id)
        res.status(200).json(resort)
    } catch (error) {
        res.status(500).json(error)        
    }
})

