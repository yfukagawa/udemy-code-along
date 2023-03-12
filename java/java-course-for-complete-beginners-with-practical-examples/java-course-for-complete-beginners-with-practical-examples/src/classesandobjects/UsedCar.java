package classesandobjects;

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
    float salesTax = (float)(basePrice*0.06F);
    float serviceFee = (float)(basePrice*0.04F);

    UsedCar(){
        System.out.println("Information of This Vehicle");
    }

    public void grandTotal() {
        System.out.println("$" + (float)(basePrice + salesTax + serviceFee));
    }
}
