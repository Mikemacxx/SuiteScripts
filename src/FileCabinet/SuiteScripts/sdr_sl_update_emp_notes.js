/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(['N/ui/serverWidget','N/record','N/redirect'],
/**     
         * Defines the Suitelet script trigger point.
         * @param {serverWidget} serverWidget
         * @param {record} record
         * @param {redirect} redirect
         * @since 2015.2
         */
    
   function(serverWidget,record,redirect) {
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

            if(request.method == 'GET') {

            var name = request.parameters.sdr_name;
            var notes = request.parameters.sdr_notes;
            var empId = request.parameters.sdr_empid;

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

            nameFld.defaultValue = name;
            notesFld.defaultValue = notes;
            empIdFld.defaultValue = empId;

            
            nameFld.updateDisplayType({
                displayType : serverWidget.FieldDisplayType.INLINE
            });

            empIdFld.updateDisplayType({
                displayType : serverWidget.FieldDisplayType.HIDDEN
            });


            response.writePage(form);
        } else {
            var empId = request.parameters.custpage_sdr_emp_id;
            var notes = request.parameters.custpage_sdr_notes;
            var employee = record.load({
                type : record.Type.EMPLOYEE,
                id : empId
            });
            employee.setValue('comments', notes);
            employee.save();

            redirect.toRecord({
                id: empId,
                type: record.Type.EMPLOYEE,
                isEditMode: false
            });

        }
    }

        return {onRequest : onRequest};

    });
