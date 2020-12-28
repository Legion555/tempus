const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
	details: {
        type: String
    },
	price: {
        type: String
    },
	dateAdded: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('Product', productSchema)