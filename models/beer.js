// Load required packages
var mongoose = require('mongoose');

const options = {
    toJSON: {
        transform: (doc, obj) => {
            delete obj.__v;
            delete obj.id;
            return obj;
        }
    },
    timestamps: false
}
// Define our beer schema
var BeerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: String,
    quantity: Number
}, options);

// Export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);