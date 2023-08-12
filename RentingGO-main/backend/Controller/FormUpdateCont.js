const db = require('../Database/Database');
const formSchema = require('../Model/FormModel');

const formUpdaCont = async (req, res) =>{
    try {
        const formId = req.params.id;
        await formSchema.findByIdAndUpdate(formId, {delivered: true})
        res.status(202).json({success: true})
    } catch (error) {
        console.log('error occured while updating the value ', error)
        res.status(500).json({success: false, msg: 'error occured in server while updating the value'});
    }
}

module.exports = formUpdaCont;