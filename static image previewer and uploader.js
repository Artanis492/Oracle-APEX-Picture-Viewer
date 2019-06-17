function readURL(input) {    
    if (input.files &&    
        input.files[0] 
        //&&  input.files[0].type.match('image.*')
       ) { 
            var reader = new FileReader();    
            var down = false;
            var up = false;
            var doc = $(document);

            doc.on('mousedown', function() {
                down = true;
                up = false;
                }).on('mouseup', function() {
                down = false;  
                up = true;
                });

                if (down) {}
        
                else {

        reader.onload = function (e) {   

                var savedImage = $('THE JQUERY SELECTOR OF THE HTML ELEMENT THAT HOLDS THE PICTURE');
                savedImage.attr('src', e.target.result);  


   savedImage.on('mouseover touchstart wheel', function(e){
		   e.stopPropagation();
		   e.preventDefault();
            if (e.originalEvent.deltaY < 0) {
				if (savedImage.css("transform") && savedImage.css("transform") !== "none") {
				var scale = savedImage.css("transform").split(',')[3].trim();
				var iNum = parseInt(scale)+1;
				}
				else { var iNum = 2}
				if ( iNum < 15 ) {
          savedImage.css({'transform': 'scale(' + iNum + ')'});
		  }
            }
        })
        .on('mouseout touchend touchcancel wheel', function(e){
		   e.stopPropagation();
		   e.preventDefault();
            if (e.originalEvent.deltaY  >0) {
				if (savedImage.css("transform") && savedImage.css("transform") !== "none") {
				var scale = savedImage.css("transform").split(',')[3].trim();
				var iNum = parseInt(scale)-1;
				}
				else { var iNum = 1}
				if ( iNum > 0 ) {
          savedImage.css({'transform': 'scale(' + iNum + ')'});
				}
            }
        })
        .on('mousemove touchmove', function(e){
          savedImage.css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
        })

            } 
        }

            try {    
                reader.readAsDataURL(input.files[0]);    
            }    
            catch(err) {    
                alert("Error fetching the picture from the database: " + err.message);    
            }     
    }    
}    
///////////////////////////////////////   
$("HTML ELEMENT FOR THE FILE BROWSER").change(function(){    
    readURL(this);   
});   
