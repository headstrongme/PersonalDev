import { LightningElement } from 'lwc';

export default class GetterDemo extends LightningElement {
    title = 'This is title'
    selectedButton = 'OFF'

    get getTitle(){
        return this.title.toUpperCase()
    }

    clickHandler(event){
        this.selectedButton = event.currentTarget.innerText;
    }

    get boxStatusColor(){
        return this.selectedButton === 'ON' ? 'box green' : 'box red' 
    }
}