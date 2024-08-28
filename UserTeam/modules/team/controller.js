import asyncHandler from "express-async-handler"
import { CREATED, DELETED, RETRIEVED, UPDATE } from "../../constants/success_message.js";
import http from 'http'
import { create_team, get_team } from "./service.js";


/*
    Async Function Controller to Create Team.
*/
export const createTeamApiController = asyncHandler(async (req, res) => {

    const team = req.body

    console.log(req.body)
    try {
        const team_obj = await create_team(team)

        return res.status(200).json({
            status_code: http.STATUS_CODES[200],
            message: CREATED("Team"),
            data: team_obj,
            error: false
        });
    }
    catch (error) {
        return res.status(500).json({
            status_code: http.STATUS_CODES[500],
            message: error.message,
            data: null,
            error: true
        });
    }
})


/*
    Async Function Controller to Get Team.
*/
export const getTeamApiController = asyncHandler(async (req, res) => {

    try {
        const team = await get_team()
        return res.status(200).json({
            status_code: http.STATUS_CODES[200],
            message: RETRIEVED("Team"),
            data: team,
            error: false
        });
    }
    catch (error) {
        return res.status(500).json({
            status_code: http.STATUS_CODES[500],
            message: error.message,
            data: null,
            error: true
        });
    }
})


/*
    Async Function Controller to Update Team.
*/
export const updateTeamApiController = asyncHandler(async (req, res) => {
    const id = req.params.id
    const team = req.body
    try {
        const updated_team = await update_team(id, team)
        return res.status(200).json({
            status_code: http.STATUS_CODES[200],
            message: UPDATE("Team"),
            data: updated_team,
            error: false
        });
    }
    catch (error) {
        return res.status(500).json({
            status_code: http.STATUS_CODES[500],
            message: error.message,
            data: null,
            error: true
        });
    }
})


/*
    Async Function Controller to delete Team.
*/
export const deleteTeamApiController = asyncHandler(async (req, res) => {

    const team_id = req.params.id
    try {
        const team_obj = await delete_team(team_id)
        return res.status(200).json({
            status_code: http.STATUS_CODES[200],
            message: DELETED("Team"),
            data: team_obj,
            error: false
        });
    }
    catch (error) {
        return res.status(500).json({
            status_code: http.STATUS_CODES[500],
            message: error.message,
            data: null,
            error: true
        });
    }
})