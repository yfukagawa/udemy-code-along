package classesandobjects.roster;

import java.util.Random;

public class Members {
    Random  randomNumberGenerator = new Random();
    String firstName = generateRandomConsonant();
    String lastName = generateRandomConsonant();
    int birthYear = birthYearGenerate();
    int totalScore;
    int totalPossibleScore = totalPossibleScoreGenerator();
    double scorePercentage = scoredPoints().this;
    int yearsActive;
    int numsOfGamesPlayed;

    public Members(String firstName, String lastName, int birthYear, int totalScore, int totalPossibleScore, double scorePercentage, int yeasActive, int numsOfGamesPlayed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.totalScore = totalScore;
        this.totalPossibleScore = totalPossibleScore;
        this.scorePercentage = scorePercentage;
        this.yearsActive = yeasActive;
        this.numsOfGamesPlayed = numsOfGamesPlayed;
    }

    public int totalPossibleScoreGenerator () {
        Random  randomNumberGenerator = new Random();
        int thisTotalPossibleScore = randomNumberGenerator.nextInt() * 1000;
        return thisTotalPossibleScore;
    }

    public void scoredPointsPercentage() {
        Random  randomNumberGenerator = new Random();
        int totalPossibleScore = totalPossibleScoreGenerator();
        int thisTotalScore = randomNumberGenerator.nextInt() * 1000;
        while(thisTotalScore > totalPossibleScore) {
            thisTotalScore = randomNumberGenerator.nextInt() * 1000;
        }

        int thisScorePercentage = (int)((double)(totalScore/totalPossibleScore)*100);
    }

    public String generateRandomConsonant () {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        int length = random.nextInt(3) + 1;
        for (int i = 0; i < length; i++) {
            char c = (char) (random.nextInt(26) + 'a');
            sb.append(c);
        }
        return sb.toString();
    }

    public int birthYearGenerate () {
        Random random = new Random();
        int randomBirthYear = 2023 - (random.nextInt(79) + 12);
        return randomBirthYear;
    }



}


