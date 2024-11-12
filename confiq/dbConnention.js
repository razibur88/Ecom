const mongoose = require("mongoose")

function dbConnection (){
    mongoose.connect('mongodb+srv://razibMB:razibR123@cluster0.fgfso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));
}


module.exports = dbConnection;