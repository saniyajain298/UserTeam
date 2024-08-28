import express from "express"
import {createUserApiController, deleteUserApiController, getUserApiController, updateUserApiController, userDomainApiController, userGenderApiController } from "./controller.js"


const router =  express.Router()

router.post('/createUser', createUserApiController)
router.get('/getUserList', getUserApiController)
router.patch('/updateUser/:id', updateUserApiController)
router.delete('/deleteUser/:id', deleteUserApiController)
router.get('/getDomainList', userDomainApiController)
router.get('/getGenderList', userGenderApiController)

export default router