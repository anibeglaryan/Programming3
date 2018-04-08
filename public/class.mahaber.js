class Mahaber extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        

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

    utel() {
        var norVandak = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(3));

        if (norVandak) {
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 0;
            for (var i in XotakerArr) {
                var xot = XotakerArr[i];
                if (this.x == XotakerArr[i].x && this.y == XotakerArr[i].y) {
                    XotakerArr.splice(i, 1);


                    this.energy++;
                }
            }
        }
        else if (norVandak2) {
            this.x = norVandak2[0];
            this.y = norVandak2[1];
            matrix[norVandak2[1]][norVandak2[0]] = 0;
            for (var i in GishatichArr) {
                var gishatich = GishatichArr[i];
                if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);

                    this.energy++;
                }
            }
        }

    }

}