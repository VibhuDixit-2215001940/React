const router = require('express').Router()
const Quotes = require('../models/Quote')

router.get('/allquotes',async (req, res)=>{
    try{
        let allQuotes = await Quotes.find();
        res.status(200).json(allQuotes);
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
})

router.post('/addquotes',async (req, res)=>{
    const quote = new Quotes({
        quoteText: req.body.quoteText,
        author: req.body.author
    })
    try{
        await quote.save();
        res.status(201).json(quote);
    }
    catch(e){
        res.status(400).json({message: e.message})
    }
})

module.exports = router;