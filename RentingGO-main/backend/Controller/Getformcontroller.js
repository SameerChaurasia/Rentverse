const db = require('../Database/Database');
const FormModel = require('../Model/FormModel');

const getform = async (req, res)=>{
    try {
        const allform = await FormModel.find();
        res.status(200).json({...allform});
    } catch (error) {
        res.status(500).json({success: false});
        console.log('error occured while printing all the data ', error);
    }
}

module.exports = getform;