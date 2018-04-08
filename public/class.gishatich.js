class Gishatich extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.energy = 8;

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

            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;

        }

    }
    utel() {
        var norVandak = random(this.yntrelVandak(2));

        if (norVandak && Xotaker.anmahutyun == 0) {

            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 3;


            for (var i in XotakerArr) {
                var xot = XotakerArr[i];
                if (this.x == XotakerArr[i].x && this.y == XotakerArr[i].y) {
                    XotakerArr.splice(i, 1);
                    this.energy++;
                }

            }
            Xotaker.anmahutyun--;
        }

        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (this.energy >= 10 && norVandak) {
            var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
            GishatichArr.push(norGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.energy = 5;
        }
    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in GishatichArr) {
                if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }
}