// Paint Colour Mixer
// copyright Stephen Chapman, 18th April 2006
// you may copy this code but please keep the copyright notice as well
var baseC = '256,256,256'; 
var redC = '-2,-8,-8'; 
var blueC = '-8,-8,-2'; 
var yellowC = '0,0,-8'; 
var orangeC = '1,1,0'; 
var greenC = '-4,0,-3'; 
var purpleC = '1,0,1'; 
var blackC = '-3,-4,-1'; 
var redV = blueV = yellowV = 0;
var totC = new Array(0,0,0);

function change(r,y,b) {
	totC[0] += r; 
	totC[1] += y; 
	totC[2] += b; 
	var t = Math.max(totC[0],totC[1],totC[2]); 
	if (t > 32) t = 32/t; 
	else t=1; 
	redV = Math.round(totC[0] * t); 
	yellowV = Math.round(totC[1] * t); 
	blueV = Math.round(totC[2] * t); 
	return colour();
}


function colour() {

	var shade = new mathArray(baseC); 
	var tot = redV + blueV + yellowV; 
	if (tot > 0) {
		var redA = new mathArray(redC);
		redA.multiply(redV*redV/tot);
		shade.add(redA);
		var blueA = new mathArray(blueC);
		blueA.multiply(blueV*blueV/tot);
		shade.add(blueA);
		var yellowA = new mathArray(yellowC);
		yellowA.multiply(yellowV*yellowV/tot);
		shade.add(yellowA);
		var orangeA = new mathArray(orangeC);
		orangeA.multiply((redV * yellowV) /32);
		shade.add(orangeA);
		var greenA = new mathArray(greenC);
		greenA.multiply((blueV * yellowV) /32);
		shade.add(greenA);
		var purpleA = new mathArray(purpleC);
		purpleA.multiply((blueV * redV) /32);
		shade.add(purpleA);
		var blackA = new mathArray(blackC);
		blackA.multiply((blueV * redV * yellowV) /1024);
		shade.add(blackA);
	}
	shade.max(255);
	shade.min(0);
	shade.intg();
	return 'rgb(' + shade.value[0] + ',' + shade.value[1] + ',' + shade.value[2] + ')';
} 

function set() {
	totC[0] = totC[1] = totC[2] = redV = yellowV = blueV = 0; 
}
                  