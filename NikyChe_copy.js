// ----=  Faces  =----
/* load images here */
let myMeadowImage;
let eyeLashLeftImage, eyeLashRightImage;

let isMouthOpen = false;


function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');

 
     myMeadowImage = loadImage('/images/meadowBackground.png');

    eyeLashLeftImage = loadImage('/images/eyeLashLeft.png');
    eyeLashRightImage = loadImage('/images/eyeLashRight.png');
  
  
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




    //image(eyeLashLeftImage, leftOuterCorner.x, leftOuterCorner.y);
    //image(eyeLashRightImage, rightOuterCorner.x, rightOuterCorner.y);


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
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;
/*
    Start drawing on the face here
    */


 // FACE 
    noStroke()
    fill(240, 215, 161); //skin tone
    ellipse(faceCenterX, faceCenterY, faceWidth, faceheight); //outer eye

  // EYELASHES
// Ai helped me here but some modification have been made 
      let eyeLashLeftX = face.keypoints[33].x;
      let eyeLashLeftY = face.keypoints[33].y;
      let eyeLashRightX = face.keypoints[263].x;
      let eyeLashRightY = face.keypoints[263].y;

      let lastLashWidth = leftEyeWidth * 2.0;
      let lastLashHeight = leftEyeHeight * 3.5;
      let rightLashWidth = rightEyeWidth * 2.0;
      let rightLashHeight = rightEyeHeight * 3.5;

      image(eyeLashLeftImage, eyeLashLeftX - 18 - lastLashWidth/2, eyeLashLeftY - lastLashHeight/2, lastLashWidth, lastLashHeight);
      image(eyeLashRightImage, eyeLashRightX + 18 - rightLashWidth/2, eyeLashRightY - rightLashHeight/2, rightLashWidth, rightLashHeight);
//Ai finished here
      

   // EYES
    noStroke();

    
    fill(121, 121, 121); //outer eye - grey
    //circle(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.5);
    //circle(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*1.5);
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.8, leftEyeHeight*2.3);
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*1.8, rightEyeHeight*2.3);

    let middleEyeColor = color(255);
    middleEyeColor.setAlpha(160);
    fill(middleEyeColor) //white of eye
    //fill(255); //white of eye
    //circle(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*0.8);
    //circle(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*0.8);
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.4, leftEyeHeight*1.4);
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*1.4, rightEyeHeight*1.4);

    let irisColor = color(132, 166, 191);
    irisColor.setAlpha(180);
    fill(irisColor) //blue iris
    //fill(132, 166, 191) //blue iris
    circle(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*0.5);
    circle(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*0.5);
    //ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*0.8, leftEyeHeight*0.8);
    //ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*0.8, rightEyeHeight*0.8);

    fill(255); //white highlight
    circle(leftEyeCenterX - 2, leftEyeCenterY - 5, leftEyeWidth*0.2);
    circle(rightEyeCenterX - 2, rightEyeCenterY - 5, rightEyeWidth*0.2);

  // nose 
  //function drawNoseFlower(noseTipX, noseTipY, size = 30) {
  //  push();
  //  translate(noseTipX, noseTipY);
//
  //  fill(245, 105, 166); //pink 
//
  //  for (let i = 0; i < 8; i++) { // 8 petals, every 45 degrees
  //    rotate(radians(45 * i));
  //    ellipse(0, -size/2, size/3, size);
  //  }
  //  fill(237, 212, 128);
  //  circle(0, 0, size/2); // middle of flower
//
//
  //  pop();
  //}
  //drawNoseFlower(noseTipX, noseTipY, 30);




 //drawPoints(face.leftEye);
    drawPoints(face.leftEyebrow);
    //drawPoints(face.lips);
    //drawPoints(face.rightEye);
    drawPoints(face.rightEyebrow);
    // drawPoints(face.faceOval);


   //LIPS - DIFFERENT FROM EYEBROWS
   //connect lip keypoints with lines 
  let lipPoints = face.lips.keypoints;
  stroke(255, 0, 110);
  strokeWeight(2);
  fill(255, 0, 110);
  beginShape();
  for (let i = 0; i < 11; i++) {
    vertex(lipPoints[i].x, lipPoints[i].y);

  }
  endShape(CLOSE);

  // draw flowers on lip keypoints
  //for (let i = 0; i < face.lips.keypoints.length; i ++) {
    //let lipPoint = face.lips.keypoints[i];
    //noStroke();
    //fill(255, 0, 110);

    //eyebrowFlowers(lipPoint.x, lipPoint.y, 8, [255, 0, 110]); //same flowers like the brows but smaller

  //}
  
    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}



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


//flowers with 4 petals
//function eyebrowFlowers(x,y) {
//  fill(225, 133, 141); // pink petals
//  ellipse(x, y, 30, 10);
//  ellipse(x, y, 10, 30);
//  fill(247, 149, 29); //orange
//  circle(x,y, 10); // middle of flower

}

//function drawX(X, Y) {
//  push()
//
//  strokeWeight(15)
//  line(X - 20, Y - 20, X + 20, Y + 20)
//  line(X - 20, Y + 20, X + 20, Y - 20)
//
//  pop()
//}


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



//draw x on pupils
    // drawX(rightEyeCenterX,rightEyeCenterY);
    // drawX(leftEyeCenterX,leftEyeCenterY);


    // drawX(noseTipX,noseTipY); 

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);
