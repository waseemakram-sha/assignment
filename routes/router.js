const {login, dashboard, g2test, gtest, saveUser, getUser} = require('../controllers/controller.js')

const express = require('express')

const router = express.Router()

router.get('/login',login)

router.get('/dashboard',dashboard)

router.get('/g2test',g2test)

router.get('/gtest',gtest)

router.post('/saveUser', saveUser)

router.post('/getUser',getUser)

module.exports = router