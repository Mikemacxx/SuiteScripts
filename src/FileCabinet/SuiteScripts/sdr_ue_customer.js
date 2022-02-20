/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
 define([],

    function() {

        return {
        	afterSubmit : function(context) {
        		log.debug('Hello World');

        	}
        };

    });