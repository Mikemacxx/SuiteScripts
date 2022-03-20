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
  var department = record.load({   // Get HR department by id
    type: record.Type.DEPARTMENT,
    id: 2,
    isDynamic: true,
});
var departmentPhone = department.getValue('custrecord_dept_phone'); // Get department phone from the record you just loaded.

var phoneCall = record.create({
  type : record.Type.PHONE_CALL,
  defaultValues : {
    customform : -150
  }
});
phoneCall.setValue('title', "Call HR for your benefits.");
phoneCall.setValue('assigned', employee.id);
phoneCall.setValue('phone',departmentPhone);  //Set the new phone call phone number with the value of the department phone.
phoneCall.save();
log.debug('Call Created',phoneCall.getValue('title'));

var event = record.create({
type : record.Type.CALENDAR_EVENT,
isDynamic : true
});
event.setValue('title','Welcome meeting with Supervisor');

event.selectNewLine({
  sublistId : 'attendee'
});
event.setCurrentSublistValue({
  sublistId : 'attendee',
  fieldId : 'attendee',
  value : employee.id
});
event.commitLine({
  sublistId : 'attendee'
});

event.selectNewLine({
  sublistId : 'attendee'
});
event.setCurrentSublistValue({
  sublistId : 'attendee',
  fieldId : 'attendee',
  value : supervisorId
});
event.commitLine({
  sublistId : 'attendee'
});
event.save();
}
}
        };

    });