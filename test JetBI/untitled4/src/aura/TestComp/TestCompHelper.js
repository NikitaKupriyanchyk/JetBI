/**
 * Created by 37529 on 14.10.2019.
 */

({
    getData: function (cmp) {
        var action = cmp.get('c.getTransactions');
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.transaction', response.getReturnValue());
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    },

    createNewTransaction: function (component, newTransaction) {
        var insertTransactionAction = component.get("c.addTransaction");
        insertTransactionAction.setParams({
            "newTransaction": component.get("v.newTransaction")
        });
        console.log('helper insert: ' + insertTransactionAction);
        insertTransactionAction.setCallback(this, function (resp) {
            var state = resp.getState();
            console.log("create new Transaction helper: " + JSON.stringify(newTransaction));
            if (state === 'SUCCESS') {
                console.log(resp.getReturnValue());
                component.destroy();
            } else if (state === 'ERROR') {
                var errors = resp.getError();
                for (var i = 0; i < errors.length; i++) {
                    console.log(errors[i].message)
                }
            }
        });
        $A.enqueueAction(insertTransactionAction);
    }

});