const db = require('../Database/Database');
const FormModel = require('../Model/FormModel');

const DeletFormCont = async (req, res)=>{
    try {
        const formId = req.params.id;
        await FormModel.findByIdAndDelete(formId);
        res.status(204).json({success: true, msg: 'deleted successfully'})
    } catch (error) {
        console.log('error occured while deleting', error);
        res.status(500).json({success: false, msg: 'error While deleting the form'});
    }
}

module.exports = DeletFormCont;