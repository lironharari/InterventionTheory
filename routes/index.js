const express = require('express');
const { isEmpty } = require('lodash');
const Image = require('../models/image.js');
const router = express.Router();

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


module.exports = router;