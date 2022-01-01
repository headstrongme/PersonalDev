import { api, LightningElement } from 'lwc';

export default class ModelChildCmp extends LightningElement {
@api headerText;
@api bodyText;
    closeHandler(){
        this.dispatchEvent(new CustomEvent('close'))
    }
}