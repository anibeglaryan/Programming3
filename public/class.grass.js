class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.multiply = round(random(0, 6));
        this.speed = 6;

    }

    bazmanal() {

        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= this.speed && norVandak) {
            var x = norVandak[0];
            var y = norVandak[1];
            var norXot = new Grass(x, y);
            GrassArr.push(norXot);
            matrix[y][x] = 1;
            this.multiply = 0;
        }

    }
}