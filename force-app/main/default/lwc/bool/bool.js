import { LightningElement, api } from 'lwc';

export default class Bool extends LightningElement {
    @api show = false;

    constructor(){
        super();
        console.log('Constructor on child is called');
    }
    connectedCallback(){
        console.log('Connected callback on child is called');
    }
    renderedCallback(){
        console.log('renderredcallback on child is called');
    }
    disconnectedCallback(){
        console.log('disconnected child callback');
    }
}