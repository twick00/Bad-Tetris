
function generateGrid(x,y) {
    for (var i = 1; i < y; i++) {
        $("#play-grid").append("<tr>")
        for (var o = 1; o < x; o++) {
            $("tr:last").append(rowGen(o,i));
        }
        $("#play-grid").append("</tr>")
    }
}
function rowGen(x,y) {
    return "<td class=row-"+ y + x + ">" + y + x + "</td>"
}


function main() {
    generateGrid(10,10);
}
$(document).ready(function() {
    shapeLoc.gridLoc();
    main();
})
function moveGrid(x,y){
	shapeLoc.moveLoc[0] += x;
	shapeLoc.moveLoc[1] += y;
	shapeLoc.gridLoc();
	fillGrid();
}
$(document).keydown(function(e) {
    switch(e.which) {
        case 37:moveGrid(-1,0);// left
			
        break;

        case 38:moveGrid(0,-1) // up
        break;

        case 39:moveGrid(1,0);// right
        break;

        case 40:moveGrid(0,1); // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
var shapeLoc = {
    //startArray:[[ [1,1],[1,2],[1,3],[1,4]], [ [2,1],[2,2],[2,3],[2,4] ], [ [3,1],[3,2],[3,3],[3,4] ],[[4,1],[4,2],[4,3],[4,4]] ], //(probably) MUST BE SQUARE
	startArray:[[ [1,1],[1,2],[1,3],[1,4]], [ /*[2,1],[2,2],*/[2,3],/*[2,4]*/ ], [ /*[3,1],*/[3,2]/*,[3,3],[3,4]*/ ],[[4,1],[4,2],[4,3],[4,4]] ], //(probably) MUST BE SQUARE
    gridLoc: function() {
        var newLoc= [];
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
                    }
                    newCol.push(stringXY);
                
                newRow.push(newCol);
            } 
            newLoc.push(newRow);
        }
        this.gridAt = newLoc;
		//this.currentLoc[0] += this.moveLoc[0];
		//this.currentLoc[1] += this.moveLoc[1]; 
        return newLoc;
    },
    currentLoc:[0,0], //x, y
    moveLoc:[0,0],
    gridAt:[]
};
function fillGrid() {
    var fillThis = [];

        for (var i = 0; i < shapeLoc.gridAt.length; i++) {
            var temp = "";
            for (var o = 0; o < shapeLoc.gridAt[i].length; o++) {
                temp = shapeLoc.gridAt[i][o][0].concat().join('');
                //console.log(temp);
                fillThis.push(temp)
            }
        }
        console.log(fillThis)
		$("*").removeClass("tetris-block");
        for (var u = 0; u < fillThis.length; u++) {
            $("td[class='row-"+fillThis[u]+"']").addClass("tetris-block");

        }
        console.log(fillThis);
    //return fillThis;
}