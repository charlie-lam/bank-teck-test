# Bank tech test

## Set up

1. Run npm install

2. run nvm use node

2. Use Jest in terminal to run tests

3.  Run node and import the bank account class using require to interact with the program. Once assigned and created 
    a new BankAccount, use the deposit or withdraw function with two variables:
    the value of the transaction as a number or float with 2 decimal places and the date in the format of the string 'dd-mm-yy'.
    The display function can also be used to show a formatted list of all your transactions with a running tally of the balance.

## Approach

1. A single class system was used as complexity was pretty low. Having the transactions and balance being updated 
a state was set in the constructor.

2. As it would be good to for reusability within multiple methods but potentially different date format outputs
 a date formatter function is used to create a date object off the passed date.

3. Both the deposit and withdrawal functions are very similar but used as a way so the user can input a number and date the same way rather than worry about negative signs. Both functions will affect the balance in state in different ways depending on the function then will format value, balance and by calling on the date formatter will pass all these 3 new strings to a transaction object which is added to the state array.

4. The display was desired in a certain format with header lables then multiple transactions below. The display was set up to sort the transactions by the date object rather than just add the transactions in reverse order. With some changes to the balance calculation this can then be used even if the transactions are added in non chronological order. Currently it does that but balance may not be correct in the display apart from the starting and final values. Then the transactions array was looped over calling on the object properties to create a string using template literals which is then added to the header string maing sure to have a \n at the beginning to get it on a new line. Finally it is returned and console logged. The return is there just for the convenience of use later if it were to be passed to something else.  
