// CurrentAccount inherits BankAccount
public class CurrentAccount extends BankAccount {

    private double interestRate = 2.0;

    public CurrentAccount(String accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    public double calculateInterest() {
        return (getBalance() * interestRate) / 100;
    }

    @Override
    public void displayDetails() {
        super.displayDetails();
        System.out.println("Current Account Interest: " + calculateInterest());
    }
}