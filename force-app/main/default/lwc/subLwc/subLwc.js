import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext} from 'lightning/messageService';
import COUNT_UPDATED_CHANNEL from '@salesforce/messageChannel/Count_Updated__c'

export default class SubLwc extends LightningElement {
    counter = 0;
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel(){
        this.subscription = subscribe(
            this.messageContext,COUNT_UPDATED_CHANNEL,
            (message) => this.handleMessage(message)
        );
        
    }
    handleMessage(message)
    {
       // alert("message"+JSON.stringify(message));
       if(message.Operator=='add' ){
           this.counter += message.Constant;
       }
       else if(message.Operator=='subtract' ){
        this.counter -= message.Constant;
    }
    if(message.Operator=='multiply' ){
        this.counter *= message.Constant;
    }


    }

}