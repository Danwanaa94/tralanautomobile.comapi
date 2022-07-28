const Transaction =require ("../models/transactionSchema" )


//create a transaction
const createTransaction = (req, res)=>{
    const newTransaction = new Transaction(
        {
            ref:req.body.ref,
            type:req.body.type,
            status:req.body.status,
            party:req.body.party,
            amount:req.body.amount
        }
    )
     newTransaction.save()
     res.status(200).json(newTransaction)
}
 //get all transactions
 const getTransaction =async(req, res)=>{
     const transactions = await Transaction.find();
     res.status(200).json(transactions)
 }



module.exports={createTransaction, getTransaction}