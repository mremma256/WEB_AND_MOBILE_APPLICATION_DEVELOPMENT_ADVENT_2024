/*QN.In African countries, mobile network providers offer different call rates. Write a JavaScript
program using a switch statement to print out the call rate based on the user's input for a
network code (e.g., MTN: 1, Airtel: 2, Africell: 3).*/

let networkCode = 1;//declaration of the network code

switch (networkCode) {
  case 1:
    console.log("MTN Call Rate: 0.15 per minute");//This is output when the network code is set to 1
    break;
  case 2:
    console.log("Airtel Call Rate: 0.20 per minute");//This is output when the network code is set to 2
    break;
  case 3:
    console.log("Africell Call Rate: 0.10 per minute");//This is output when the network code is set to 3
    break;
  default:
    console.log("Invalid network code. Please enter a valid network code (1-3).");//This is output when the network code is out of range
}