import { LightningElement } from 'lwc';

export default class ChildComp2 extends LightningElement {

    handleChange(event){
        const name = event.target.value;
  // const selectevt  = new CustomEvent('myevent', {detail:name});
  const selectevt  = new CustomEvent('myevent', {detail:name,bubbles:true});
   this.dispatchEvent(selectevt);
    }
}