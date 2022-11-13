// Write your solution in this file!
let employee={
    name:"John",
    streetAddress:"532"
}
function updateEmployeeWithKeyAndValue(object, key, value) {
let copy= Object.assign({},object, {[key]: value}) 
console.log(copy)
return copy 
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let copy= {...employee }
    delete copy[key] 
    return copy 
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}