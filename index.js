// Write your solution in this file!
const employee = {
    name: "Darian",
    streetAddress: "3050 Curtiss Ave",
}
function updateEmployeeWithKeyAndValue(obj, key, value){return {...obj, [key]: value};
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee [key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj}
    delete newEmployee[key]
    return newEmployee
}


function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key]; 
    return obj;
}
