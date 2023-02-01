public with sharing class ExpenseController {
        
        @AuraEnabled (cacheable=true)
        public static List<Expense__c> getExpenses(){
                try {
                        return [SELECT Id, CreatedDate, Category__c, Amount__c, Expense_Date__c 
                                FROM Expense__c 
                                WITH SECURITY_ENFORCED];
                } catch (Exception e) {
                        throw new AuraHandledException(e.getMessage());
                }
        }
        public static List<AggregateResult> getExpensesSumMonthly(){
                try {
                        return [SELECT Category__c, sum(Amount__c) FROM Expense__c GROUP BY Category__c ];
                } catch (Exception e) {
                        throw new AuraHandledException(e.getMessage());
                }
        }
}