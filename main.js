//Allows users to enter appliances they need to power. Then, it calculates how many watts they need to power all of their items.
var appliances = [];
var totalWatts = 0;

var theButton = document.getElementById('add-button');
theButton.addEventListener('click', function() {
  var itemInput = document.getElementById('item');
  var ampsInput = document.getElementById('amps');
  var voltsInput = document.getElementById('volts');
  addAppliance(itemInput.value, ampsInput.value, voltsInput.value)
})

function addAppliance(item, amps, volts) {
  var newAppliance = {
     item: item,
     amps: amps,
     volts: volts
  }
  appliances.push(newAppliance)

  var tblBody = document.getElementById("tbody");
  var row = document.createElement("tr");

  var cell1 = document.createElement("td");
  var cell2 = document.createElement("td");
  var cell3 = document.createElement("td");
  var cell4 = document.createElement('td');

  var itemText = document.createTextNode(item);
  var ampsText = document.createTextNode(amps);
  var voltsText = document.createTextNode(volts);

  var watts = amps * volts;
  totalWatts += watts;

  var wattsText = document.createTextNode(watts);

  cell1.appendChild(itemText);
  cell2.appendChild(ampsText);
  cell3.appendChild(voltsText);
  cell4.appendChild(wattsText);

  var totalWattsText = document.getElementById('total-watts');
  totalWattsText.innerHTML = 'Total Watts: ' + totalWatts;

  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);

  tblBody.appendChild(row);
}
//end of watt calculation code

//Create an inverters object that includes model number, output power, surge watts, input voltage, outlets, dimensions, weight, warranty
var inverters = [
   {
    model: 'PS1001',
    image: 'PS1001.jpg',
    outputVoltage: 'AC 120V',
    watts: 600,
    surgeWatts: '',
    inputVoltage: '',
    protectionSystems: ['Thermal', 'Overload', 'Over Voltage', 'Under Voltage', 'Low Voltage'],
    outlets: 2,
    weight: '4 pounds',
    warranty: '1 year limited warranty'
   },
   {
     model: 'PS1002',
     image: 'PS1002.jpg',
     outputVoltage: 'AC 120V',
     watts: 1000,
     surgeWatts: '',
     inputVoltage: '',
     protectionSystems: ['Thermal', 'Overload', 'Over Voltage', 'Under Voltage', 'Low Voltage'],
     outlets: 2,
     weight: '6 pounds',
     warranty: '1 year limited warranty'
   },
   {
     model: 'PS1003',
     image: 'PS1003.jpg',
     outputVoltage: 'AC 120V',
     watts: 2000,
     surgeWatts: '',
     inputVoltage: '',
     protectionSystems: ['Thermal', 'Overload', 'Over Voltage', 'Under Voltage', 'Low Voltage'],
     outlets: 3,
     weight: '12 pounds',
     warranty: '1 year limited warranty'
   },
   {
     model: 'PS1004',
     image: 'PS1004.jpg',
     outputVoltage: 'AC 120V',
     watts: 3000,
     surgeWatts: '',
     inputVoltage: '',
     protectionSystems: ['Thermal', 'Overload', 'Over Voltage', 'Under Voltage', 'Low Voltage'],
     outlets: 3,
     weight: '18.2 pounds',
     warranty: '1 year limited warranty'
   },
   {
     model: 'PS1005',
     image: 'PS1005.jpg',
     outputVoltage: 'AC 120V',
     watts: 1500,
     surgeWatts: '',
     inputVoltage: '',
     protectionSystems: ['Thermal', 'Overload', 'Over Voltage', 'Under Voltage', 'Low Voltage'],
     outlets: 3,
     weight: '',
     warranty: '1 year limited warranty'
   },
   {
     model: 'PS1006',
     image: 'PS1006.jpg',
     outputVoltage: 'AC 120V',
     watts: 3000,
     surgeWatts: '',
     inputVoltage: '',
     protectionSystems: ['Thermal', 'Overload', 'Over Voltage', 'Under Voltage', 'Low Voltage'],
     outlets: 2,
     weight: '15 pounds',
     warranty: '1 year limited warranty'
   },
]

var errors = {
  wattsTooHigh: 'You have entered too much wattage for a single power inverter. Please remove some items from your list, or consider purchasing multiple inverters to meet your power needs.',
  notEnoughOutlets: 'You have entered too many items to be powered by one inverter. Please remove some items from your list, or consider purchasing multiple inverters. We do not recommend using a power strip with your inverter. Bad stuff can happen.'
}

