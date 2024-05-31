const mongoose = require('mongoose');

const bookingVehicleSchema = new mongoose.Schema({
    vehicle:{
        type: Object,
        required: true
    },
        vehicle_id: {
            type: String,
            required: true
    },
    user_id: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    booking_date:{
        type: String,
        required: true
    },
    total_hours: {
        type: Number,
        required: true
    },
    rentperhr: {
        type: Number,
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    },
    bookingID:{
        type: String,
    },
    transaction_id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['booked', 'cancelled'],
        default: 'booked'
    },
 timestamp:{
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('bookingvehicles', bookingVehicleSchema);