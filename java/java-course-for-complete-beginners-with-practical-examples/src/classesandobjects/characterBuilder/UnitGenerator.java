package classesandobjects.characterBuilder;

public class UnitGenerator {
    String unitName;
    String unitRank;
    int unitLevel;
    int unitHp;
    int unitMp;
    int untilNextLevel;
    int attack;
    int magic;
    int defense;
    int evade;

    public UnitGenerator(String unitName, String unitRank, int unitLevel, int unitHp, int unitMp, int untilNextLevel, int attack, int magic, int defense, int evade) {
        this.unitName = unitName;
        this.unitRank = unitRank;
        this.unitLevel = unitLevel;
        this.unitHp = unitHp;
        this.unitMp = unitMp;
        this.untilNextLevel = untilNextLevel;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.evade = evade;
    }
}
