/**
 * @NApiVersion 2.0
 * @NScriptType ScheduledScript
 */
define(['N/search'],  //Important! For testing in console change define to require
    /**
 * @param{search} search
 */
    function(search) { 

        /**
         * Defines the Scheduled script trigger point.
         * @param {Object} scriptContext
         * @param {string} scriptContext.type - Script execution context. Use values from the scriptContext.InvocationType enum.
         * @since 2015.2
         */
        function execute(scriptContext) {
                var caseSearch = search.load({
                    id : 'customsearchp_sdr_escalated_searches'
                });

                var searchresults = caseSearch.run().getRange({
                    start : 0,
                    end : 9
                });
                //Important! Tto test in browser or NS console must add breakpoint 'var x = 0;'
        }

        return {execute : execute} //Important! This could be removed for testing in Debigger

    });
