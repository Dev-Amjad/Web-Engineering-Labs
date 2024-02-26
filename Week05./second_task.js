
var car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
};


function carInfo(carObject) {
    
    var brand = carObject.brand;
    var model = carObject.model;
    var year = carObject.year;
    
    
    var infoString = 'The ' + brand + ' ' + model + ' was manufactured in ' + year + '.';
    
    
    return infoString;
}


console.log(carInfo(car)); 
