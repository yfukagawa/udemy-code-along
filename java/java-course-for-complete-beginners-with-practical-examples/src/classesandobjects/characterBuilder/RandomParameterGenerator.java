package classesandobjects.characterBuilder;

import java.util.Random;

public class RandomParameterGenerator {

    Random random = new Random();

    public String randomNamer() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        int length = random.nextInt(3) + 1;
        for (int i = 0; i < length; i++) {
            char c = (char) (random.nextInt(26) + 'a');
            sb.append(c);
        }
        return sb.toString();
    }
    public String randomRanker() {
        String[] ranks = {"S", "A", "B", "C", "D", "E", "F"};
        int randomIndex = random.nextInt(ranks.length);
        String chosenRank = ranks[randomIndex];
        return chosenRank;
    }

    public int randomLevel() {
        int chosenLevel = random.nextInt(120) + 1;
        return chosenLevel;
    }

    public int randomHP() {
        String adjuster = randomRanker();
        int chosenHP;
        if (adjuster.equals("S")) {
            chosenHP = randomLevel()*100;
        } else if (adjuster.equals("A")) {
            chosenHP = randomLevel()*88;
        }
        return chosenHP;
    }
}
