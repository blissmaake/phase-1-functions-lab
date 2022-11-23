// Code your solution in this file!
let distance = 0;
function distanceFromHqInBlocks (block) {
    distance = Math.abs(42-block);
    return distance;
}
function distanceFromHqInFeet (distance) {
    let d = distanceFromHqInBlocks (distance);
    let feet = 0;
    feet = d * 264;
    return (feet);
}
function distanceTravelledInFeet (start, destination){
    if (start < destination) {
        return (destination -start)*264;

        }
        else {
            return (start - destination) * 264;
        }
    }
function calculatesFarePrice (start, destination) {
    let distanceBlock = Math.abs(start - destination) * 264;
    let fare = 0;
    let foot = (distanceBlock - 400);

    if (distanceBlock <= 400){
        fare = 0;   
    }
    else if (distanceBlock > 400 && distanceBlock < 2000){
        fare = foot*0.02;
    }
    else if (distanceBlock > 2000 && distanceBlock < 2500){
        fare = 25;
    }
    else {
        fare = 'cannot travel that far';
    }
    return fare;
}



