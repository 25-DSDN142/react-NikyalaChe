// ----=  Faces  =----
/* load images here */
let myMeadowImage;
let eyeLashLeftImage, eyeLashRightImage;


 // Thank you Jack B. Du for these lip lists! - refered to a video from Coding Train for this 
 // //seperates the inner and outer liness of lips
// Define the exterior lip landmark indices for drawing the outer lip contour
let lipsExterior = [267, 269, 270, 409, 291, 375, 321, 405, 314, 17, 84, 181, 91, 146, 61, 185, 40, 39, 37, 0];

// Define the interior lip landmark indices for drawing the inner lip contour
let lipsInterior = [13, 312, 311, 310, 415, 308, 324, 318, 402, 317, 14, 87, 178, 88, 95, 78, 191, 80, 81, 82];



function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');

 
     myMeadowImage = loadImage('images/meadowBackground.png', () => console.log("background loaded"))
     crownImage = loadImage('images/crown.png');
     eyeLashLeftImage = loadImage('images/eyeLashLeft.png');
     eyeLashRightImage = loadImage('images/eyeLashRight.png');
  
}

function drawInteraction(faces, hands) {

  
  image(myMeadowImage, 0, 0, 1280, 960);
  
  imageMode(CORNER);

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    //console.log(face.keypoints);
    if (showKeypoints) {
      drawPoints(face.lips);
    }


    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
 

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

/*
    Start drawing on the face here
    */

 // FACE 
    noStroke()
    fill(240, 215, 161); //skin tone
    ellipse(faceCenterX, faceCenterY, faceWidth, faceheight); //outer eye
    

// CROWN --- crown moving with head tilt 


let leftHead = face.keypoints[234];
let rightHead = face.keypoints[454];

let crownCenterX = (leftHead.x + rightHead.x) / 2;
let crownCenterY = face.faceOval.centerY - face.faceOval.height * 0.7; //moving the crown above the head


//size per the face
let crownWidth = faceWidth * 1.0;
let crownHeight = faceheight * 0.5;


//estimate the tilt by comparing the eye positions
if (face.rightEye && face.leftEye) {
let distanceX = rightHead.x - leftHead.x;
let distanceY = rightHead.y - leftHead.y;

let headTilt = atan2(distanceY, distanceX); 


//draw crown rotated

push();
translate(crownCenterX, crownCenterY);
rotate(headTilt);
imageMode(CENTER);
image(crownImage, -30, 0, crownWidth, crownHeight);
pop();
  

imageMode(CORNER);
}
  
  // EYELASHES
// Ai helped me here but some modification have been made 
      let eyeLashLeftX = face.keypoints[33].x;
      let eyeLashLeftY = face.keypoints[33].y;
      let eyeLashRightX = face.keypoints[263].x;
      let eyeLashRightY = face.keypoints[263].y;

      let leftLashWidth = leftEyeWidth * 2.0;
      let leftLashHeight = leftEyeHeight * 3.5;
      let rightLashWidth = rightEyeWidth * 2.0;
      let rightLashHeight = rightEyeHeight * 3.5;

      image(eyeLashLeftImage, eyeLashLeftX - 18 - leftLashWidth/2, eyeLashLeftY - leftLashHeight/2, leftLashWidth, leftLashHeight);
      image(eyeLashRightImage, eyeLashRightX + 18 - rightLashWidth/2, eyeLashRightY - rightLashHeight/2, rightLashWidth, rightLashHeight);
//Ai finished here
     

   // EYES - FINAL VERSION - MAKE CHANGES TO TYPE BEFORE SUBMITTING
     //outer eye
      noStroke();  
      fill(64, 62, 63); //outer eye - grey
      ellipse(leftEyeCenterX - 10, leftEyeCenterY, leftEyeWidth*1.4, leftEyeHeight+70);
      ellipse(rightEyeCenterX + 10, rightEyeCenterY, rightEyeWidth*1.4, rightEyeHeight+70);
      
     // middle white after outer
      fill(255); //white of eye
      ellipse(leftEyeCenterX - 10, leftEyeCenterY + 4, leftEyeWidth*1.1, leftEyeHeight+50);
      ellipse(rightEyeCenterX + 10, rightEyeCenterY + 4, rightEyeWidth*1.1, rightEyeHeight+50)
      
     //ring around irs
      fill(64, 62, 63);
      ellipse(leftEyeCenterX - 14, leftEyeCenterY + 8, leftEyeWidth*0.7, leftEyeHeight + 30); 
      ellipse(rightEyeCenterX + 14, rightEyeCenterY +8, rightEyeWidth*0.7, rightEyeHeight + 30);

     //iris
      fill(132, 166, 191) //blue iris
      ellipse(leftEyeCenterX - 14, leftEyeCenterY + 11, leftEyeWidth*0.6, leftEyeHeight + 23); 
      ellipse(rightEyeCenterX + 14, rightEyeCenterY + 11, rightEyeWidth*0.6, rightEyeHeight + 23);
      fill(64, 62, 63); //black iris -inside
      ellipse(leftEyeCenterX - 14, leftEyeCenterY + 10, leftEyeWidth*0.4, leftEyeHeight + 13); 
      ellipse(rightEyeCenterX + 14, rightEyeCenterY + 10, rightEyeWidth*0.4, rightEyeHeight + 13);

     //highlights
      fill(255); //white highlight
      circle(leftEyeCenterX - 20, leftEyeCenterY - 2, leftEyeWidth*0.2); 
      circle(rightEyeCenterX + 20, rightEyeCenterY - 2, rightEyeWidth*0.2);

      circle(leftEyeCenterX - 15, leftEyeCenterY + 3, leftEyeWidth*0.1); 
      circle(rightEyeCenterX + 15, rightEyeCenterY + 3, rightEyeWidth*0.1);

      circle(leftEyeCenterX - 20, leftEyeCenterY + 13, leftEyeWidth*0.05); 
      circle(rightEyeCenterX + 20, rightEyeCenterY + 13, rightEyeWidth*0.05);


    // ---- END OF EYES ----



 //drawPoints(face.leftEye);
    drawPoints(face.leftEyebrow);
    //drawPoints(face.lips);
    //drawPoints(face.rightEye);
    drawPoints(face.rightEyebrow); 
    // drawPoints(face.faceOval);



// ----- LIPS -----
//connect lip keypoints with lines - fill them in but only half of lips done
  //let lipPoints = face.lips.keypoints;
  stroke (255, 0, 110);
  strokeWeight (2);
  //noFill();
  fill(255, 0, 110);
  beginShape();
  for (let i = 0; i < lipsExterior.length; i++) {
    let index = lipsExterior[i];
    let keypoints = face.keypoints[index]; 

    vertex(keypoints.x, keypoints.y);
  }
   endShape (CLOSE);

  stroke (255, 0, 110);
  strokeWeight (2);
  //noFill();
  fill(238, 162, 163);
  beginShape();
  for (let i = 0; i < lipsInterior.length; i++) {
    let index = lipsInterior[i];
    let keypoints = face.keypoints[index]; 

    vertex(keypoints.x, keypoints.y);
  }
   endShape (CLOSE);
 }
 
  // ----- END OF LIPS -----

    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 

// EYEBROWS
//flowers with 8 petals
function eyebrowFlowers(x, y, size = 20, petalColor = null) {
  push();
  translate(x, y);

  // sample background color
  let bgColor = get(x/1.5, y/1.5); 
  
  for (let i = 0; i < 8; i++) { // 8 petals, every 45 degrees
     rotate(radians(45 * i));
     if (petalColor) {
       fill(petalColor[0], petalColor[1], petalColor[2]); // custom petal color
     } else {
        fill(bgColor[0], bgColor[1], bgColor[2]); //sample background color for petals
     }
     
      // fill(225, 133, 141); // pink petals
      ellipse(0, - size/2, size/3, size); // petal
  }
  
 fill(247, 149, 29); //orange
circle(0, 0, size/2); // middle of flower
pop();



}



// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(217, 67, 172); 
    eyebrowFlowers(element.x, element.y, 20); // smaller flowers
  }
  pop()

}
