// Write your solution in this file!
const employee = { name: ''};
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, secondKey, secondValue){
    employee[secondKey] = secondValue;
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}

