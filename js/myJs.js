
var URL = "https://colour-chef.herokuapp.com";


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
       	
       
       	 // $('.primary').addClass('animated rubberBand');

//     function animationClick(element, animation){
//   	  element = $('#imageColour');
//     	element.click(
//         	function() {
//         	    element.addClass('animated rubberBand' + animation);        
//             //wait for animation to finish before removing classes
//             window.setTimeout( function(){
//                 element.removeClass('animated rubberBand' + animation);
//             }, 2000);         
  
//         });
// }

        
   });



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
	// $('#colors_demo .tools').append( "<a class='ui-link' href='#colors_sketch' data-download='png' style='float: right; width: 100px; height: 300px;'>Download</a>");
	$('#colors_demo').append('<canvas id="colors_sketch"  width= "650" height= "600"  ></canvas>');
}


function makeColours () {
$(function(){
	refreshCanvas();
	// alert("refresh canvas worked!");
	//alert("creating darwer "+colours);
	$.each(colours, function() {
	      $('#colors_demo .tools').append("<a class='ui-link' href='#colors_sketch' data-color='" + this + "' style='width: 80px; height:80px; border-radius:100px; border: 4px solid #bababb; margin-top: -50px; margin-right: 10px; margin-bottom: 60px; display: inline-block; background: " + this + ";'> </a> ");
	    });
	    // $.each([80, 100], function() {
	    //   $('#colors_demo .tools').append("<a href='#colors_sketch' data-size='" + this + "' style='background: '>" + this + "</a> ");
	    // });
	   $('#colors_sketch').sketch();
});
	// body...
}


function loginPrompt () {
	console.log("in login");
	// body...
	var username = $("#usrnm").val();
	var password = $("#pswd").val();
	console.log(username);
	console.log(password);

	login(URL, username, password, function (data) {

		if(data){

		console.log("logged in");
		colours = ['rgb(192,0,0)','rgb(255,255,0)', 'rgb(0,0,192)'];
		$("#picture").attr("src","./img/blank.png");
		$("#right_div").empty();

		get_colours (URL,function (col) {
			colours = col;
		});



}
	});

		
		
	
}



function createPrompt() {
	console.log("in create new user");

	var name = $("#name").val();
	var username = $("#username").val();
	var password = $("#password").val();

	

	create_new_user(URL ,name ,username , password ,0 , "easy",function (data) {
		if(data){
			colours = ['rgb(192,0,0)','rgb(255,255,0)', 'rgb(0,0,192)'];
		$("#picture").attr("src","./img/blank.png");
		$("#right_div").empty();
		}
	});
		//alert in ablive sunction
	
	

}

// mix colours 

	//holds the current parts of each colour (shown on the screen)

	

	//NOT SURE
	var MixRed=0;
	var MixYellow=0;
	var MixBlue=0;


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

	
	//holds the current parts of each colour (shown on the screen)
	var MixRed=0;
	var MixYellow=0;
	var MixBlue=0;

	var divCount=0;



	//list of the saved colours
	//can be used get colours into painting page.

	//'rgb(192,0,0)','rgb(255,255,0)', 'rgb(0,0,192)'

	var colours = [];
	


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

	//checks for white
 	if(colour=='rgb(255,255,255)'){
 			alert('white');
 			return;
 	}

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

 			//
 		//
 		//call to server to add colours
 		
 		add_colour(URL,colour,function (val) {

 			console.log("bo-> "+val);

	 		if(val){
	 			
	 		}else{
	 			alert("connection errror");
	 		}
 		});
 		


 		//
 		//
 		//
 		//


 		

	//i use a div here but u mite use an image (the object that is draged). u can see where i set the colour and the style. 
 			var div = "<div id=\"id"+MixRed+""+MixYellow+""+MixBlue+"\" src='image.png' onclick=\"mixColour(id"+MixRed+""+MixYellow+""+MixBlue+","+MixRed+","+MixYellow+","+MixBlue+")\"  style=\"border-radius:100px; margin-bottom:20px; position: inline; width: 80px; height: 80px; background-color: "+colour+" \"></div>"
 			divCount++;


 			//here i am putting the div above inside another div. then adding it to the space that holds all the colours

 			document.getElementById('right_div').innerHTML =document.getElementById('right_div').innerHTML + "<div class=\"added\" id=\"imageColour\">"+div+"</div>";

 			console.log(colours);
 			// alert(colours);

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
			// alert('black');
			// reset();

			// return;
		}

		console.log(divCount);

 			if(divCount>=8){   //this resets the palette counter
 				
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
		colours=['rgb(192,0,0)','rgb(255,255,0)', 'rgb(0,0,192)'];



		//
		//
		//
			delete_colour (URL);
		//
		//
		//




		//resets the colouring, background white
		reset();
		
		}

	if(clear_colours){
    			divCount=0;
    		}
	


    function getDetails() {
    	$("#projects").empty();
    	$("#picture").src = /*blank image*/
    	getprojectDetails (URL,function (data) {
    		// body...
    		//append project buttons to 

    		if(data.error){
    			alert(error);
    		}else{
    		//loop of all details
    		for(var i=0;i<data.length;i++){

    		var id = data[i].project_id;
    		var name = data[i].project_name;
    		$("#projects").append('<div style=" height:50px; width:100%;"><button onclick="getPro('+id+')";">'+name+'</button></div>');

    		}


    		}



    	});
    }


    function getPro (id) {
    	console.log("getting project ->"+id);
    	getProject (URL, id, function (data) {
    		// body...

    		console.log("in callback "+data);
    		$("#picture").attr("src",data);




    	});
    }


    function uploadPro() {

    	var canvas = document.getElementById("colors_sketch");

  		var data = canvas.toDataURL();  	

    	new_project(URL,data,$("#ProjectName").val(), true);

    }


    function logout_Prompt () {
    	logout(URL);
    }

