const mongoose=require('mongoose')
global.ObjectId = mongoose.Types.ObjectId
const config = require('./config/key');

class Database{
    constructor(){
        this.connect()
    }

    connect(){
        mongoose.connect(config.mongoURI, { useNewUrlParser: true }).then(() => {
            console.log('DB connected!');
          }).catch(err => console.log(err));
          
    }
}

module.exports=new Database()