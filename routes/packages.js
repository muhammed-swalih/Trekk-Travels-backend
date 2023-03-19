import express from 'express'
import {
    deleteAd,
    deleteFamily,
    deleteHoliday,
    deleteHoneymoon,
    getAd,
    getFamily,
    getFamilyById,
    getHoliday,
    getHolidayById,
    getHoneymoon,
    getHoneymoonById,
    postAd,
    postFamily,
    postHoliday,
    postHoneyMoon
} from '../controllers.js'
import { deleteAlleppayResort, getAlleppeyResort, getAlleppeyResortById, postAlleppey } from '../resortController/alleppeyController.js';
import { deleteCalicutResort, getCalicutResort, getCalicutResortById, postCalicut } from '../resortController/calicutController.js';
import { deleteCoorgResort, getCoorgResort, getCoorgResortById, postCoorg } from '../resortController/coorgController.js';
import { deleteKannurResort, getKannurResort, getKannurResortById, postKannur } from '../resortController/kannurController.js';
import { deleteKasargodResort, getKasargodResort, getKasargodResortById, postKasargod } from '../resortController/kasargodContoller.js';
import { deleteKochiResort, getKochiResort, getKochiResortById, postKochi } from '../resortController/kochiController.js';
import { deleteKodaikkanalResort, getKodaikkanalResort, getKodaikkanalResortById, postKodaikkanal } from '../resortController/kodiakkanalController.js';
import { deleteKumarakomResort, getKumarakomResort, getKumarakomResortById, postKumarakom } from '../resortController/kumarakomController.js';
import { deleteMalappuramResort, getMalappuramResort, getMalappuramResortById, postMalappuram } from '../resortController/malappuramController.js';
import { deleteMunnarResort, getMunnarResort, getMunnarResortbyId, postMunnar } from '../resortController/munnarController.js';
import { deleteOotyResort, getOotyResort, getOotyResortById, postOoty } from '../resortController/ootyController.js';
import { deleteThekkadyResort, getThekkadyResort, getThekkadyResortById, postThekkady } from '../resortController/thekkadyController.js';
import { deleteThrissurResort, getThrissurResort, getThrissurResortById, postThrissur } from '../resortController/thrissurModel.js';
import { deleteTrivandrumResort, getTrivandrumResort, getTrivandrumResortById, postTrivandrum } from '../resortController/trivandrumController.js';
import { deleteVagamonResort, getVagamonResort, getVagamonResortbyId, postVagamon } from '../resortController/vagamonController.js';
import { deleteWayanadResort, getWayanadResort, getWayanadResortById, postWayanad } from '../resortController/wayanadController.js';

const router = express();


router.post('/honeymoonPackage', postHoneyMoon)

router.post('/familyPackage', postFamily)

router.post('/holidayPackage', postHoliday)

router.post('/ads', postAd)

router.get('/honeyMoon', getHoneymoon)

router.get('/family', getFamily)

router.get('/holiday', getHoliday)

router.get('/getAd', getAd)

router.get('/gethoneymoon/:id', getHoneymoonById)

router.get('/getfamily/:id', getFamilyById)

router.get('/getholiday/:id', getHolidayById)

router.delete('/honeymoonPackage/:id', deleteHoneymoon)

router.delete('/familyPackage/:id', deleteFamily)

router.delete('/holidayPackage/:id', deleteHoliday)

router.delete('/deleteAd/:id', deleteAd)

//------------------------------------------------------------------------------------------------------------------

// RESORT ROUTERS

//trivandrum resort

router.post('/trivandrumresort', postTrivandrum)

router.get('/trivandrum', getTrivandrumResort)

router.delete('/deletetrivandrumresort/:id', deleteTrivandrumResort)

router.get('/gettrivandrum/:id', getTrivandrumResortById)

//kumarakom resort 

router.post('/kumarakomresort', postKumarakom)

router.get('/kumarakom', getKumarakomResort)

router.delete('/deletekumarakomresort/:id', deleteKumarakomResort)

router.get('/getkumarakom/:id', getKumarakomResortById)

//alleppey resort

router.post('/alleppeyresort', postAlleppey)

router.get('/alleppey', getAlleppeyResort)

router.delete('/deletealleppeyresort/:id', deleteAlleppayResort)

router.get('/getalleppey/:id', getAlleppeyResortById)

//munnar resort

router.post('/munnarresort', postMunnar)

router.get('/munnar', getMunnarResort)

router.delete('/deletemunnarresort/:id', deleteMunnarResort)

router.get('/getmunnar/:id', getMunnarResortbyId)

//vagamon resort

router.post('/vagamonresort', postVagamon)

router.get('/vagamon', getVagamonResort)

router.delete('/deletevagamonresort/:id', deleteVagamonResort)

router.get('/getvagamon/:id', getVagamonResortbyId)

//thekkady resort

router.post('/thekkadyresort', postThekkady)

router.get('/thekkady', getThekkadyResort)

router.delete('/deletethekkadyresort/:id', deleteThekkadyResort)

router.get('/getthekkady/:id', getThekkadyResortById)

//kochi resort

router.post('/kochiresort', postKochi)

router.get('/kochi', getKochiResort)

router.delete('/deletekochiresort/:id', deleteKochiResort)

router.get('/getKochi/:id', getKochiResortById)

//wayanad resort

router.post('/wayanadresort', postWayanad)

router.get('/wayanad', getWayanadResort)

router.delete('/deletewayandresort/:id', deleteWayanadResort)

router.get('/getwayanad/:id', getWayanadResortById)

//calicut resort

router.post('/calicutresort', postCalicut)

router.get('/calicut', getCalicutResort)

router.delete('/deletecalicutresort/:id', deleteCalicutResort)

router.get('/getcalicut/:id', getCalicutResortById)

//thrissur resort 

router.post('/thrissurresort', postThrissur)

router.get('/thrissur', getThrissurResort)

router.delete('/deletethrissurresort/:id', deleteThrissurResort)

router.get('/getthrissur/:id', getThrissurResortById)

//malappuram resort

router.post('/malappuramresort', postMalappuram)

router.get('/malappuram', getMalappuramResort)

router.delete('/deletemalappuramresort/:id', deleteMalappuramResort)

router.get('/getmalappuram/:id', getMalappuramResortById)

//kannur resort

router.post('/kannurresort', postKannur)

router.get('/kannur', getKannurResort)

router.delete('/deletekannurresort/:id', deleteKannurResort)

router.get('/getkannur/:id', getKannurResortById)

//kasargod resort

router.post('/kasargodresort' , postKasargod)

router.get('/kasargod' , getKasargodResort)

router.delete('/deletekasargodresort/:id' , deleteKasargodResort)

router.get('/getkasargod/:id' , getKasargodResortById)

//coorg resort

router.post('/coorgresort'  , postCoorg)

router.get('/coorg' , getCoorgResort)

router.delete('/deletecoorgresort/:id', deleteCoorgResort)

router.get('/getcoorg/:id' , getCoorgResortById)

//kodaikkanal resort

router.post('/kodaikkanalresort' , postKodaikkanal)

router.get('/kodaikkanal' , getKodaikkanalResort)

router.delete('/deletekodaikkanalresort/:id' , deleteKodaikkanalResort)

router.get('/getkodaikkanal/:id' , getKodaikkanalResortById)

// ooty resort

router.post('/ootyresort' , postOoty)

router.get('/ooty' , getOotyResort)

router.delete('/deleteootyresort/:id' ,deleteOotyResort)

router.get('/getooty/:id' , getOotyResortById)

export default router