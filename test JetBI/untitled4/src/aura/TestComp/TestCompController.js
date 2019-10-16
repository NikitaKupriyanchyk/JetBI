/**
 * Created by 37529 on 14.10.2019.
 */

({
    init: function (cmp, event, helper) {
        cmp.set('v.mycolumns', [
            {label: 'Transaction Name', fieldName: 'Name', type: 'text', initialWidth: 300},
            {label: 'Value', fieldName: 'Value__c', type: 'currency', initialWidth: 100},
            {label: 'Created Date', fieldName: 'CreatedDate', type: 'date'}
        ]);
        helper.getData(cmp);
    },

    openAddTransactionModalWindow: function (component, event, helper) {
        component.set("v.isOpen", true);
    },

    closeAddTransactionModalWindow: function (component, event, helper) {
        component.set("v.isOpen", false);
    },

    addAndCloseAddTransactionModalWindow: function (component, event, helper) {
        var newTransaction = component.get("v.newTransaction");
        console.log("create new Transaction controller: " + JSON.stringify(newTransaction));
        helper.createNewTransaction(component, newTransaction);
        component.set("v.isOpen", false);
        component.init();

    },
    CheckLength : function(component, event, helper) {
        var val = component.find("number").get('v.value');
        if(val.length > 5){
            var comp = component.find("number");
            comp.set('v.value',val.substring(0,5));
        }
    }

});