// function findInverter(modelName) {
//   return inverters.find(inverter => inverter.model === modelName)
// }

//instead of long conditional - more scalable

// // inverters.sort(watts).find(watts > x)
// function returnInverterTwo(totalWatts) {
//   return inverters.sort(function(a, b) {return a.watts - b.watts}).find(function (inverters) {return inverters.watts > 1});
// }
//
// console.log(returnInverterTwo(3000))

//Create a function that returns the correct inverter, based on what the user enters for amps and volts.
//Perhaps have the option to just enter watts if they already know how much?
var findInverterButton = document.getElementById('find-inverter-button');
findInverterButton.addEventListener('click', function() {
  returnInverter(totalWatts);
  displayInverterInfo();
})

function returnInverter(totalWatts) {
  if(totalWatts <= 600) {
    return inverters[0];
  } else if(totalWatts <= 1000) {
    return inverters[1];
  } else if(totalWatts <= 1500) {
    return inverters[4];
  } else if(totalWatts <= 2000) {
    return inverters[2];
  } else if(totalWatts <= 3000) {
    return inverters[3];
  } else if(totalWatts <= 3000 && 'something else') {
    return inverters[5];
  } else {
    return errors.wattsTooHigh;
  }

}

function displayInverterInfo() {
  var correctInverter = returnInverter(totalWatts);

  if(correctInverter === errors.wattsTooHigh) {
    document.getElementById('error-div').textContent = 'Error: ' + errors.wattsTooHigh;
  } else if(correctInverter === errors.notEnoughOutlets) {
    document.getElementById('error-div').textContent = 'Error: ' + errors.notEnoughOutlets;
  } else {
    var modelNumber = document.getElementById('inverter-model');
    modelNumber.innerHTML = correctInverter.model;

    document.getElementById('inverter-image').src = correctInverter.image;

    var inverterInfo = document.getElementById('inverter-info');
    var outputVoltage = document.createElement('li');
    var wattsInfo = document.createElement('li');
    var surgeWatts = document.createElement('li');
    var inputVoltage = document.createElement('li');
    var protectionSystems = document.createElement('li');
    var outlets = document.createElement('li');
    var weight = document.createElement('li');
    var warranty = document.createElement('li');

    outputVoltage.innerHTML = 'Output Voltage: ' + correctInverter.outputVoltage;
    wattsInfo.innerHTML = 'Watts: ' + correctInverter.watts;
    surgeWatts.innerHTML = 'Surge Watts: ' + correctInverter.surgeWatts;
    inputVoltage.innerHTML = 'Input Voltage' + correctInverter.inputVoltage;
    protectionSystems.innerHTML = 'Protection Systems: ' + correctInverter.protectionSystems;
    outlets.innerHTML = 'Outlets: ' + correctInverter.outlets;
    weight.innerHTML = 'Weight: ' + correctInverter.weight;
    warranty.innerHTML = 'Warranty: ' + correctInverter.warranty;

    inverterInfo.appendChild(outputVoltage);
    inverterInfo.appendChild(wattsInfo);
    inverterInfo.appendChild(surgeWatts);
    inverterInfo.appendChild(inputVoltage);
    inverterInfo.appendChild(protectionSystems);
    inverterInfo.appendChild(outlets);
    inverterInfo.appendChild(weight);
    inverterInfo.appendChild(warranty);
  }
}
//
// //conditional to check if appliance is a microwave or refrigerator. If it is, add a line that mentions surge watts.. maybe adds a field for surge watts
// if(appliances.name === 'microwave' || 'refrigerator' || 'Microwave' || 'Refrigerator') {
//   //add a field that asks for surge watts? Or, maybe just add a notice that reminds them that these items take a lot of power
// }


//Create a function that checks for errors and returns the correct error message.
//Maybe do a switch statement instead?
function displayErrors() {
// if total watts > 3000, return wattsTooHigh error.
  if(totalWatts > 3000) {
    return errors.wattsTooHigh;
  // if the correctInverter has more less outlets than the amount of appliances entered, return notEnoughOutlets error.
  } else if(inverters.outlets > appliances.length - 1) {
      return errors.notEnoughOutlets;
  }
}
