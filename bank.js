class BankAccount {
    constructor(){
        this.balance = 0;
        this.transactions = [];
    }

    dateFormatter(date){
        const splitDate = date.split('-')

        const day = parseInt(splitDate[0], 10)
        const month = parseInt(splitDate[1], 10) - 1
        const year = parseInt(splitDate[2], 10) + 2000
        
        const dateObject = new Date(year, month, day)
        return dateObject.toLocaleDateString("en-GB")
    }

    deposit(value, date){
        this.balance += value;

        const formattedDate = this.dateFormatter(date)
        const formattedValue = value.toFixed(2)
        const formattedBalance = this.balance.toFixed(2)

        this.transactions.unshift({credit: formattedValue , debit: '', date: formattedDate, balance: formattedBalance})
    }

    withdraw(value, date){
        this.balance -= value;

        const formattedDate = this.dateFormatter(date)
        const formattedValue = value.toFixed(2).padStart(1).padEnd(1)
        const formattedBalance = this.balance.toFixed(2)

        this.transactions.unshift({credit:'' , debit: formattedValue, date: formattedDate , balance:formattedBalance})
    }

    display(){
        let result = 'date || credit || debit || balance';
        this.transactions.forEach(transaction => {
            result += `\n${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`
        });
        console.log(result)
        return result;
    }
}

module.exports = BankAccount;