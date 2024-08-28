import asyncHandler from "express-async-handler"
import { CREATED, DELETED, RETRIEVED, UPDATE } from "../../constants/success_message.js";
import http from 'http'
import { create_user, delete_user, get_domain, get_gender, get_user, update_user } from "./service.js";


/*
    Async Function Controller to Create User.
*/
export const createUserApiController = asyncHandler(async (req, res) => {
    console.log("calling")
    const user = req.body

    console.log(req.body)
    try {
        const user_obj = await create_user(user)
        console.log(user_obj)
        return res.status(200).json({
            status_code: http.STATUS_CODES[200],
            message: CREATED("User"),
            data: user_obj,
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
    Async Function Controller to Get User.
*/
export const getUserApiController = asyncHandler(async (req, res) => {
    const {limit, search, gender, domain, page, pagination} = req.query
    console.log(req.query)
    try {
        const user = await get_user({limit, search, gender, domain, page, pagination})
        return res.status(200).json({
            status_code: http.STATUS_CODES[200],
            message: RETRIEVED("User"),
            data: user,
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
    Async Function Controller to Update User.
*/
export const updateUserApiController = asyncHandler(async (req, res) => {
    const id = req.params.id
    const user = req.body
    try {
        const updated_user = await update_user(id, user)
        return res.status(200).json({
            status_code: http.STATUS_CODES[200],
            message: UPDATE("User"),
            data: updated_user,
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
    Async Function Controller to delete User.
*/
export const deleteUserApiController = asyncHandler(async (req, res) => {

    const user_id = req.params.id
    try {
        const user_obj = await delete_user(user_id)
        return res.status(200).json({
            status_code: http.STATUS_CODES[200],
            message: DELETED("User"),
            data: user_obj,
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


export const userDomainApiController = asyncHandler(async (req, res) => {

    try {
        const domain = await get_domain()
        return res.status(200).json({
            status_code: http.STATUS_CODES[200],
            message: RETRIEVED("Domain"),
            data: domain,
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
export const userGenderApiController = asyncHandler(async (req, res) => {

    try {
        const gender = await get_gender()
        return res.status(200).json({
            status_code: http.STATUS_CODES[200],
            message: RETRIEVED("Gender"),
            data: gender,
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