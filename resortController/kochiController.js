import multer from 'multer';
import sharp from 'sharp'
import Path from 'path'
import kochiModel from '../models/Resort-Models/kochi.js'
const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: Storage
}).single('testImage')




export const postKochi = ((req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
        } else {
            const image = sharp(req.file.path)
                .resize(800)
                .jpeg({ quality: 30 });

            const compressedImageBuffer = await image.toBuffer();
            const resort = new kochiModel({
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

export const getKochiResort = (async (req, res) => {
    try {
        const resorts = await kochiModel.find();
        res.status(200).json(resorts)
    } catch (error) {
        res.status(200).json(error)
    }
})

export const deleteKochiResort = (async (req, res) => {
    try {
        await kochiModel.findByIdAndDelete(req.params.id)
        res.status(200).json("resort has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

export const getKochiResortById = (async(req,res)=>{
    try {
        const resort = await kochiModel.findById(req.params.id)
        res.status(200).json(resort)
    } catch (error) {
        res.status(500).json(error)        
    }
})

