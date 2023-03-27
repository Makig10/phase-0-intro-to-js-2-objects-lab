const employee = {
    name:"Brian",
    streetAddress:"12 Broadway"
}
function updateEmployeeWithKeyAndValue(object,key,value){
    let newEmployee ={...employee};
    newEmployee={
        name:'Sam',
        streetAddress:'11 Broadway'
    }
    return newEmployee;
    
    };
function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value) {
    employee={
        name: 'Sam',
        streetAddress: '12 Broadway'
    }
    return employee;
}  
function deleteFromEmployeeByKey(employee,key) {
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
   let newEmployee={...employee};
   delete newEmployee.name;
   return newEmployee;

   }
    


