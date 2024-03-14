document.getElementById('expense-form').addEventListener('submit', function(e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Get the expense name and amount from the input fields
    var expenseName = document.getElementById('expense-name').value;
    var expenseAmount = document.getElementById('expense-amount').value;

    // Create a new list item for the expense
    var newExpenseItem = document.createElement('li');
    newExpenseItem.textContent = expenseName + ' - $' + expenseAmount;

    // Add the new expense to the list
    document.getElementById('list').appendChild(newExpenseItem);

    // Clear the input fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
});

