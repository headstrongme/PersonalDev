import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    
    firstName = "Salah"

     lastName= "Akbar"

    changehandler(event){
        this.lastName = event.target.value
    }

}