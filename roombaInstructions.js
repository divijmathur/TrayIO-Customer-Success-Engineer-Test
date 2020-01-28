var fs = require("fs");

// function describing the notation for specific directions and what the roomba should do when in these specific situations
function runInstructions (cardinalDirection) {
  switch (cardinalDirection) {
    case 'N':
      currCoordinates[1] = parseInt(currCoordinates[1]) + 1;
      break;
    case 'E':
      currCoordinates[0] = parseInt(currCoordinates[0]) + 1;
      break;
    case 'S':
      currCoordinates[1] = parseInt(currCoordinates[1]) - 1;
      break;
    case 'W':
      currCoordinates[0] = parseInt(currCoordinates[0]) - 1;
      break;
    default:
      break;
  }
}

function dirtCheck(){
  if(patchOfDirt.indexOf(currCoordinates.join(' ') > -1 )){
    console.log(`Patch cleaned at position (${currCoordinates})`);
    cleanPatchCounter += 1;
    // to delete the patch of dirt that has already been cleaned by our roomba
    patchOfDirt.splice(patchOfDirt.indexOf(currCoordinates.join(' '),1));
  }
}

// checking if the roomba is touching the wall
function touchingWall(){
  return (currCoordinates[0] === 0 && cardinalDirections[i] === 'W' || 
  currCoordinates[0] === dimensionOfRoom[0] && cardinalDirections[i] === 'E') ||
  (currCoordinates[1] === 0 && cardinalDirections[i]==='S' || 
  currCoordinates[1] === dimensionOfRoom[1] && cardinalDirections[i]==='N'); 
}

// counter to keep track of which patches of dirt are clean
var cleanPatchCounter = 0;

// take input from text file and convert it to a string
var text = fs.readFileSync('input.txt').toString('utf-8');
var fileContent = text.split("\n");

// index of room dimensions that have been given to us
var dimensionOfRoom= fileContent[0].split(' ');

// starting point of roomba that is given to us
var currCoordinates = fileContent[1].split(' ');

// the index of the cardinal directions given to us
var max_index = fileContent.length - 1;
var cardinalDirections = fileContent[max_index].split('');

// remove the items we already know
fileContent.splice(max_index,1);
fileContent.splice(0,2);

// remaning items in the string are the number of dirt patches
patchOfDirt = fileContent;

// lets loop through the cardinal directions
for(var i = 0; i < cardinalDirections.length;i++){
  if(touchingWall() === false){
    runInstructions(cardinalDirections[i]);
    dirtCheck();
  } else {
    console.log(`Hit wall at the position (${currCoordinates}) and cardinal Direction (${cardinalDirections[i]})`);
  }
}

console.log(`The final Position of the Roomba is (${currCoordinates})`);
console.log(`The number of patches that have been cleaned is (${cleanPatchCounter})`);
