import { LightningElement } from 'lwc';

export default class BoolParent extends LightningElement {
    constructor(){
        super();
        console.log('Constructor on parent is called');
    }
    connectedCallback(){
        console.log('Connected callback on parent is called');
    }
    renderedCallback(){
        console.log('renderredcallback on parent is called');
    }
    disconnectedCallback(){
        console.log('disconnectedCallback on parent is called');
    }
}