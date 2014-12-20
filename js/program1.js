// program file for the interactions

window.sayCheese = null;

$(function() {
    window.sayCheese = new SayCheese('#videofeedback', { snapshots: true });
    window.sayCheese.on('snapshot', function(snapshot) {
	// a snapshot has been taken, do something with it :)
	alert(snapshot);
    });

    sayCheese.on('start', function() {
	// do something when started
	var video = $(window.sayCheese.video);
	video.css({
	    display: "block",
	    "margin-left": "auto",
	    "margin-right": "auto",
	});
	var w = parseInt(video.css("width"));
	var h = 3 * w / 4;
	var h1 = 0.8 * h;    // height of the inner frame
	var w1 = 3 * h1 / 4; // width of the inner frame
	var m = 6;           // margin around the inner frame

	console.log("Dimension: "+w+"x"+h);
	$('#videofeedback').css({                   /* mirrors the video feedback */
	    transform: "rotateY(180deg)",
	    "-webkit-transform": "rotateY(180deg)", /* Safari and Chrome */
	    "-moz-transform": "rotateY(180deg)",    /* Firefox */
	});

	var canvas = document.createElement("canvas");
	video.parent().append($(canvas));
	var correctionH = -20;
	$(canvas).css({
	    position: "relative",
	    top: -h,
	    left: w+correctionH, // not (-w) as there is rotationY(-180)
	}).attr({
	    width: w,
	    height: h,
	});
	var ctx = canvas.getContext("2d");
	ctx.strokeRect((w-w1)/2,(h-h1)/2,w1,h1); 
	ctx.strokeStyle="#ff0000";
	ctx.strokeRect((w-w1-2*m)/2,(h-h1-2*m)/2,w1+2*m,h1+2*m); 
    });

    window.sayCheese.start();
});

function snap(){
    window.sayCheese.takeSnapshot();
}
