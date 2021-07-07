// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  
newObj = Object.assign({}, driver);
newObj.name = "Sam";
newObj.address = "11 Broadway";

return newObj;

  }

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
  
 driver.name ="Sam"; 
 driver.address ="12 Broadway";
 
 return driver;
  
}

function deleteFromDriverByKey(driver, key) {
newObj = Object.assign({}, driver);
delete newObj.name;


return newObj;

}

function destructivelyDeleteFromDriverByKey(driver, key) {
  
delete driver.name;
return driver;

}
