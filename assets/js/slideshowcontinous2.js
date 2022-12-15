//Create an array of images 
var imageArray = ["assets/images/art4.png", "assets/images/art5.png", "assets/images/art6.png"];

//Save total size of array to variable arraySize
var arraySize = imageArray.length;

//Set wait time between slides in milliseconds 
setInterval(runit, 2500);

var x = 1; //Used to count up to arraySize

//Function runit play slideshow when called 
function runit() {
    //Set image to next picture in image array
    document.getElementById('slideshow').src = imageArray[x];

    //Increase count by 1
    x++;

    //If count has reached the last index of imageArray than set count back to starting index.
    if (x === arraySize) {
        x = 0;
    }
}

