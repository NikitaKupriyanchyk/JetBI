/**
 * Created by 37529 on 14.10.2019.
 */

trigger TransactionTrigger on Transaction__c (after insert) {

    User currentUser = [
            Select Balance__c
            From User
            Where Id = :UserInfo.getUserId()
    ];

    for (Transaction__c currentTransaction : Trigger.new) {
        currentUser.Balance__c += currentTransaction.Value__c;
    }

    update currentUser ;
}