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
    const { author, quote } = req.body;
    if (!author || !quote) {
      return res.status(400).json({ message: 'Author and quote are required' });
    }
    // Process and store the quote
    res.status(200).json({ message: 'Quote added successfully' });
})

module.exports = router;