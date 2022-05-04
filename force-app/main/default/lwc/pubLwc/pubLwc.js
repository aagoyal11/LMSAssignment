import {
    LightningElement,
    wire
} from 'lwc';
import {
    publish,
    MessageContext
} from 'lightning/messageService';
import Count_UPDATED_CHANNEL from '@salesforce/messageChannel/Count_Updated__c'


export default class PubLwc extends LightningElement {
    @wire(MessageContext)
    messageContext;
    handleIncrement() {
        const payload = {
            Operator: 'add',
            Constant: 1
        }
        publish(this.messageContext,Count_UPDATED_CHANNEL,payload);

    }
    handleDecrement() {
        const payload = {
            Operator: 'subtract',
            Constant: 1
        }
        publish(this.messageContext,Count_UPDATED_CHANNEL,payload);
//hello

    }
    handleMultiply() {
        const payload = {
            Operator: 'multiply',
            Constant: 2
        }
        publish(this.messageContext,Count_UPDATED_CHANNEL,payload);

    }

}