const express = require('express');
const { isEmpty } = require('lodash');
const Image = require('../models/image.js');
const router = express.Router();

router.post('/addPhoto', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { src, category, subcategory, width, height, description, rank, title} = req.body;    
    const newPhoto = new Image({src, category, subcategory, width, height, description, rank, title});    
    
    try {
        await newPhoto.save();
        res.json({
            message: 'Data successfully saved',
            statusCode: 200,
            src, category, subcategory, width, height, description, rank, title
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});

router.post('/api/updatePhoto', async (req, res) => {
    
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    
    const { id, update } = req.body;  
    
    try {        
        await Image.updateOne( { _id: id }, update, { upsert: true, new: true }, ( err ) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }    
    
});

router.post('/api/getImages', async (req, res) => {
    
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    
    const { category } = req.body;  
        
    try {
        const images = await Image.find({ category: category });
        return res.json({
            images
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
});

router.post('/api/searchImage', async (req, res) => {
    
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    
    const { src } = req.body;  
    
    try {
        const image = await Image.findOne({ src: src });
        return res.json({
            image
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
});

router.post('/api/getAllImages', async (req, res) => {
    
    // if (isEmpty(req.body)) {
    //     return res.status(403).json({
    //         message: 'Body should not be empty',
    //         statusCode: 403
    //     });
    // }
    
    //const { category } = req.body;  
        
    try {
        const images = await Image.find();
        return res.json({
            images
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
});

module.exports = router;