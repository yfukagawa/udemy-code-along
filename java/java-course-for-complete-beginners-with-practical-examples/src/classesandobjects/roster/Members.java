package classesandobjects.roster;

import java.util.Random;

public class Members {

    String firstName;
    String lastName;
    int birthYear;
    int totalScore;
    double scorePercentage;
    int yearsActive;
    int numsOfGamesPlayed;

    public Members(String firstName, String lastName, int birthYear, int totalScore, double scorePercentage, int yeasActive, int numsOfGamesPlayed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.totalScore = totalScore;
        this.scorePercentage = scorePercentage;
        this.yearsActive = yeasActive;
        this.numsOfGamesPlayed = numsOfGamesPlayed;
    }

    public void scoredPoints() {
        Random  randomNumberGenerator = new Random();

    }
}
