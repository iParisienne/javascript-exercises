const sumAll = function(a, b) {
	if(a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number")
    return "ERROR";
  
  const arr = [a, b];
  arr.sort();
  let num1 = arr[0];
  let num2 = arr[1];
  let total = 0;

  for(num1; num1 <= num2; num1++){
    total += num1;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
