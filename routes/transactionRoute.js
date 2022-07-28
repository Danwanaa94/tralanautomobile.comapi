const { Router} = require("express");

const {createTransaction, getTransaction} = require("../controllers/transactionController")




const router = Router()

router.route("/").post( createTransaction).get( getTransaction)

module.exports=router