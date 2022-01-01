import { api, LightningElement } from 'lwc';

export default class BarChildComp extends LightningElement {
    className= 'greenBar'

    @api changeBarColor(){
        this.className = 'redBar'
    }
}