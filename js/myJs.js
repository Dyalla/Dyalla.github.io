$(document).on('pageinit', function() {

    
    	$('#scene').parallax();


    	//theme song

        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/ColourChef.mp3');
        // audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()
         audioElement.loop=true;

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();

        }, true);

        $('.play').click(function() {
            audioElement.play();

        });

        $('.pause').click(function() {
            audioElement.pause();
        });

        $('#workstation').addClass('animated bounce infinite');
        
   });

// $(document).bind("mobileinit", function(){
// $.extend($.mobile, {
// metaViewportContent: "width=device-width, height=device-height, minimum-scale=1, maximum-scale=1"
// });
// });

// $(document).bind("mobileinit", function()
// {
    
//         $.mobile.defaultPageTransition = 'none';
//         $.mobile.defaultDialogTransition = 'none';
    
// });





$(document).on('pagebeforecreate', '[data-role="page"]', function(){     
    setTimeout(function(){
        $.mobile.loading('show');
    },100);    
});

$(document).on('pageshow', '[data-role="page"]', function(){  
    setTimeout(function(){
        $.mobile.loading('hide');
    },1000);      
});



function refreshCanvas () {

	$('#colors_sketch').remove();
	$('#colors_demo .tools').empty();
	$('#colors_demo .tools').append( '<a  class="ui-link" href="#colors_sketch" data-download="png" style="float: right; width: 100px;">Download</a>');
	$('#colors_demo').append('<canvas id="colors_sketch"  width= "800" height= "600"  ></canvas>');
}


function makeColours () {
$(function(){
	refreshCanvas();
	// alert("refresh canvas worked!");
	alert("creating darwer "+colours);
	$.each(colours, function() {
	      $('#colors_demo .tools').append("<a class='ui-link' href='#colors_sketch' data-color='" + this + "' style='width: 50px; height:50px; border-radius:25px; background: " + this + ";'> </a> ");
	    });
	    // $.each([80, 100], function() {
	    //   $('#colors_demo .tools').append("<a href='#colors_sketch' data-size='" + this + "' style='background: '>" + this + "</a> ");
	    // });
	   $('#colors_sketch').sketch();
});
	// body...
}



// mix colours 

	//holds the current parts of each colour (shown on the screen)

	

	//NOT SURE
	var MixRed=0;
	var MixYellow=0;
	var MixBlue=0;


	//list of the saved colours
	//can be used get colours into painting page.

	var colours = [];
	

function reset () {
	//resets the colour mixing div
	set();
	MixRed=0;
	MixYellow=0;
	MixBlue=0;
	mixColour(0,0,0,0);

}

	
	//holds the current parts of each colour (shown on the screen)
	var MixRed=0;
	var MixYellow=0;
	var MixBlue=0;

	var divCount=0;



	//list of the saved colours
	//can be used get colours into painting page.

	var colours = ['rgb(192,0,0)','rgb(255,255,0)', 'rgb(0,0,192)'];
	


function reset () {
	//resets the colour mixing div
	set();
	MixRed=0;
	MixYellow=0;
	MixBlue=0;
	mixColour(0,0,0,0);


}

function save () {

	var colour = change(MixRed*32,MixYellow*32,MixBlue*32);


	//adds the colour to the list of saved colours
	colours.push(colour);


			//magic to chek the the colours is not repeated.
			//removes the reapeated colour if it exists

			

 			for(var i=0;i<colours.length;i++){

 				for(var j=0;j<(colours.length/2)+1;j++){

 					if(i!=j&&colours[i]==colours[j]){
 						alert('colour exists');
 						colours.splice(i, 1);
 						return;
 					}
 				}
 			}


 			//checks for white
 		if(colour=='rgb(255,255,255)'){
 				alert('white');
 				return;
 		}

	//i use a div here but u mite use an image (the object that is draged). u can see where i set the colour and the style. 
 			var div = "<div id=\"id"+MixRed+""+MixYellow+""+MixBlue+"\" src='image.png' onclick=\"mixColour(id"+MixRed+""+MixYellow+""+MixBlue+","+MixRed+","+MixYellow+","+MixBlue+")\" style=\"border-radius:100px; position: inline; width: 80px; height: 80px; background-color: "+colour+" \"></div>"
 			divCount++;


 			//here i am putting the div above inside another div. then adding it to the space that holds all the colours

 			document.getElementById('right_div').innerHTML =document.getElementById('right_div').innerHTML + "<div class=\"added\" id=\"imageColour\">"+div+"</div>";

 			console.log(colours);
 			alert(colours);

 			//calls reset to start new mixing
 			reset();

}




	/*
		called when you click on a colour
	*/
	function mixColour (Newid,red,yellow,blue) {


		set();
		//increase the parts by the amount requested
		MixRed+=red;
		MixYellow+=yellow;
		MixBlue+=blue;

		

		//make the colour
		var colour = change(MixRed*32,MixYellow*32,MixBlue*32);

		//check for black
		if(colour=='rgb(0,0,0)'){
			//if black slert and reset
			alert('black');
			// reset();

			// return;
		}

		console.log(divCount);

 			if(divCount>=5){   //this resets the palette counter
 				
 				console.log("STOP PLS"); 
 				alert('palette full!');

 				return;

 				
 			}
			
		//update the mixing div to the new mixed colour
		document.getElementById('mixed_colours').style.backgroundColor = colour;
	}


	function clear_colours () {

		divCount=0; 
		
		//removes the divs, added is a class (line 152), that is in the added colour divs
		$(".added").remove();

		//clear the array.
		colours=[];


		//resets the colouring, background white
		reset();
		
		}

	if(clear_colours){
    			divCount=0;
    		}
	

// $(function(){
// 	alert("creating darwer "+colours);

// 	$.each(colours, function() {
// 	      $('#colors_demo .tools').append("<a href='#colors_sketch'  data-color='" + this + "' style='width: 100px; height: 100px; background: " + this + ";'></a> ");
// 	    });
// 	    $.each([20, 60, 80, 100], function() {
// 	      $('#colors_demo .tools').append("<a href='#colors_sketch' data-size='" + this + "' style='background: '>" + this + "</a> ");
// 	    });
// 	   $('#colors_sketch').sketch();


// });



// $(function() {
//     $.each(['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#000', '#fff'], function() {
//       $('#colors_demo .tools').append("<a href='#colors_sketch' data-color='" + this + "' style='width: 10px; background: " + this + ";'></a> ");
//     });
//     $.each([3, 5, 10, 15], function() {
//       $('#colors_demo .tools').append("<a href='#colors_sketch' data-size='" + this + "' style='background: #ccc'>" + this + "</a> ");
//     });
//     $('#colors_sketch').sketch();
//   });
	


