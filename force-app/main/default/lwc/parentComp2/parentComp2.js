import { LightningElement, track } from 'lwc';

export default class ParentComp2 extends LightningElement {
    @track msg;

constructor(){
    super();
    this.template.addEventListener('myevent',this.handleEvent.bind(this));
}

    handleEvent(event){
        this.msg= event.detail;
    }
}