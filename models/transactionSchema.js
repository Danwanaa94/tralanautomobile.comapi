const mongoose = require("mongoose");


const transactionSchema = new Schema(
    {
      date: {
        type: String,
        required: true,
      },
      userIdentiyCard: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      actions: [
        {
          ref: {
            type: String,
            required: true,
          },
          Type: {
            type: String,
            required: true,
            enumerate: ["Debit", "Credit", "Reversal"],
          },
          status: {
            type: String,
            required: true,
            enumerate: ["Success","Failed", "Pending", ],
          },
          party: {
            type: String,
            required: true,
          },
          amount: {
            type: Number,
            required: true,
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  );
  

const Transaction = mongoose.model("transaction", transactionSchema);
module.exports = Transaction;