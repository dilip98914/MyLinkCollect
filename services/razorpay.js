const Transaction = require('../models/transaction')

const instance = new Razorpay({
  key_id: process.env.razorpay_key_id,
  key_secret: process.env.razorpay_key_secret
});

const DEFAULT_CURRENCY = 'INR'
const DEFAULT_MEDIUM = 'razorpay'

const fetchPaymentById = async (id) => {
  try {
    const payment = await instance.payments.fetch(paymentId)
    //maybe some data manipulation
    return payment;
  } catch (err) {
    console.error("razoooooooooooooooooo")
    return {
      error: true,
      meta: err.response.data
    }
  }
}

const fetchPayments = async (from, to) => {
  try {
    return await instance.payments.all({
      from, to
    })
  } catch (err) {
    console.error("razoooooooooooooooooo")
    return {
      error: true,
      meta: err.response.data
    }
  }
}


const createPayment = async (amount, txn_type, modeType) => {
  try {
    const txn = await Transaction.create({
      type: txn_type,
      status: 'INITIATED',
      amount,
      modeType,
      medium: DEFAULT_MEDIUM,
      currency: DEFAULT_CURRENCY
    })

    const options = {
      amount,  //todo: amount in the smallest currency unit (i,e paise)
      currency: txn.currency,
      receipt: txn.id
    };

    await instance.orders.create(options);
    return txn
  } catch (err) {
    console.error("razoooooooooooooooooo")
    return {
      error: true,
      meta: err.response.data
    }
  }
}
