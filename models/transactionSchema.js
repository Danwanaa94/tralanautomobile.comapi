const mongoose = require("mongoose");



const transactionSchema =new mongoose.Schema({

    time:{
        type:Date,
        default:Date.now()
   },

    ref:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    status:{
         type:String,
         require:true
    },

    party:{
               type:String,
               require:true
    },
    amount:{
           type:Number,
           require:true
    }
})

const Transaction = mongoose.model("transaction", transactionSchema);
module.exports = Transaction;