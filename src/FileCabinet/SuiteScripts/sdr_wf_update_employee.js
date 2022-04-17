/**
 * @NApiVersion 2.1
 * @NScriptType WorkflowActionScript
 */
define(['N/record', 'N/runtime'],
    /**
 * @param{record} record
 * @param{runtime} runtime
 */
    (record, runtime) => {
        /**
         * Defines the WorkflowAction script trigger point.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.workflowId - Internal ID of workflow which triggered this action
         * @param {string} scriptContext.type - Event type
         * @param {Form} scriptContext.form - Current form that the script uses to interact with the record
         * @since 2016.1
         */
        function onAction(context) {
            var workflowTotal = runtime.getCurrentScript().getParameter({
name : 'custscript_sdr_workflowf_total'
            });
            var scriptObj = runtime.getCurrentScript(); //scriptObj is a runtime.Script object
log.debug('Script ID: ' + scriptObj.id);

            var expRep = context.newRecord;
            var expenseCount = expRep.getLineCount({
                sublistId : 'expense'
            })
            var employeeId = expRep.getValue('entity');
            var notes = 'Workflow Total : ' + workflowTotal + '\n' 
            + 'Expense Count : ' + expenseCount;

            var employee = record.load({
                type : record.Type.EMPLOYEE,
                id : employeeId
            });
            employee.setValue('comments', notes);
            employeeId = employee.save();
            if(!employeeId) {
                return 'failed';
            }
            {
            return 'success';
        
        }
                }


        return {onAction};
    });
