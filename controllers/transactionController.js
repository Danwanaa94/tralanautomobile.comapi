const Transaction =require ("../models/transactionSchema" )
const { Types } = require("mongoose");
const {nanoid} = require("nanoid")
const newDate = require("newDate");

//create a transaction
const createTransaction = async (req, res) => {
    const { body, userIdentityCard } = req;
    const date = newDate();
    const ref = nanoid(6);
  
    const transaction = await
     Transaction.findOne({ date });
    const newTransaction = {
      ref,
      transactionType: body.transactionType,
      status: body.status,
      party: body.party,
      amount: body.amount,
    };
  
    if (transaction) {
      transaction.actions.push(newTransaction);
      await transaction.save();
    } else {
      transaction = Transaction.create({
        date,
        userIdentityCard,
        actions: [newTransaction],
      });
    }
  
    return res.status(201).json(transaction);
  };
 //get all transactions
 const getAllTransaction =async(req, res)=>{
    const {userIdentityCard}=req;
    userIdentityCard = Types.ObjectId(userIdentityCard);
     const transactions = await Transaction.find({userIdentityCard});
     res.status(200).json(transactions)
 }



module.exports={createTransaction, getAllTransaction}