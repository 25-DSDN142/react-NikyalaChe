// ----=  Faces  =----
/* load images here */
let myMeadowImage;
let eyeLashLeftImage, eyeLashRightImage;



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
    //console.log(face);
    if (showKeypoints) {
      drawPoints(face)
      
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

   // face outline
    noStroke()
    fill(240, 215, 161); //skin tone
    ellipse(faceCenterX, faceCenterY, faceWidth, faceheight); //outer eye

// Ai helped me here but some modification have been made 
      let eyeLashLeftX = face.keypoints[156].x;
      let eyeLashLeftY = face.keypoints[156].y;
      let eyeLashRightX = face.keypoints[342].x;
      let eyeLashRightY = face.keypoints[342].y;

      image(eyeLashLeftImage, eyeLashLeftX - 20, eyeLashLeftY - 10, 90, 50);
      image(eyeLashRightImage, eyeLashRightX - 20, eyeLashRightY - 10, 90, 50);
//Ai finished here
      

   // eyes
    noStroke();
    fill(0); //outer eye - black
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.5, leftEyeHeight*1.5);
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*1.5, rightEyeHeight*1.5);

    fill(255); //white of eye
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight/1);
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth, rightEyeHeight/1);

    fill(132, 166, 191) //blue iris
    circle(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*0.3);
    circle(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*0.3);

    fill(255); //white highlight
    circle(leftEyeCenterX+2, leftEyeCenterY-2, leftEyeWidth*0.1);
    circle(rightEyeCenterX+2, rightEyeCenterY-2, rightEyeWidth*0.1);
   


 //drawPoints(face.leftEye);
    drawPoints(face.leftEyebrow);
    //drawPoints(face.lips);
    //drawPoints(face.rightEye);
    drawPoints(face.rightEyebrow);
    // drawPoints(face.faceOval);



    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

function eyeFlowers(x,y) {
  fill(225, 133, 141); // pink petals
  ellipse(x, y, 30, 10);
  ellipse(x, y, 10, 30);
  fill(247, 149, 29); //orange
  circle(x,y, 5); // middle of flower

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
    eyeFlowers(element.x, element.y, 3);
  }
  pop()

}



//draw x on pupils
    // drawX(rightEyeCenterX,rightEyeCenterY);
    // drawX(leftEyeCenterX,leftEyeCenterY);


    // drawX(noseTipX,noseTipY); 

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);
