function generateGrid(x, y) {
    for (var i = 1; i < y; i++) {
        $("#play-grid").append("<tr>")
        for (var o = 1; o < x; o++) {
            $("tr:last").append(rowGen(o, i));
        }
        $("#play-grid").append("</tr>")
    }
}

function rowGen(x, y) {
    return "<td class=row-" + y + x + ">" + y + x + "</td>"
}


function main() {
    generateGrid(10, 10);
}
$(document).ready(function () {

    main();
})
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            break;

        case 38: // up
            break;

        case 39: // right
            break;

        case 40: // down
            break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
var shapeLoc = {
    startArray: [
        [
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4]
        ],
        [
            [2, 1],
            [2, 2],
            [2, 3],
            [2, 4]
        ],
        [
            [3, 1],
            [3, 2],
            [3, 3],
            [3, 4]
        ],
        [
            [4, 1],
            [4, 2],
            [4, 3],
            [4, 4]
        ]
    ], //(probably) MUST BE SQUARE
    gridLoc: function () {
        var newLoc = [];
        for (var i = 0; i < this.startArray.length; i++) { //iterate through rows
            var newRow = [];
            for (var o = 0; o < this.startArray[i].length; o++) { //iterate through columns
                var newCol = [];
                var stringXY = [];
                for (var u = 0; u < this.startArray[i][o].length; u++) { //Iterate through both numbers of this.startArray[i][o]
                    if (u === 0) {
                        stringXY.push(this.startArray[i][o][u] + this.moveLoc[1] + this.currentLoc[1]);
                    }
                    if (u === 1) {
                        stringXY.push(this.startArray[i][o][u] + this.moveLoc[0] + this.currentLoc[0]);
                    }
                    this.currentLoc[0] += this.moveLoc[0];
                    this.currentLoc[1] += this.moveLoc[1];
                }
                newCol.push(stringXY);
                newRow.push(newCol);
            }
            newLoc.push(newRow);
        }
        return newLoc;
    },
    currentLoc: [0, 0], //x, y
    moveLoc: [1, 1],
};

function fillGrid() {
    
}