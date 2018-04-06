class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = round(random(0, 6));
        this.speed = 6;
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

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
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
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.anmahutyun = 0;
        this.multiply = round(random(0, 8));
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

    yntrelVandak(index) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == index) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
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
        if (this.energy == 0 && this.anmahutyun ==0) {
            for (var i in XotakerArr) {
                if (this.y == XotakerArr[i].y && this.x == XotakerArr[i].x) {
                    XotakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }
}
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        
        this.multiply = round(random(0, 8));
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

    yntrelVandak(index) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == index) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
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

        if (norVandak && Xotaker.anmahutyun==0) {

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
class Mahaber {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
    yntrelVandak(index) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == index) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
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
class Anmahaber {
constructor(x, y) {
        this.x = x;
        this.y = y;
       
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
}

