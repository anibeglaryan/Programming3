var matrix = [];

var side = 10;
var k = 50;
var GrassArr = [];
var XotakerArr = [];
var n = 50;
var MahaberQanak = 5;
var MahaberArr = [];
var GishatichQanak = 40;
var GishatichArr = [];
var XotakerQanak = 20;

var AnmahaberArr = [];
var AnmahaberQanak = 5;
function setup() {
    frameRate(3);

    for (i = 0; i < k; i++) {
        matrix[i] = [];
        for (a = 0; a < k; a++) {
            matrix[i][a] = Math.round(Math.random());
        }
    }

    while(XotakerQanak > 0){
        var x = Math.floor(Math.random()*n);
        var y = Math.floor(Math.random()*n);
        if(matrix[y][x] == 0){
            matrix[y][x] = 2;
            XotakerQanak--;
        }
    }
  

    while(MahaberQanak > 0){
        var x = Math.floor(Math.random()*n);
        var y = Math.floor(Math.random()*n);
        if(matrix[y][x] == 0){
            matrix[y][x] = 4;
            MahaberQanak--;
        }
    }
while(GishatichQanak > 0){
        var x = Math.floor(Math.random()*n);
        var y = Math.floor(Math.random()*n);
        if(matrix[y][x] == 0){
            matrix[y][x] = 3;
            GishatichQanak--;
        }
    }
while(AnmahaberQanak > 0){
        var x = Math.floor(Math.random()*n);
        var y = Math.floor(Math.random()*n);
        if(matrix[y][x] == 0){
            matrix[y][x] = 5;
            AnmahaberQanak--;
        }
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                GrassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                XotakerArr.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
               
                GishatichArr.push(new Gishatich(x, y));
            }
             else if (matrix[y][x] == 4) {
               
                MahaberArr.push(new Mahaber(x, y));
            }
            else if (matrix[y][x] == 5) {
               
                AnmahaberArr.push(new Anmahaber(x, y));
            }

        }
    }
    
}
function draw() {
    for (var i in GrassArr) {
        GrassArr[i].bazmanal();
    }




    for (var i in XotakerArr) {
        XotakerArr[i].utel();
        XotakerArr[i].bazmanal();
        XotakerArr[i].mahanal();

    }

    for (var i in GishatichArr) {
        GishatichArr[i].utel();
        GishatichArr[i].bazmanal();
        GishatichArr[i].mahanal();

    }
for (var i in MahaberArr) {
        MahaberArr[i].utel();
    }
for (var i in AnmahaberArr) {
        
    }
    //console.log(XotakerArr);
    //console.log(GrassArr);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
          else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
}



