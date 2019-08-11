const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//creare geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

//create tool Schema & model
const ToolSchema = new Schema({
    name: {
        type: String,
        required: [true,"Name field is required"]
    },
    price: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Tool = mongoose.model('tool',ToolSchema);

module.exports = Tool;