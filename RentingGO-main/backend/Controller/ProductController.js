const db = require('../Database/Database');
const productSchema = require('../Model/ProductModel');

const allProCont = async (req, res)=>{
    try {
        const allPro = await productSchema.find({});
        res.status(200).json({...allPro});
    } catch (error) {
        res.status(500).json({success: false});
        console.log('error occured while printing all the data ', error);
    }
}

module.exports = allProCont;