/**
 * @NApiVersion 2.0
 * @NScriptType ScheduledScript
 * @NModuleScope SameAccount
 */
define(['N/search'],  //Important! For testing in console change define to require
    /**
 * @param{search} search
 */
    function(search) { 

        return {
            execute : function(context) {
                var caseSearch = search.create({
                    type : search.Type.SUPPORT_CASE,
                    filters : [
                        search.createFilter({
                            name : 'status',
                            operator : search.Operator.ANY_OF,
                            values : 3
                        }),
                        search.createFilter ({
                            name : 'title',
                            operator : search.Operator.HASKEYWORDS,
                            values : 'Support'
                        })
                    ],
                    columns : [
                        search.createColumn({name : 'title'}),
                        search.createColumn({name : 'startdate'}),
                        search.createColumn({name : 'assigned'}),
                        search.createColumn({name : 'status'}),
                        search.createColumn({name : 'assigned'}),
                        search.createColumn({name : 'status'}),
                        search.createColumn({name : 'department', join : 'employee'}),
                        search.createColumn({name : 'title', join : 'employee'})
                    ]
                });
                var searchResults = casSearch.run().getRange({
                    start: 0,
                    end: 9
                });
                // THIS IS WHERE WE BEGIN A LOOP TO LOOP THROUGH RESULTS ROWS
                  
                for(i=0;i<searchResults.length;i++) {
                    
                  var subject = searchResults[i].getValue('title');
                  var assignedTo = searchResults[i].getValue('assigned');
                  var status = searchResults[i].getValue('status');
                  var department = searchResults[i].getValue({
                      name : 'department',
                      join : 'employee'
                  });
                  var jobTitle = searchResults[i].getValue({
                      name : 'title',
                      join : 'employee'
                  });
                  log.debug('Case Info', 'Subject : ' + subject + '\n' +
                  'Status : ' + status + '\n' +
                  'Job Title : ' + jobTitle);
      
      
                }
            }
        }

         

    });
