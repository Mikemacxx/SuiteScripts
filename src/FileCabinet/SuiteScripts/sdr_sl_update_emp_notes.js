/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(['N/ui/serverWidget'],
    
   function(serverWidget) {
        /**     
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        function onRequest(context) {

            var request = context.request;
            var response = context.response;

            var form = serverWidget.createForm({
                title : 'Update Employee Notes',
                hideNavBar : false
            });
            var nameFld = form.addField({
                id: 'custpage_sdr_emp_name',
                label: 'Name',
                type: serverWidget.FieldType.TEXT
            });

            var notesFld = form.addField({
                id: 'custpage_sdr_notes',
                label: 'Notes',
                type: serverWidget.FieldType.TEXTAREA
            });

            var empIdFld = form.addField({
                id: 'custpage_sdr_emp_id',
                label: 'Employee ID',
                type: serverWidget.FieldType.TEXT
            });

            
            form.addSubmitButton({
                label : 'Continue'
            });
            

            response.writePage(form);
        }

        return {onRequest : onRequest};

    });
