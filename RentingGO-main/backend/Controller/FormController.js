const db = require('../Database/Database');
const FormModel = require('../Model/FormModel');
const { body, validationResult } = require('express-validator');

const validateForm = [
    body('phoneNo').notEmpty().withMessage('Phone number is required').isLength({min: 10}).withMessage('Enter a valid number!'),
];

const formCont = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const form = new FormModel({
            day: req.body.day,
            amount: req.body.amount,
            phoneNo: req.body.phoneNo,
            proname: req.body.proname
        })

        await form.save();
        res.status(200).json({ success: true });
    } catch (err) {
        console.log('error occured while uploading the form', err);
        res.status(500).json({ success: false });
    }
}

module.exports = {validateForm, formCont};