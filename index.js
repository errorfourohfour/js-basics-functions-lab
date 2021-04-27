// Code your solution in this file!
function distanceFromHqInBlocks(location){
if (location>=42){
    return location - 42;
} else {
    return 42 - location;
}
}
 function distanceFromHqInFeet(distanceInBlocks){
    if (distanceInBlocks>= 42){
        return (distanceInBlocks - 42)*264;
    } else {
        return (42 - distanceInBlocks)*264;
    }
}

function distanceTravelledInFeet(start, finish){
if (start>finish){
    return (start-finish)*264;
} else {
    return (finish-start)*264;
}
 }

function calculatesFarePrice(start, destination){
let Trip = distanceTravelledInFeet(start, destination)
if (Trip<= 400){
    return 0;
} else if (Trip > 400 && Trip < 2000){
    return (Trip - 400)*.02;
} else if (Trip > 2000 && Trip < 2500){
    return Trip=25;
} else {
    return `cannot travel that far`;
}
}
 