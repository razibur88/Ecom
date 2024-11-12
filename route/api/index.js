const express = require('express')
const router = express.Router()

const authentication = require("./authentication")
const category = require("./category")
const marchant = require("./merchant")

router.use("/authentication", authentication)
router.use("/category", category)
router.use("/marchant", marchant)


module.exports = router