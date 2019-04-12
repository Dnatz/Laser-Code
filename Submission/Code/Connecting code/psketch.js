/////////SERIAL CONTROL/////////

var serial;
var portName = '/dev/cu.usbmodem14101';
var inData;
var switch1;
var switch2;
var switch3;
var switch4;
var switch5;
var switch6;
var switch7;
var switch8;
var switch9;





var mySound;
function preload(){
  soundFormats('mp3','ogg');
  mySound = loadSound('alarm.mp3');

}







function setup() {
  mySound.setVolume(0.0);
  mySound.play();


  createCanvas(window.innerHeight*4/3, window.innerHeight);
  background(255);
  ellipseMode(RADIUS);
  strokeWeight(0);
  // textAlign(CENTER, CENTER);


  serial = new p5.SerialPort();
  serial.on('list', printList);
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);
 
 serial.list();
 serial.open(portName);










}


var F1;
var F2;
var F3;
var F4;


function draw() {
background("111");
fill("black");


//console.log(switch1,switch2,switch3,switch4);


stroke("purple");




//>252
//>116
//>175
//>227

//limits of sensors
var A = 255;
var B = 119;
var C = 179;
var D = 229;




if(switch1>A){
  fill("red");
    mySound.setVolume(0.1);

} else{
    mySound.setVolume(0.0);

  fill("green");
}

  ellipse(width/5*1, switch1,50,50);
  // text(switch1,width/5*1, switch1);




if (switch1 >A|| switch2 >B|| switch3 >C|| switch4>D){
        mySound.setVolume(0.1);

      } else{
              mySound.setVolume(0.0);

      }



if(switch2>B){
      // mySound.setVolume(0.1);

  fill("red");
} else{
    // mySound.setVolume(0.0);

  fill("green");
}

  ellipse(width/5*2, switch2,50,50);
    // text(switch2,width/5*2, switch2);




if(switch3>C){
      // mySound.setVolume(0.1);

  fill("red");
} else{
    // mySound.setVolume(0.0);

  fill("green");
}

  ellipse(width/5*3, switch3,50,50);
    // text(switch3,width/5*3, switch3);




if(switch4>D){
      // mySound.setVolume(0.1);

  fill("red");
} else{
    // mySound.setVolume(0.0);

  fill("green");
}
  
  ellipse(width/5*4, switch4,50,50);
    // text(switch4,width/5*4, switch4);









}

















///////////////////////////////////
//////////SERIAL CONTROL///////////
///////////////////////////////////

 
 function serverConnected(){
  console.log('connected to server.');
}
function portOpen() {
  console.log('the serial port opened.')
}
function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  var inString = serial.readStringUntil('\r\n');
  //console.log(inString);

  //check to see that there's actually a string there:
  if (inString.length > 0 ) {
    var sensors = split(inString, ',');
    // console.log(sensors);
    if (sensors.length >= 4) {
      switch1 = sensors[0];
      switch2 = sensors[1];
      switch3 = sensors[2];
      switch4 = sensors[3];
      switch5 = sensors[4];
      //not using these
      /*
      switch6 = sensors[5];
      switch7 = sensors[6];
      switch8 = sensors[7];
      switch9 = sensors[8];
      */

    }
  }
}
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
function portClose() {
  console.log('The serial port closed.');
}
// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 console.log(i + " " + portList[i]);
 }
}



