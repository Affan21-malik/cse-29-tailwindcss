public class Main {

    public static void main(String[] args) {

        System.out.println("----- Savings Account -----");

        SavingsAccount savings =
                new SavingsAccount("101", "Rahul", 10000);

        savings.deposit(2000);
        savings.displayDetails();

        System.out.println();

        System.out.println("----- Current Account -----");

        CurrentAccount current =
                new CurrentAccount("102", "Anita", 20000);

        current.deposit(3000);
        current.displayDetails();
    }
}