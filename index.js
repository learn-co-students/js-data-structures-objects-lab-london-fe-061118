// Write your solution in this file!
const driver = {name : 'Sam'};

function updateDriverWithKeyAndValue(driver, key, value){

   return Object.assign({}, driver, { [key]: value });
}
 
function destructivelyUpdateDriverWithKeyAndValue(){
driver.address = '12 Broadway';
return driver;
}

function deleteFromDriverByKey(driver, key){
  var newDriver = {...driver};
  delete newDriver[key];
  return newDriver;
}

 
  
  function destructivelyDeleteFromDriverByKey(){
    delete driver.name;
    return driver;
  }