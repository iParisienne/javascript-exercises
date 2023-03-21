const removeFromArray = function(arr, ...numbers) {
  const arrCheck = [...numbers].sort();

	for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arrCheck.length; j++){
      if(arr[i] === arrCheck[j]){
        arr.splice(arr.indexOf(arr[i]), 1);
      }
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
