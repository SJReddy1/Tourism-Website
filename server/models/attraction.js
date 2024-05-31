const { type } = require('jquery');
const mongoose = require('mongoose');

const AttractionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images:[{
        type: String,
        required: true
    }],
    description: [],
    booking_policy:[],
    information:[],
    advantage:[],
    reason:[],
    inclusions:[]

});

module.exports = mongoose.model('attractions', AttractionSchema);