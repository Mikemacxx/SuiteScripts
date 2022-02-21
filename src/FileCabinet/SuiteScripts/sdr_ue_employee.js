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
   var empCode        = employee.getValue('custentity_sdr_employee_code');
   var supervisorName = employee.getText('supervisor');
   var supervisorId   = employee.getValue('supervisor');


   log.debug('Employee Code',empCode);
   log.debug('Supervisor Name',supervisorName);
   log.debug('Supervisor ID',supervisorId);

        	}
        };

    });