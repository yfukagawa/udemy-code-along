package classesandobjects;

import java.io.BufferedWriter;
import java.util.Scanner;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class UsedCar {

    static int basePrice;
    int mileage;
    static int modelYear;
    static String make;
    static String model;
    static String color;
    static byte numberOfDoors;
    static byte numberOfSeats;
    static float gasMileAve;

    static float salesTax;
    static float serviceFee;

    static float grandTotal;

    UsedCar() throws IOException{
        Scanner scanner = new Scanner(System.in);

        System.out.println("Information of This Vehicle");
        System.out.print("Base Price: $");
        this.basePrice = scanner.nextInt();
        System.out.print("\nCurrent Mileage: ");
        this.mileage = scanner.nextInt();
        System.out.print("\nModel Year: ");
        this.modelYear = scanner.nextInt(); scanner.nextLine();
        System.out.print("\nMake: ");
        this.make = scanner.nextLine();
        System.out.print("\nModel: ");
        this.model = scanner.nextLine();
        System.out.print("\nColor: ");
        this.color = scanner.nextLine();
        System.out.print("\nDoors: ");
        this.numberOfDoors = scanner.nextByte();
        System.out.print("\nSeats: ");
        this.numberOfSeats = scanner.nextByte();
        System.out.print("\nAve. Gas Milage: ");
        this.gasMileAve = scanner.nextFloat();

        scanner.close();

        String fileName = make + ".txt";
        File file = new File(fileName);

        if(!file.exists()) {
            try {
                file.createNewFile();
                try {
                    FileWriter fw = new FileWriter(file, true); // Set the second parameter to true to append to the file instead of overwriting it
                    BufferedWriter bw = new BufferedWriter(fw);
                    bw.write(make + " inventory");
                    bw.newLine(); // Add a new line after the text
                    bw.close();
                    fw.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

        System.out.println("Sales Tax: $" + (salesTax = (float)(basePrice*0.06)));
        System.out.println("Service Fee: $" + (serviceFee = (float)(basePrice*0.04)));

        try {
            FileWriter fw = new FileWriter(file, true); // Set the second parameter to true to append to the file instead of overwriting it
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(UsedCar.carInfo(make));
            bw.newLine(); // Add a new line after the text
            bw.close();
            fw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public float grandTotal() {
        System.out.println("Grand Total: $" + (float)(basePrice + salesTax + serviceFee));
        grandTotal = (float)(basePrice + salesTax + serviceFee);
        return grandTotal;
    }

    public static String carInfo(String make) {
        float totalSum = basePrice + salesTax + serviceFee;
        String carInfo = "\n" + modelYear + " " + UsedCar.make + " " + model +
                "\n" +color +
                "\n"+numberOfDoors+" doors\n" +
                numberOfSeats+" seats\n" +
                gasMileAve+" miles per gal. ave.\n" +
                "Base Price: $" + basePrice +
                "\nSales Tax: $"+salesTax +
                "\nService Fee: $"+  serviceFee +
                "\nGrand Total: $" + totalSum;

        return carInfo;
    }



}
