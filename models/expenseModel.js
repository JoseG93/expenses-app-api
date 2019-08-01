// expenseModel.js

var mongoose = require('mongoose');

// setup schema
var expenseSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: true
  }
});

// export expense model
var Expense = module.exports = mongoose.model('expense', expenseSchema);

module.exports.get = function (callback, limit) {
  Expense.find(callback).limit(limit);
}