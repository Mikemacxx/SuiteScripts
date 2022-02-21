/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
 define([],

    function() {

        return {
        	afterSubmit : function(context) {
  //      		log.debug('Hello World');
  var customer = context.newRecord;
  var customerId = customer.getValue('id');
  var customerEmail = customer.getValue('email');
  var customerRep = customer.getText('salesrep');
  var customerCoupCode = customer.getValue('custentity_sdr_coupon_code');

  log.audit('Customer ID', customerId);
  log.audit('Customer Email', customerEmail);
  log.audit('Customer Sales Rep', customerRep);
  log.audit('Customer Coupon Code', customerCoupCode);

        	}
        };

    });