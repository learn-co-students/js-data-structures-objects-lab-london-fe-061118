let driver ={};

function updateDriverWithKeyAndValue(driver, key, value){
  let newDriver = Object.assign({}, driver);
  newDriver.address="11 Broadway";
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver.name ="Sam",
  driver.address = "12 Broadway";
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let newDriver = Object.assign({}, driver);
  delete newDriver.name;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.name;
  return driver;
}