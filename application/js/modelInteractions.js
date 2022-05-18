//adapted from example code 'benskitchen.com'

function cokeScene() {
	nSwitch = 0;
	document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function spriteScene() {
	nSwitch = 1;
	document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function fantaScene() {
	nSwitch = 2;
	document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

var spinning = false;

function spin() {
	spinning = !spinning;
	document.getElementById('model__Can-RotationTimer').setAttribute('enabled', spinning.toString());
	document.getElementById('model__Bottle-RotationTimer').setAttribute('enabled', spinning.toString());
	document.getElementById('model__Cup-RotationTimer').setAttribute('enabled', spinning.toString());
}

function stopRotation() {
	spinning = false;
	document.getElementById('model__Can-RotationTimer').setAttribute('enabled', spinning.toString());
	document.getElementById('model__Bottle-RotationTimer').setAttribute('enabled', spinning.toString());
	document.getElementById('model__Cup-RotationTimer').setAttribute('enabled', spinning.toString());
}

function animateCan() {
	if (document.getElementById('model__Can-RotationTimer').getAttribute('enabled') != 'true')
		document.getElementById('model__Can-RotationTimer').setAttribute('enabled', 'true');
	else
		document.getElementById('model__Can-RotationTimer').setAttribute('enabled', 'false');
}

function animateBottle() {
	if (document.getElementById('model__Bottle-RotationTimer').getAttribute('enabled') != 'true')
		document.getElementById('model__Bottle-RotationTimer').setAttribute('enabled', 'true');
	else
		document.getElementById('model__Bottle-RotationTimer').setAttribute('enabled', 'false');
}

function animateCup() {
	if (document.getElementById('model__Cup-RotationTimer').getAttribute('enabled') != 'true')
		document.getElementById('model__Cup-RotationTimer').setAttribute('enabled', 'true');
	else
		document.getElementById('model__Cup-RotationTimer').setAttribute('enabled', 'false');
}

function wireFrame() {
	var e = document.getElementById('wire');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headLight() {
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function omniLight() {
	lightOn = !lightOn;
	document.getElementById('model__pointLight-Right').setAttribute('on', lightOn.toString());
	document.getElementById('model__pointLight-Left').setAttribute('on', lightOn.toString());
	document.getElementById('model__pointLight-Back').setAttribute('on', lightOn.toString());
	document.getElementById('model__pointLight-Front').setAttribute('on', lightOn.toString());
	console.log(lightOn);
}

function cameraFront() {
	document.getElementById('model__CameraFront').setAttribute('bind', 'true');
}

function cameraBack() {
	document.getElementById('model__CameraBack').setAttribute('bind', 'true');
}

function cameraLeft() {
	document.getElementById('model__CameraLeft').setAttribute('bind', 'true');
}

function cameraRight() {
	document.getElementById('model__CameraRight').setAttribute('bind', 'true');
}

function cameraTop() {
	document.getElementById('model__CameraTop').setAttribute('bind', 'true');
}

function cameraBottom() {
	document.getElementById('model__CameraBottom').setAttribute('bind', 'true');
}