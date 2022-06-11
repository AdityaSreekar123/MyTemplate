// IMPORT MODULE 
const express = require("express");
const { Module } = require("module");
const router = express.Router();
const path = require('path');

// ROUTES 
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../templates/index.html"));
})

router.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, "../templates/about.html"));
})

router.get('/templates', (req, res)=>{
    res.sendFile(path.join(__dirname, "../templates/templates.html"));
})

router.get('/recommended', (req, res)=>{
    res.sendFile(path.join(__dirname, "../templates/recommended.html"))
})

router.get('/start', (req, res)=>{
    res.sendFile(path.join(__dirname, "../templates/start.html"))
})

router.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, "../templates/pageNotFound.html"))
})

// MODULE.EXPORTS 
module.exports = router