// FileName: api-routes.js

// initialize express router
let router = require('express').Router();

// set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API its working...',
    message: 'ExpensesApp API'
  });
});

// import expense controller
var expenseController = require('../controllers/expenseController');

// expense routes
router.route('/expenses')
  .get(expenseController.index)
  .post(expenseController.new);

router.route('/expenses/:expense_id')
  .get(expenseController.view)
  .patch(expenseController.update)
  .put(expenseController.update)
  .delete(expenseController.delete);

// export API routes
module.exports = router;