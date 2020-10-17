const mongoose = require('mongoose')


// Create Schema
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Export Schema
module.exports = Item = mongoose.model('item', ItemSchema)
