const employee = {
    name:"Brian",
    streetAddress:"12 Broadway"
}
function updateEmployeeWithKeyAndValue(object,key,value){
    let newEmployee ={...employee};
    newEmployee.name="Sam",
    newEmployee.streetAddress= "11 Broadway"
    };
function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value) {
    return (employee.name="Sam",employee.streetAddress="12 Broadway");
}  
function deleteFromEmployeeByKey(employee,key) {
    delete newEmployee.name;
    return newEmployee;
}
let newEmployee=function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee;

}
