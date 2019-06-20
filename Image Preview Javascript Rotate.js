jQuery.fn.rotate = function(angle,whence) {
	var p = this.get(0);

	// we store the angle inside the image tag for persistence
	if (!whence) {
		p.angle = ((p.angle==undefined?0:p.angle) + angle) % 360;
	} else {
		p.angle = angle;
	}

	if (p.angle >= 0) {
		var rotation = Math.PI * p.angle / 180;
	} else {
		var rotation = Math.PI * (360+p.angle) / 180;
	}
	var costheta = Math.cos(rotation);
	var sintheta = Math.sin(rotation);

	if (document.all && !window.opera) {
		var canvas = document.createElement('img');

		canvas.src = p.src;
		canvas.height = p.height;
		canvas.width = p.width;

		canvas.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11="+costheta+",M12="+(-sintheta)+",M21="+sintheta+",M22="+costheta+",SizingMethod='auto expand')";
	} else {
		var canvas = document.createElement('canvas');
		if (!p.oImage) {
			canvas.oImage = new Image();
			canvas.oImage.src = p.src;
		} else {
			canvas.oImage = p.oImage;
		}

		canvas.style.width = canvas.width = Math.abs(costheta*canvas.oImage.width) + Math.abs(sintheta*canvas.oImage.height);
		canvas.style.height = canvas.height = Math.abs(costheta*canvas.oImage.height) + Math.abs(sintheta*canvas.oImage.width);

		var context = canvas.getContext('2d');
		context.save();
		if (rotation <= Math.PI/2) {
			context.translate(sintheta*canvas.oImage.height,0);
		} else if (rotation <= Math.PI) {
			context.translate(canvas.width,-costheta*canvas.oImage.height);
		} else if (rotation <= 1.5*Math.PI) {
			context.translate(-costheta*canvas.oImage.width,canvas.height);
		} else {
			context.translate(0,-sintheta*canvas.oImage.width);
		}
		context.rotate(rotation);
		context.drawImage(canvas.oImage, 0, 0, canvas.oImage.width, canvas.oImage.height);
		context.restore();
	}
	canvas.id = p.id;
	canvas.angle = p.angle;

	p.parentNode.replaceChild(canvas, p);
		        var savedImage = $('THIS WOULD BE THE JQUERY SELECTOR OF THE HTML ELEMENT FOR THE PICTURE');
			var down = false;
			var doc = $(document);
	doc.on('mousedown', function() {
		down = true;
	}).on('mouseup', function() {
		down = false;  
	});
			
			if (down) {}
			else{
	   
       savedImage.on('mouseover touchstart', function(e){
		   e.stopPropagation();
		   e.preventDefault();
           savedImage.on('wheel', function(e){
            if (e.originalEvent.deltaY < 0) {
				if ($('THIS WOULD BE THE JQUERY SELECTOR OF THE HTML ELEMENT FOR THE PICTURE').css("transform") && $('#imagePreview').css("transform") !== "none") {
				var scale = $('THIS WOULD BE THE JQUERY SELECTOR OF THE HTML ELEMENT FOR THE PICTURE').css("transform").split(',')[3].trim();
				var iNum = parseInt(scale)+1;
				}
				else { var iNum = 2}
				if ( iNum < 15 ) {
          savedImage.css({'transform': 'scale(' + iNum + ')'});
		  }
            }
            })
        })
        .on('mouseout touchend touchcancel wheel', function(e){
		   e.stopPropagation();
		   e.preventDefault();
            if (e.originalEvent.deltaY  >0) {
				if ($('THIS WOULD BE THE JQUERY SELECTOR OF THE HTML ELEMENT FOR THE PICTURE').css("transform") && $('THIS WOULD BE THE JQUERY SELECTOR OF THE HTML ELEMENT FOR THE PICTURE').css("transform") !== "none") {
				var scale = $('THIS WOULD BE THE JQUERY SELECTOR OF THE HTML ELEMENT FOR THE PICTURE').css("transform").split(',')[3].trim();
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

jQuery.fn.rotateRight = function(angle) {
	this.rotate(angle==undefined?90:angle);
}

jQuery.fn.rotateLeft = function(angle) {
	this.rotate(angle==undefined?-90:-angle);
}
