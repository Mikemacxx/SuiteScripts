/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record'],
    /**
 * @param{record} record
 */
    function (record) {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        function afterSubmit(context) {
                var phoneRec = context.newRecord;
                var lanFirstContact = phoneRec.getValue({
                    fieldId: 'custevent_lanmark_first_contact_phone'
                });
                var lanFollowUp = phoneRec.getValue({
                    fieldId: 'custevent_lanmark_follow_up_phone'
                });

                var custId = phoneRec.getValue({
                    fieldId: 'company'
                });

                if(custId && lanFirstContact == true) {
                    var loadedcust = record.load({
                        type : record.Type.CUSTOMER,
                        id : custId});
                        loadedcust.setValue({
                            fieldId:'custentity_lanmark_first_contact',
                            value: true });
                            loadedcust.save();
                }

                if(custId && lanFollowUp == true) {
                    var loadedcust = record.load({
                        type : record.Type.CUSTOMER,
                        id : custId});
                        loadedcust.setValue({
                            fieldId:'custentity_lanmark_follow_up',
                            value: true });
                            loadedcust.save();
                }
        }

        return {afterSubmit}

    });
