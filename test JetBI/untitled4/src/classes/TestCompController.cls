/**
 * Created by 37529 on 14.10.2019.
 */

public with sharing class TestCompController {

    @AuraEnabled
    public static List<Transaction__c> getTransactions() {
        List<Transaction__c> allTransactions = [
                SELECT Name,
                        Value__c,
                        CreatedDate
                FROM Transaction__c
                WHERE User__c = :UserInfo.getUserId()
                ORDER BY CreatedDate ASC
                LIMIT 50
        ];
        return allTransactions;
    }

    @AuraEnabled

    public static String addTransaction(Transaction__c newTransaction) {
        try {
            newTransaction.put('User__c',UserInfo.getUserId());
            insert newTransaction;
        } catch (exception e) {
            System.debug('error inserting transactions @ ' + e);
            return 'Error';
        }
        return 'Success';
    }

}