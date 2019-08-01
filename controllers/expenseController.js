// expenseController.js

// import expense model
Expense = require('../models/expenseModel');

// handle index actions
exports.index = function (req, res) {
  Expense.get(function (err, expenses) {
    console.log(expenses);
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'Expenses retrieved sucessfully...',
      data: expenses
    });
  });
};

// handle create expense actions
exports.new = function (req, res) {
  var expense = new Expense();
  expense.description = req.body.description;
  expense.date = req.body.date;
  expense.amount = req.body.amount;

  // save the expense and check for errors
  expense.save(function (err) {
    // if (err)
    //  res.json(err);
    res.json({
      message: 'New expense created...',
      data: expense
    });
  });
};

// handle view expense info
exports.view = function (req, res) {
  Expense.findById(req.params.expense_id, function (err, expense) {
    if (err)
      res.send(err);
    res.json({
      message: 'Expense details loading...',
      data: expense
    });
  });
};

// handle update expense info
exports.update = function (req, res) {
  Expense.findById(req.params.expense_id, function (err, expense) {
    if (err)
      res.send(err);
    expense.description = req.body.description;
    expense.date = req.body.date;
    expense.amount = req.body.amount;
    
    // save the expense and check for errors
    expense.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Expense info updated...',
        data: expense
      });
    });
  });
};

// handle delete contact
exports.delete = function (req, res) {
  Expense.remove({
    _id: req.params.expense_id
  }, function(err, expense) {
    if (err)
      res.send(err);
    res.json({
      status: 'success',
      message: 'Expense deleted...'
    });
  });
};

