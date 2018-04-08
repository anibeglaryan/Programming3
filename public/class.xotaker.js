class Xotaker extends LivingCreature{
    constructor(x, y) {
        super(x, y);

        this.energy = 5;
        this.anmahutyun = 0;
        this.multiply = round(random(0, 8));

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    
    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {

            matrix[this.y][this.x] = 0;

            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;

        }

    }
    utel() {
        var norVandak = random(this.yntrelVandak(1));
        var norVandak2 = random(this.yntrelVandak(5));
        if (norVandak) {

            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 2;


            for (var i in GrassArr) {
                var xot = GrassArr[i];
                if (this.x == GrassArr[i].x && this.y == GrassArr[i].y) {
                    GrassArr.splice(i, 1);
                    this.energy++;
                }
            }

        }
        else if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak2[0];
            this.y = norVandak2[1];
            matrix[norVandak2[1]][norVandak2[0]] = 2;
            this.anmahutyun++;

            for (var i in AnmahaberArr) {
                var xot = AnmahaberArr[i];
                if (this.x == AnmahaberArr[i].x && this.y == AnmahaberArr[i].y) {
                    AnmahaberArr.splice(i, 1);
                    this.energy++;

                }

            }
        }
        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (this.energy >= 9 && norVandak) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            XotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.energy = 5;
        }
    }
    mahanal() {
        if (this.energy == 0 && this.anmahutyun == 0) {
            for (var i in XotakerArr) {
                if (this.y == XotakerArr[i].y && this.x == XotakerArr[i].x) {
                    XotakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }
}