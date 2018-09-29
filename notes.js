//Create a form that allows users to input appliance information, displays a list of entered appliances with their information, and shows the total watt usage for all the appliances they entered. Ideally, users would have the option to either enter amps and volts and a function will calculate their watts and add it to the list. OR, they can enter the watts themselves.

//After watts are calculated, increase the number by a 20% buffer.

//Other considerations - Some appliances, like a microwave or refrigerator, also need to take into account surge watts. I could create a function that checks for those and then prompts the user to find the surge watts? Might need to also calculate AC load?

//When the user clicks submit, they should see the correct power inverter that they would need to buy to fulfill their power needs. If they entered more watts than our inverters allow, it will return a message letting them know they need to remove items or purchase more than one inverter.

//Crap - more things to consider. If the user enters more items than there are outlets, I might need to alert the user that they will only be able to simultaneously power 2 or 3 things. Or... find out if you can add a power strip??

/* When returning the correct inverter, I need to display these:
Inverter model
output power
surge Watts
Input Voltage
outlets
dimensions
weight
warranty
certifications
Approvals
Specifications (link to document, or maybe expand display to include those details.)
