const { Router} = require("express");

const {createTransaction, getAllTransaction} = require("../controllers/transactionController")




const router = Router()

router.route("/").post( createTransaction).get( getAllTransaction)

module.exports=router