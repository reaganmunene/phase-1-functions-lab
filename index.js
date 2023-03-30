// Code your solution in this file!
function distanceFromHqInBlocks(location){   
return location < 42 ? 42 - location : location -42
}
//distanceFromHqInBlocks();
function distanceFromHqInfeet(location){
    return  distanceFromHqInBlocks(location)*264
}
//distanceFromHqInfeet();
function distanceTravelledInFeet(start,destination){
    return destination > start ?
    (destination-start) * 264 :
    (start-destination)*264;
}
//distanceTravelledInFeet();
function calculatesFarePrice(start, destination){
    const distanceInFeet = distanceTravelledInFeet(start,destination);
if (distanceInFeet <= 400){
    return 0;
} else if (distanceInFeet < 2000){
    return (distanceInFeet - 400 ) * 0.02
} else if (distanceInFeet > 2000 && distanceInFeet < 2500){
    return 25;
} else if (distanceInFeet > 2500){
    return "cannot travel that far";
}
}
//calculatesFarePrice(); 