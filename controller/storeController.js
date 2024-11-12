const StoreSchema = require("../modals/storeSchema");
const UserList = require("../modals/userSchema");

async function storeController(req, res){
    let {storename, officialemail,officialphone,address,owner} =  req.body 
    
    const merchant = new StoreSchema({
        storename, 
        officialemail,
        officialphone,
        address,
        owner
    });
    merchant.save()

    await UserList.findByIdAndUpdate(
        { _id:owner},
        {role:"merchant"},
        {new:true}
    )
    res.json({success:"Congratulations Merchant Done"})

}
module.exports = storeController