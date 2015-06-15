$(document).ready(function(){
	console.log("I am ready.. but still a lil bitch");
    // $('#simple_sketch').sketch();



});

// $(function(){
// 	$("#imageColour").draggable();
// });

// $('div').click(function(){
// 	$(this).toggleClass('selected');
// });

// $('input[type="button"]').click(function(){
// 	mixColour();
// });





// mix colours 

	var colourCount=0;
	var MixRed=0;
	var MixYellow=0;
	var MixBlue=0;

	var divCount=0;

	
	function mixColour (red,yellow,blue) {

		//adds the colour parts to the mix
		MixRed+=red;
		MixYellow+=yellow;
		MixBlue+=blue;
		colourCount++;


		if(colourCount==2){  //this is where the magic happens
			addNewColour(MixRed,MixYellow,MixBlue);
			colourCount=0;
			MixRed=0;
			MixYellow=0;
			MixBlue=0;

		}

	}

	function addNewColour (red,yellow,blue) {
			
      divCount++;         //this counts the colours being created

			set();

 			//change will mix the colour, 32 = full colour, it returns a rgb colour like 'rgb (192,0,0)'
 			var colour = change(red*32,yellow*32,blue*32);
 			console.log(colour);
 			
 			//i use a div here but u mite use an image (the object that is draged). u can see where i set the colour and the style. 
 			var div = "<div id=\""+red+""+yellow+""+blue+"\" onclick=\"mixColour("+red+","+yellow+","+blue+")\" style=\"width: 100%; height: 100%; background-color: "+colour+" \"></div>"
 			
 			console.log(divCount);

 			if(divCount>=13){   //this resets the palette counter
 				return;
 				console.log("STOP PLS"); 
 				
 			}

 			//here i am putting the div above inside another div. then adding it to the space that holds all the colours
 			//$("#right_div").append("<div id=\"imageColour\">"+div+"</div>");
 			document.getElementById('mixed_colours').innerHTML =document.getElementById('mixed_colours').innerHTML + "<div id=\"imageColour\">"+div+"</div>";

 			// if (addNewColourCount==11) {};
	}


	function clearPalette(elementID) {         //this is the function for the clearing the palette
    		document.getElementById("mixed_colours").innerHTML = "";

    		if(clearPalette){
    			divCount=0;
    		}
    	
	}
