import { LightningElement, wire } from 'lwc';
import getExpenses from '@salesforce/apex/ExpenseController.getExpenses';
import getExpensesSumMonthly from '@salesforce/apex/ExpenseController.getExpensesSumMonthly';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Category', fieldName: 'Category__c'},
    { label: 'Amount', fieldName: 'Amount__c', type: 'currency' },
    { label: 'Expense Date', fieldName: 'Expense_Date__c', type: 'date' },
    { label: 'Is Weekly', fieldName: 'Is_Weekly__c', type: 'Boolean' },
    { label: 'Is Monthly', fieldName: 'Is_Monthly__c', type: 'Boolean' }
];
const columns2 = [
  { label: 'Category', fieldName: 'Category__c'},
  { label: 'totalAmount', fieldName: 'expr0', type: 'currency'}
];

export default class ExpenseList extends LightningElement {

    data = [];
    columns = columns;
    data2 = [];
    columns2 = columns2;

    @wire(getExpenses)
    wiredData({ error, data }) {
      if (data) {
        this.data = data;
        console.log('data ',this.data);
      } else if (error) {
        console.error('Error:', error);
      }
    }
    @wire(getExpensesSumMonthly)
    wiredData2({ error, data }) {
      if (data) {
        this.data2 = data;
        console.log('data 2 ', JSON.stringify(data));
      } else if (error) {
        console.error('Error:', error);
      }
    }
  
}