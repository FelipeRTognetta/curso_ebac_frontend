function Adventurer(nome, ancestry, lvl) {
    this.nome = nome;
    this.ancestry = ancestry;
    this.lvl = lvl;
}

function Sorcerer(nome, ancestry, lvl, hp, def, atk) {
    Adventurer.call(this, nome, ancestry, lvl);

    this.hp = 5 * lvl;
    this.def = 10 * lvl;
    this.atk = 15 * lvl;
}

function Warrior(nome, ancestry, lvl, hp, def, atk) {
    Adventurer.call(this, nome, ancestry, lvl);

    this.hp = 10 * lvl;
    this.def = 15 * lvl;
    this.atk = 5 * lvl;
}

function Rogue(nome, ancestry, lvl, hp, def, atk) {
    Adventurer.call(this, nome, ancestry, lvl);

    this.hp = 10 * lvl;
    this.def = 5 * lvl;
    this.atk = 15 * lvl;
}

const adventurer1 = new Sorcerer("Larissa", "Human", 3);
const adventurer2 = new Warrior("Matheus", "Dwarf", 2)
const adventurer3 = new Rogue("Felipe", "Goblin", 3)
const adventurer4 = new Warrior("Gabriel", "Elf", 1)

console.log(adventurer1, adventurer2, adventurer3, adventurer4);
