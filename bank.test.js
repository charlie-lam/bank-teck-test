const Bank = require('./bank')

describe('Bank Class', ()=> {
    
    it('Should initialize transactions as an empty array and 0 balance', () => {
        const bank = new Bank();
        expect(bank.transactions).toEqual([]);
        expect(bank.balance).toEqual(0);
    });

    it('Should return a balance of 1000 after depositing one time with 1000', () => {
        const bank = new Bank();
        bank.deposit(1000, '10-01-23');
        expect(bank.transactions).toEqual([{credit: '1000.00', debit: '', date: '10/01/2023', balance: '1000.00'}]);
        expect(bank.balance).toEqual(1000);
    });

    it('Should return a balance of 3000 after depositing 1000 and 2000 each', () => {
        const bank = new Bank();
        bank.deposit(1000.00, '10-01-23');
        bank.deposit(2000.00, '13-01-23');
        expect(bank.transactions).toEqual([
            {credit: '2000.00', debit:'', date: '13/01/2023', balance: '3000.00'},
            {credit: '1000.00', debit: '', date: '10/01/2023', balance: '1000.00'}]);
        expect(bank.balance).toEqual(3000);
    });

    it('Should return a balance of 0 after depositing one time with 50 and then withdrawing 50', () => {
        const bank = new Bank();
        bank.deposit(1000, '10-01-23');
        bank.deposit(2000, '13-01-23');
        bank.withdraw(500, '14-01-23');
        expect(bank.transactions).toEqual([
            {credit: '', debit:'500.00', date: '14/01/2023', balance: '2500.00'},
            {credit: '2000.00', debit:'', date: '13/01/2023', balance: '3000.00'}, 
            {credit: '1000.00', debit: '', date: '10/01/2023', balance: '1000.00'}
        ]);
        expect(bank.balance).toEqual(2500.00);
    });

    it('Should return a balance of 0 after depositing one time with 50 and then withdrawing 50', () => {
        const bank = new Bank();
        bank.deposit(1000, '10-01-23');
        bank.deposit(2000, '13-01-23');
        bank.withdraw(500, '14-01-23');
        expect(bank.display()).toEqual(`date || credit || debit || balance
14/01/2023 ||  || 500.00 || 2500.00
13/01/2023 || 2000.00 ||  || 3000.00
10/01/2023 || 1000.00 ||  || 1000.00`);
    });
});