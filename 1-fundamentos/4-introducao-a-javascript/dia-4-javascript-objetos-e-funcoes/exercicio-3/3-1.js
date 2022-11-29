let carStatus = 'on';
let carSpeed = 0;
let carRotationAngle = 0;

function onOff() {
    if (carStatus === 'off') {
        carStatus = 'on';
    } else {
        carStatus = 'off';
    }
    return carStatus;
}

function speedUp(increment) {
    carSpeed += increment;
    return 'Acelerando a ' + carSpeed + 'km/h';
} 

function brake(decrement) {
    carSpeed -= decrement;
    return 'Desacelerando a ' + carSpeed + 'km/h';
} 

function direction(rotationAngle) {
    carRotationAngle = rotationAngle;
    return rotationAngle + 'º';
}