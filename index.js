// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const copyOfDrivers = drivers.slice();


function returnFirstTwoDrivers() {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers() {
     return drivers.slice(-2);

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function(value){
      return fareMultiplier * value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, func) {
    if (func === returnFirstTwoDrivers) {
        return drivers.slice(0,2);
    }
    
    if (func === returnLastTwoDrivers) {
        return drivers.slice(-2);
    }
}