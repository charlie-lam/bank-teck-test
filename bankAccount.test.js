const BankAccount = require('./bankAccount')

describe('bankAccount Class', ()=> {
    let bankAccount;

    beforeEach(() => {
        bankAccount = new BankAccount();
    });
    
    it('Should initialize transactions as an empty array and 0 balance', () => {
        expect(bankAccount.transactions).toEqual([]);
        expect(bankAccount.balance).toEqual(0);
    });

    it('Should return a balance of 1000 after depositing one time with 1000', () => {
        bankAccount.deposit(1000, '10-01-23');
        expect(bankAccount.transactions).toEqual([{credit: '1000.00', debit: '', date: new Date('2023-01-10T00:00:00.000Z'), balance: '1000.00'}]);
        expect(bankAccount.balance).toEqual(1000);
    });

    it('Should return a balance of 3000 after depositing 1000 and 2000 each', () => {
        bankAccount.deposit(1000.00, '10-01-23');
        bankAccount.deposit(2000.00, '13-01-23');
        expect(bankAccount.transactions).toEqual([
            {credit: '2000.00', debit:'', date: new Date('2023-01-13T00:00:00.000Z'), balance: '3000.00'},
            {credit: '1000.00', debit: '', date: new Date('2023-01-10T00:00:00.000Z'), balance: '1000.00'}]);
        expect(bankAccount.balance).toEqual(3000);
    });

    it('Should return a balance of 0 after depositing one time with 50 and then withdrawing 50', () => {
        bankAccount.deposit(1000, '10-01-23');
        bankAccount.deposit(2000, '13-01-23');
        bankAccount.withdraw(500, '14-01-23');
        expect(bankAccount.transactions).toEqual([
            {credit: '', debit:'500.00', date: new Date('2023-01-14T00:00:00.000Z'), balance: '2500.00'},
            {credit: '2000.00', debit:'', date: new Date('2023-01-13T00:00:00.000Z'), balance: '3000.00'}, 
            {credit: '1000.00', debit: '', date: new Date('2023-01-10T00:00:00.000Z'), balance: '1000.00'}
        ]);
        expect(bankAccount.balance).toEqual(2500.00);
    });

    it('Should return and console log the transactions in a formatted display', () => {
        bankAccount.deposit(1000, '10-01-23');
        bankAccount.deposit(2000, '13-01-23');
        bankAccount.withdraw(500, '14-01-23');
        expect(bankAccount.display()).toEqual(`date || credit || debit || balance
14/01/2023 ||  || 500.00 || 2500.00
13/01/2023 || 2000.00 ||  || 3000.00
10/01/2023 || 1000.00 ||  || 1000.00`);
    });
});