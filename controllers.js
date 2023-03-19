import multer from 'multer';
import sharp from 'sharp'
import path from 'path'
import familyModel from './models/familyModel.js';
import holidayModel from './models/holidayModel.js';
import honeyMoonModel from './models/honeyMoonModel.js';
import adsModel from './models/adsModel.js';
import trivandrumModel from './models/Resort-Models/trivandrumModel.js';


const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: Storage
}).single('testImage')

export const postHoneyMoon = ((req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
        } else {
            const image = sharp(req.file.path)
                .resize(800)
                .jpeg({ quality: 20 });

            const compressedImageBuffer = await image.toBuffer();
            const honeyMoon = new honeyMoonModel({
                place: req.body.place,
                price: req.body.price,
                days: req.body.days,
                description : req.body.description,
                highlight1 : req.body.highlights1,
                highlight2 : req.body.highlights2,
                highlight3 : req.body.highlights3,
                highlight4 : req.body.highlights4,
                highlight5 : req.body.highlights5,
                highlight6 : req.body.highlights6,
                image: {
                    data: compressedImageBuffer,
                    contentType: 'image/jpeg || image/png'
                }
            })

            try {
                const savedHoneyMoon = await honeyMoon.save()
                res.status(200).json('successfully added')
            } catch (error) {
                res.status(500).json('The image file must be jpeg or png file . And choose medium or low quality image')
            }
        }
    })
})

export const postFamily = ((req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
        } else {
            const image = sharp(req.file.path)
                .resize(800)
                .jpeg({ quality: 20 });

            const compressedImageBuffer = await image.toBuffer();
            const family = new familyModel({
                place: req.body.place,
                price: req.body.price,
                days: req.body.days,
                description : req.body.description,
                highlight1 : req.body.highlights1,
                highlight2 : req.body.highlights2,
                highlight3 : req.body.highlights3,
                highlight4 : req.body.highlights4,
                highlight5 : req.body.highlights5,
                highlight6 : req.body.highlights6,
                image: {
                    data: compressedImageBuffer,
                    contentType: 'image/jpeg || image/png'
                }
            })

            try {
                const savedFamily = await family.save()
                res.status(200).json('successfully added')
            } catch (error) {
                res.status(500).json('The image file must be jpeg or png file . And choose medium or low quality image')
            }
        }
    })
})

export const postHoliday = ((req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
        } else {
            const image = sharp(req.file.path)
                .resize(800)
                .jpeg({ quality: 20 });

            const compressedImageBuffer = await image.toBuffer();
            const holiday = new holidayModel({
                place: req.body.place,
                price: req.body.price,
                days: req.body.days,
                description : req.body.description,
                highlight1 : req.body.highlights1,
                highlight2 : req.body.highlights2,
                highlight3 : req.body.highlights3,
                highlight4 : req.body.highlights4,
                highlight5 : req.body.highlights5,
                highlight6 : req.body.highlights6,
                image: {
                    data: compressedImageBuffer,
                    contentType: 'image/jpeg || image/png'
                }
            })

            try {
                const savedHoliday = await holiday.save()
                res.status(200).json('successfully added')
            } catch (error) {
                res.status(500).json('The image file must be jpeg or png file . And choose medium or low quality image')
            }
        }
    })
})



export const getHoneymoon = (async (req, res) => {
    try {
        const getHoneymoon = await honeyMoonModel.find();
        res.status(200).json(getHoneymoon)
    } catch (error) {
        res.status(200).json(error)
    }
})

export const getFamily = (async (req, res) => {
    try {
        const getfamily = await familyModel.find();
        res.status(200).json(getfamily)
    } catch (error) {
        res.status(200).json(error)
    }
})

export const getHoliday = (async (req, res) => {
    try {
        const getHoliday = await holidayModel.find();
        res.status(200).json(getHoliday)
    } catch (error) {
        res.status(200).json(error)
    }
})

export const deleteHoneymoon = (async (req, res) => {
    try {
        await honeyMoonModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Destianation has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

export const deleteFamily = (async (req, res) => {
    try {
        await familyModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Destianation has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

export const deleteHoliday = (async (req, res) => {
    try {
        await holidayModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Destianation has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

export const postAd = (async (req,res)=> {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
        } else {
            const image = sharp(req.file.path)
                .resize(800)
                .jpeg({ quality: 80 });

            const compressedImageBuffer = await image.toBuffer();
            const newAd = new adsModel({
                image: {
                    data: compressedImageBuffer,
                    contentType: 'image/jpeg || image/png'
                }
            })
            try {
                const savedAd = await newAd.save()
                res.status(200).json('successfully added')
            } catch (error) {
                res.status(500).json('The image file must be jpeg or png file . And choose medium or low quality image')
            }
        }
    })
})

export const getAd = (async (req,res)=>{
    try {
        const getAd = await adsModel.find();
        res.status(200).json(getAd)
    } catch (error) {
        res.status(200).json(error)
    }
})

export const deleteAd = (async (req,res) => {
    try {
        await adsModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Destianation has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

export const getHoneymoonById = (async(req,res)=>{
    try {
        const honeypackage = await honeyMoonModel.findById(req.params.id)
        
        res.status(200).json(honeypackage)
    } catch (error) {
        res.status(500).json(error)        
    }
})
export const getFamilyById = (async(req,res)=>{
    try {
        const familypackage = await familyModel.findById(req.params.id)
        
        res.status(200).json(familypackage)
    } catch (error) {
        res.status(500).json(error)        
    }
})
export const getHolidayById = (async(req,res)=>{
    try {
        const holidaypackage = await holidayModel.findById(req.params.id)
        res.status(200).json(holidaypackage)
    } catch (error) {
        res.status(500).json(error)        
    }
})



//posting resorts

