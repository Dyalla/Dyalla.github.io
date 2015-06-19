$(document).on('pageinit', function() {

    
    	$('#scene').parallax();


    	//theme song

        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/Lava.mp3');
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

$(document).on('pagebeforecreate', '[data-role="page"]', function(){     
    setTimeout(function(){
        $.mobile.loading('show');
    },200);    
});

$(document).on('pageshow', '[data-role="page"]', function(){  
    setTimeout(function(){
        $.mobile.loading('hide');
    },300);      
});


// $('#page1').live('pagecreate', function(event) {
//         $.ajax({
//             beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
//             complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner
//             // url: //url
//             // // dataType: 'json',
//             // headers: //headers
//             success: function(data) {
//                 //...
//             }
//         });
//     });


// mix colours 

	//holds the current parts of each colour (shown on the screen)
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

// function save () {

// 	var colour = change(MixRed*32,MixYellow*32,MixBlue*32);


// 	//adds the colour to the list of saved colours
// 	colours.push(colour);


// 			//magic to chek the the colours is not repeated.
// 			//removes the reapeated colour if it exists
//  			for(var i=0;i<colours.length;i++){

//  				for(var j=0;j<(colours.length/2)+1;j++){

//  					if(i!=j&&colours[i]==colours[j]){
//  						alert('colour exists');
//  						colours.splice(i, 1);
//  						return;
//  					}
//  				}
//  			}


//  			//checks for white
//  		if(colour=='rgb(255,255,255)'){
//  				alert('white');
//  				return;
//  		}

// 	//i use a div here but u mite use an image (the object that is draged). u can see where i set the colour and the style. 
//  			var div = "<div id=\"id"+MixRed+""+MixYellow+""+MixBlue+"\" src='image.png' onclick=\"mixColour(id"+MixRed+""+MixYellow+""+MixBlue+","+MixRed+","+MixYellow+","+MixBlue+")\" style=\"width: 100%; height: 100%; background-color: "+colour+" \"></img>"



//  			//here i am putting the div above inside another div. then adding it to the space that holds all the colours

//  			document.getElementById('right_div').innerHTML =document.getElementById('right_div').innerHTML + "<div id=\"imageColour\">"+div+"</div>";



//  			//calles reset to start new mixing
//  			reset();

// }

// 	/*
// 		called when you click on a colour
// 	*/
// 	function mixColour (Newid,red,yellow,blue) {


// 		set();
// 		//increase the parts by the amount requested
// 		MixRed+=red;
// 		MixYellow+=yellow;
// 		MixBlue+=blue;

// 		//make the colour
// 		var colour = change(MixRed*32,MixYellow*32,MixBlue*32);

// 		//check for black
// 		if(colour=='rgb(0,0,0)'){
// 			//if black alert and reset
// 			alert('black');
// 			reset();
// 			return;
// 		}
			
// 		//update the mixing div to the new mixed colour
// 		document.getElementById('mixed_colours').style.backgroundColor = colour;
// 	}

	//new

// function start () {


$(function() {

    $.each(colours, function() {
      $('#tools').append("<a href='#colors_sketch' data-color='" + this + "' style=' background: " + this + ";'></a> ");
    });
    $.each([3, 5, 10, 15], function() {
      $('#colors_demo .tools').append("<a href='#colors_sketch' data-size='" + this + "' style='background: #ccc'>" + this + "</a> ");
    });
   $('#colors_sketch').sketch();
  });

 
  // }



	
	//holds the current parts of each colour (shown on the screen)
	var MixRed=0;
	var MixYellow=0;
	var MixBlue=0;

	var divCount=0;



	//list of the saved colours
	//can be used get colours into painting page.
	var colours = ['rgb(192,0,0)','rgb(255,255,0)'];
	


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

			//yeah nah

 			// for(var i=0;i<colours.length;i++){

 			// 	for(var j=0;j<(colours.length/2)+1;j++){

 			// 		if(i!=j&&colours[i]==colours[j]){
 			// 			alert('colour exists');
 			// 			colours.splice(i, 1);
 			// 			return;
 			// 		}
 			// 	}
 			// }


 			//checks for white
 		if(colour=='rgb(255,255,255)'){
 				alert('white');
 				return;
 		}

	//i use a div here but u mite use an image (the object that is draged). u can see where i set the colour and the style. 
 			var div = "<div id=\"id"+MixRed+""+MixYellow+""+MixBlue+"\" src='image.png' onclick=\"mixColour(id"+MixRed+""+MixYellow+""+MixBlue+","+MixRed+","+MixYellow+","+MixBlue+")\" style=\"border-radius:100px; position: inline; width: 80px; height: 80px; background-color: "+colour+" \"></img>"
 			divCount++;


 			//here i am putting the div above inside another div. then adding it to the space that holds all the colours

 			document.getElementById('right_div').innerHTML =document.getElementById('right_div').innerHTML + "<div class=\"added\" id=\"imageColour\">"+div+"</div>";



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
	




	
