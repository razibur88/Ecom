const express = require('express')
const storeController = require('../../controller/storeController')
const router = express.Router()

router.post("/becomemerchant", storeController)



module.exports = router