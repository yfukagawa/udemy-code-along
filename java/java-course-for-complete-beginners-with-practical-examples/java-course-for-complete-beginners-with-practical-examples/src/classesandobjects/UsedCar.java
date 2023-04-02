package classesandobjects;

import java.util.Scanner;

public class UsedCar {

    int basePrice;
    int mileage;
    int modelYear;
    String make;
    String model;
    String color;
    byte numberOfDoors;
    byte numberOfSeats;
    float gasMileAve;

    float salesTax;
    float serviceFee;

    UsedCar(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Information of This Vehicle");
        System.out.print("Base Price: $");
        basePrice = scanner.nextInt();
        System.out.print("\nCurrent Mileage: ");
        mileage = scanner.nextInt();
        System.out.print("\nModel Year: ");
        modelYear = scanner.nextInt(); scanner.nextLine();
        System.out.print("\nMake: ");
        make = scanner.nextLine();
        System.out.print("\nModel: ");
        model = scanner.nextLine();
        System.out.print("\nColor: ");
        color = scanner.nextLine();
        System.out.print("\nDoors: ");
        numberOfDoors = scanner.nextByte();
        System.out.print("\nSeats: ");
        numberOfSeats = scanner.nextByte();
        System.out.print("\nAve. Gas Milage: ");
        gasMileAve = scanner.nextFloat();

        scanner.close();

        System.out.println("Sales Tax: $" + (salesTax = (float)(basePrice*0.06)));
        System.out.println("Service Fee: $" + (serviceFee = (float)(basePrice*0.04)));

    }



    public void grandTotal() {
        System.out.println("Grand Total: $" + (float)(basePrice + salesTax + serviceFee));
    }
}
