import { LightningElement } from 'lwc';

export default class TemplateTrueDemo extends LightningElement {
    showText = false;
    showHandler(){
        this.showText = true;
    }

    //This is how object is defined
    showText2 = {
        result:false
    }
    //this is how you change the value in object
    showHandler2(){
        this.showText = {...this.showText2, "resutl":true}
    }

    toggleText = true;
    toggleHandler(){
        this.toggleText = !this.toggleText;
    }


}