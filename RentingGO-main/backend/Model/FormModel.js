const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    submitDate: {type: Date, required: true, default: Date.now},
    day: {type: String, required: true},
    amount: {type: String, required: true},
    phoneNo: {type: String, required: true},
    proname: {type: String, required: true},
    delivered: {type: Boolean, required: true, default: false}
});

const orderform = mongoose.model('orderform', formSchema);

module.exports = orderform;