/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
 define([],

    function() {

        return {
        	afterSubmit : function(context) {
 //       		log.debug('Hello World');
   var employee = context.newRecord;
   var supervisorId = employee.getValue('supervisor');
   var empCode = employee.getValue('custentity_sdr_employee_code');
  
  

   log.debug('Employee Code',empCode);
   log.debug('Supervisor ID',supervisorId);
        	}
        };

    });