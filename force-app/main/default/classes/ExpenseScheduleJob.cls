public with sharing class ExpenseScheduleJob implements Schedulable{
    public static Boolean blnIsWeekly;
    public static Boolean blnIsMonthly;

    public ExpenseScheduleJob(Boolean isWeekly, Boolean isMonthly) {
        blnIsWeekly = isWeekly;
        blnIsMonthly = isMonthly;
    }

    public void execute(SchedulableContext sc) {
        createExpenseRecords();
    }

    public static void createExpenseRecords() {
        List<String> lstExpenseTypes = new List<String>{'Housing', 'Transportation', 'Food', 'MedicalHealthcare', 'Others'};
        List<Expense__c> lstExpense  = new List<Expense__c>();

        for (String str : lstExpenseTypes) {
            Expense__c exp = new Expense__c();
            exp.Category__c = str;
            exp.Amount__c = 50;
            exp.Expense_Date__c = Date.today();
            exp.Name = String.valueOf(Date.today())+str;
            exp.Is_Weekly__c = blnIsWeekly;
            exp.Is_Monthly__c = blnIsMonthly;
            lstExpense.add(exp);
        }

        insert lstExpense;
    }
}