// ----=  Faces  =----
/* load images here */
let myMeadowImage;
let eyeLashLeftImage, eyeLashRightImage;

let eyesClosed = false;


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

//connect lip keypoints with lines 
 //  let lips = face.lips
 // beginShape();
 // for (let i = 0; i < lips.keypoints.length; i ++) {
 //   let lipPoint = face.lip.keypoints[i];
 //   fill(255, 0, 255);
 //   noStroke();
 //   vertex(face.lip.keypoints.x, face.lip.keypoints.y);
//
 // }
 // endShape();
  

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
     

   // EYES - FINAL VERSION - MAKE CHANGES TO TYPE BEFORE SUBMITTING
     //outer eye
      noStroke();  
      fill(64, 62, 63); //outer eye - grey
      ellipse(leftEyeCenterX - 10, leftEyeCenterY, leftEyeWidth*1.4, leftEyeHeight+70);
      ellipse(rightEyeCenterX + 10, rightEyeCenterY, rightEyeWidth*1.4, rightEyeHeight+70);
      //circle(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.4); // other eyes i like
      //circle(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*1.4);
      //ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.8, leftEyeHeight*2.3);
      //ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*1.8, rightEyeHeight*2.3);
      
     // middle white after outer
      //let middleEyeColor = color(255); - light transparency white
      //middleEyeColor.setAlpha(160);
      //fill(middleEyeColor) //white of eye
      fill(255); //white of eye
      ellipse(leftEyeCenterX - 10, leftEyeCenterY + 4, leftEyeWidth*1.1, leftEyeHeight+50);
      ellipse(rightEyeCenterX + 10, rightEyeCenterY + 4, rightEyeWidth*1.1, rightEyeHeight+50)
      //circle(leftEyeCenterX + 5, leftEyeCenterY + 5, leftEyeWidth + 5); //other eye option I like 
      //circle(rightEyeCenterX + 5, rightEyeCenterY + 5, rightEyeWidth + 5);
      //ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.4, leftEyeHeight*1.4);
      //ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*1.4, rightEyeHeight*1.4);
  
     //ring around irs
      fill(64, 62, 63);
      ellipse(leftEyeCenterX - 14, leftEyeCenterY + 8, leftEyeWidth*0.7, leftEyeHeight + 30); 
      ellipse(rightEyeCenterX + 14, rightEyeCenterY +8, rightEyeWidth*0.7, rightEyeHeight + 30);

     //iris
      //let irisColor = color(132, 166, 191);
      //irisColor.setAlpha(180);
      //fill(irisColor) //blue iris
      fill(132, 166, 191) //blue iris
      ellipse(leftEyeCenterX - 14, leftEyeCenterY + 11, leftEyeWidth*0.6, leftEyeHeight + 23); 
      ellipse(rightEyeCenterX + 14, rightEyeCenterY + 11, rightEyeWidth*0.6, rightEyeHeight + 23);
      fill(64, 62, 63); //black iris -inside
      ellipse(leftEyeCenterX - 14, leftEyeCenterY + 10, leftEyeWidth*0.4, leftEyeHeight + 13); 
      ellipse(rightEyeCenterX + 14, rightEyeCenterY + 10, rightEyeWidth*0.4, rightEyeHeight + 13);

      //circle(leftEyeCenterX + 5, leftEyeCenterY + 5, leftEyeWidth*0.8); // other eyes I like
      //circle(rightEyeCenterX + 5, rightEyeCenterY + 5, rightEyeWidth*0.8);
      //circle(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*0.5);
      //circle(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*0.5);
      //ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*0.8, leftEyeHeight*0.8);
      //ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*0.8, rightEyeHeight*0.8);
     
     //highlights
      fill(255); //white highlight
      circle(leftEyeCenterX - 20, leftEyeCenterY - 2, leftEyeWidth*0.2); 
      circle(rightEyeCenterX + 20, rightEyeCenterY - 2, rightEyeWidth*0.2);

      circle(leftEyeCenterX - 15, leftEyeCenterY + 3, leftEyeWidth*0.1); 
      circle(rightEyeCenterX + 15, rightEyeCenterY + 3, rightEyeWidth*0.1);

      circle(leftEyeCenterX - 20, leftEyeCenterY + 13, leftEyeWidth*0.05); 
      circle(rightEyeCenterX + 20, rightEyeCenterY + 13, rightEyeWidth*0.05);



      //circle(leftEyeCenterX + 1, leftEyeCenterY - 5, leftEyeWidth*0.3); // other eyes I like
      //circle(rightEyeCenterX + 1, rightEyeCenterY - 5, rightEyeWidth*0.3);
      //circle(leftEyeCenterX - 2, leftEyeCenterY - 5, leftEyeWidth*0.2);
      //circle(rightEyeCenterX - 2, rightEyeCenterY - 5, rightEyeWidth*0.2);

    checkIfEyesOpen(face);
    if (eyesClosed) {
      circle(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.4);
      circle(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*1.4);
      
    }

    // ---- END OF EYES ----


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
   beginShape();
   for (let i = 0; i < face.lips.keypoints.length; i ++) {
    let lipPoint = face.lips.keypoints[i];
     fill(255, 0, 110);
    noStroke();
   
   

    vertex(lipPoint.x, lipPoint.y); //same flowers like the brows but smaller

  }
 

   //fill lips with color - curveVertex to make them curved - FINAL VERSION
  //let lipPoints = face.lips.keypoints
  // noStroke();
  // fill(255, 0, 110, 150); //pinky transparent lips
  // beginShape();
  // for (let i = 0; i < lipPoints.length; i++) {
  //   curveVertex(lipPoints[i].x, lipPoints[i].y);
  // }
  // endShape(CLOSE);

   // draw flowers on lip keypoints
  //for (let i = 0; i < face.lips.keypoints.length; i ++) {
    //let lipPoint = face.lips.keypoints[i];
    //noStroke();
    //fill(255, 0, 110);

    //eyebrowFlowers(lipPoint.x, lipPoint.y, 8, [255, 0, 110]); //same flowers like the brows but smaller

  //}
  // ----- END OF LIPS -----



    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}



function checkIfEyesOpen(face) {

  let upperEye = face.keypoints[27]
  let lowerEye = face.keypoints[23]
  // ellipse(lowerLip.x,lowerLip.y,20)
  // ellipse(upperLip.x,upperLip.y,20)

  let d = dist(upperEye.x, upperEye.y, lowerEye.x, lowerEye.y);
  //console.log(d)
  if (d < 20) {
    isEyesOpen = false;
  } else {
    isEyesOpen = true;
  }

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

   
    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);

    // drawX(noseTipX,noseTipY); 

}


function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
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



//draw x on pupils
    // drawX(rightEyeCenterX,rightEyeCenterY);
    // drawX(leftEyeCenterX,leftEyeCenterY);


    // drawX(noseTipX,noseTipY); 

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);
