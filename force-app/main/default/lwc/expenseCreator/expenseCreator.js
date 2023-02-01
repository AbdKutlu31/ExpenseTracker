import AMOUNT_FIELD from '@salesforce/schema/Expense__c.Amount__c';
import CATEGORY_FIELD from '@salesforce/schema/Expense__c.Category__c';
import DATE_FIELD from '@salesforce/schema/Expense__c.Expense_Date__c';
import EXPENCE_OBJ from '@salesforce/schema/Expense__c';

import { LightningElement } from 'lwc';


export default class ExpenseCreator extends LightningElement {
    objApiName= EXPENCE_OBJ;
    fields = [CATEGORY_FIELD,AMOUNT_FIELD,DATE_FIELD];
}