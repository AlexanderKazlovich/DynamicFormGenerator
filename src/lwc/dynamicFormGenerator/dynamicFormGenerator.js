/**
 * Created by Aliaksandr_Kazlovich on 17.10.2022.
 */

import {LightningElement, wire, api, track} from 'lwc';
import getJSONFormData from '@salesforce/apex/DynamicFormController.getJSONFormData';

export default class DynamicFormGenerator extends LightningElement {
    json;
    error;
    isEdit;
    @wire(getJSONFormData)
    jsonData({ error, data }) {
        if (data) {
            this.error = undefined;
            this.json = JSON.parse(data);
            this.json = this.json.map(item => {
                if (item.type == 'picklist'){
                    item.isPicklist = true;
                    return item;
                }
                if (item.type == 'text'){
                    item.isText = true;
                    return item;
                }
                if (item.type == 'date'){
                    item.isDate = true;
                    return item;
                }
            })
        } else if (error) {
            this.error = error;
            this.json = undefined;
        }
    }

    handleSave() {
        const picklistForms = this.template.querySelectorAll('c-picklist-form');
        const textForms = this.template.querySelectorAll('c-text-form');
        textForms.forEach(form => form.save());

        // let editedJson = this.json;
        // for (let i = 0; i < editedJson.length; i++) {
        //     editedJson[i].value = [...inputs].find(inp => inp.getAttribute("data-id") == editedJson[i].id.toString()).value;
        // }
        // this.handleReadMode();
    }

    handleCancel() {
        this.template.querySelectorAll('c-text-form').forEach(item => item.setReadMode());
        this.template.querySelectorAll('c-text-form').forEach(item => item.setOriginal());
        const div = this.template.querySelector('div');
        div.classList.remove('slds-box');
        div.style.removeProperty('box-shadow');
        this.isEdit = false;

    }

    handleEditMode() {
        this.template.querySelectorAll('c-text-form').forEach(item => item.setEditmode());
        const div = this.template.querySelector('div');
        div.style.boxShadow = '0px 2px 5px silver';
        div.classList.add('slds-box');
        this.isEdit = true;
    }
}