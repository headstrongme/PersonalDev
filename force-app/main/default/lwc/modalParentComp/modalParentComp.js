import { LightningElement } from 'lwc';

export default class ModalParentComp extends LightningElement {

    showModal =false
    showHandler(){
        this.showModal = true
    }
    modalCloseHandler(){
        this.showModal = false
    }
}