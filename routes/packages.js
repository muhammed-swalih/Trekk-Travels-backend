import express from 'express'
import {
    deleteAd,
    deleteFamily,
    deleteHoliday,
    deleteHoneymoon,
    getAd,
    getFamily,
    getHoliday, 
    getHoneymoon, 
    postAd, 
    postFamily, 
    postHoliday, 
    postHoneyMoon} from '../controllers.js'

const router  = express(); 


router.post('/honeymoonPackage', postHoneyMoon)

router.post('/familyPackage' , postFamily)

router.post('/holidayPackage' , postHoliday)

router.post('/ads' , postAd)

router.get('/honeyMoon' , getHoneymoon)

router.get('/family' , getFamily)

router.get('/holiday' , getHoliday)

router.get('/getAd' , getAd)

router.delete('/honeymoonPackage/:id' ,deleteHoneymoon)

router.delete('/familyPackage/:id' , deleteFamily )

router.delete('/holidayPackage/:id' , deleteHoliday)

router.delete('/deleteAd' , deleteAd)

export default router