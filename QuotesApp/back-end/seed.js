const mongoose = require('mongoose')
const Quotes = require('./models/Quote')

let dummyQuotes = [
    {
        author: 'Vibhu',
        text: 'Honesty is the best policy!!'
    },
    {
        author: 'Kavi',
        text: 'I am always ready to learn!!'
    },
    {
        author: 'Pari',
        text: 'Success is not final, failure is not fatal: It is the courage to continue that counts!!'
    },
    {
        author: 'Ravi',
        text: 'Believe you can and you\'re halfway there!!'
    },
    {
        author: 'Raj',
        text: 'If you want to achieve greatness, don\'t stop questioning!!'
    }
]
function seedDB(){

}
module.exports = seedDB;