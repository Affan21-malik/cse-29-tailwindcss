// SavingsAccount inherits BankAccount
public class SavingsAccount extends BankAccount {

    private double interestRate = 5.0;

    public SavingsAccount(String accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    public double calculateInterest() {
        return (getBalance() * interestRate) / 100;
    }

    @Override
    public void displayDetails() {
        super.displayDetails();
        System.out.println("Savings Account Interest: " + calculateInterest());
    }
}