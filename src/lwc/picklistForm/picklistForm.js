/**
 * Created by Aliaksandr_Kazlovich on 24.10.2022.
 */

import {LightningElement, api} from 'lwc';

export default class PicklistForm extends LightningElement {
    @api
    name;
    @api
    label;
    @api
    value;
    @api
    options;

    handleChange(event) {
        this.value = event.target.value;
    }
}