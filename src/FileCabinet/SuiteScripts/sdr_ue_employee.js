/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
 define(['N/record'],
/**
 * 
 * @param {record} record 
 * @returns 
 */

    function(record) {

        return {
        	afterSubmit : function(context) {
 //       		log.debug('Hello World');
   var employee = context.newRecord;
   var supervisorId = employee.getValue('supervisor');
   var empCode = employee.getValue('custentity_sdr_employee_code');
  
  

   log.debug('Employee Code',empCode);
   log.debug('Supervisor ID',supervisorId);

if(context.type == context.UserEventType.CREATE) {
  var department = record.load({
    type: record.Type.DEPARTMENT,
    id: 2,
    isDynamic: true,
});
var departmentPhone = department.getValue('custrecord_dept_phone');

var phoneCall = record.create({
  type : record.Type.PHONE_CALL,
  defaultValues : {
    customform : -150
  }
});
phoneCall.setValue('title', "Call HR for your benefis.");
phoneCall.setValue('assigned', employee.id);
phoneCall.setValue('phone',departmentPhone);  //COULD**USE
phoneCall.save();
log.debug('Call Created',phoneCall.getValue('title'));
}
}
        };

    });