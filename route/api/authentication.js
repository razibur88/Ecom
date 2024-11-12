const express = require('express')
const UserList = require('../../modals/userSchema')
const registrationController = require('../../controller/registrationController')
const emailverificationController = require('../../controller/emailVerificationController')
const loginController = require('../../controller/longinController')
const router = express.Router()

router.post("/registration", registrationController)
router.post("/verification", emailverificationController)
router.post("/login", loginController)


module.exports = router