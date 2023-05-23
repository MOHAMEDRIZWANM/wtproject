const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
  },
  accepteddate: {
    type: Date,
  },
  recieveddate: {
    type: Date,
  },
  deliverydate: {
    type: Date,
  },
  problemtype: {  
    type: String,

  },
  amount: {
    type: Number,
  },
});

const Info = mongoose.model('Info', infoSchema);

module.exports = Info;
