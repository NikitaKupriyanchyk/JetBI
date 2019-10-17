/**
 * Created by 37529 on 17.10.2019.
 */
@IsTest
public with sharing class UnitTestController {

    @IsTest
    public static void getTransactionTest() {
        List<Transaction__c> testData = new List<Transaction__c>();
        Transaction__c testTransaction = new Transaction__c();
        testTransaction.put('Name', 'tss');
        testTransaction.put('Value__c', 300);
        User user = new User();
        user.Id = UserInfo.getUserId();

        testData.add(testTransaction);
        insert testData;

        List<Transaction__c> testResult = TestCompController.getTransactions(); //Problem in user id

        System.assertNotEquals(testData, testResult);
    }

    @IsTest
    public static void addTransactionTest() {
        Transaction__c testTransaction = new Transaction__c();
        testTransaction.put('Name', 'tss');
        testTransaction.put('Value__c', 300);

        String expectedResult = 'Success';

        String result=TestCompController.addTransaction(testTransaction);

        System.assertEquals(expectedResult,result);
    }


}