import express from "express"
import { createTeamApiController, deleteTeamApiController, getTeamApiController, updateTeamApiController } from "./controller.js"

const router =  express.Router()

router.post('/createTeam', createTeamApiController)
router.get('/getTeam', getTeamApiController)
router.patch('/updateTeam/:id', updateTeamApiController)
router.delete('/deleteTeam/:id', deleteTeamApiController)


export default router