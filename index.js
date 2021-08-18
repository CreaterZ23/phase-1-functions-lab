// Code your solution in this file!

// const hqLocation = 42;
// let startBlock;
// let endBlock;
// let distance;
// let distanceInFeet;
// let cost;


// function distanceFromHqInBlocks(startBlock) {
//     if (startBlock >= 43) {
//         distance = (startBlock - hqLocation);
//         return distance;
//     } else if (startBlock < 42) {
//         distance = (hqLocation - startBlock);
//         return distance;
//     }

// }

// function distanceFromHqInFeet(startBlock) {
//     distanceFromHqInBlocks(startBlock);
//     distanceInFeet = (distance * 264);
//     return distanceInFeet;
// }

// function distanceTravelledInFeet(startBlock, endBlock) {
//     if (startBlock > endBlock) {
//         distance = (startBlock - endBlock);
//         distanceInFeet = (distance * 264);
//         return distanceInFeet;
//     } else if (startBlock < endBlock) {
//         distance = (endBlock - startBlock);
//         distanceInFeet = (distance * 264);
//         return distanceInFeet;
//     }
// }

// function calculatesFarePrice(startBlock, endBlock) {
//     distanceTravelledInFeet(startBlock, endBlock);
//     if (distanceInFeet <= 400) {
//         cost = 0;
//         return cost;
//     } else if (distanceInFeet <= 2000) {
//         cost = (distanceInFeet - 400) * .02;
//         return cost;
//     } else if (distanceInFeet <= 2500) {
//         cost = 25;
//         return cost;
//     } else if (distanceInFeet > 2500) {
//         return "cannot travel that far"
//     }


// }


function distanceFromHqInBlocks (location){
    let distance = Math.abs(location - 42)
    return distance

}

function distanceTravelledInFeet (distance){
     const distanceInFeet = distanceFromHqInBlocks(distance- 42) * 264
    return distanceInFeet
}
