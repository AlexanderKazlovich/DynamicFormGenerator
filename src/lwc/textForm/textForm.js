/**
 * Created by Aliaksandr_Kazlovich on 24.10.2022.
 */

import {LightningElement, api, track} from 'lwc';

export default class TextForm extends LightningElement {
    @api
    id;
    @api
    type;
    @api
    name;
    @api
    label;
    @api
    value;

    editedValue

    handleChange(event) {
        this.editedValue = event.target.value;
    }

    handleMouseEnter(event) {
        const inputId = event.currentTarget.dataset.id;
        let svgs = this.template.querySelectorAll("svg");
        let svg = [...svgs].filter(svg => svg.getAttribute("data-id") == inputId);
        svg.forEach(svg => {
            svg.style.fill = 'black';
        })
    }

    handleMouseOut(event) {
        const inputId = event.currentTarget.dataset.id;
        let svgs = this.template.querySelectorAll("svg");
        let svg = [...svgs].filter(svg => svg.getAttribute("data-id") == inputId);
        svg.forEach(svg => {
            svg.style.fill = 'grey';
        })
    }

    @api
    setReadMode() {
        const input = this.template.querySelector('input');
        const svg = this.template.querySelector('svg');
        input.setAttribute("readonly", "");
        input.classList.remove('input-custom');
        svg.classList.remove('slds-hidden');
    }

    handleEditMode() {
        this.dispatchEvent(new CustomEvent('editmode'));
    }

    @api
    setEditmode() {
        const input = this.template.querySelector('input');
        const svg = this.template.querySelector('svg');
        input.removeAttribute("readonly");
        input.classList.add('input-custom');
        svg.classList.add('slds-hidden');
    }

    @api
    save(){
        //this.value = this.editedValue;
        console.log('tets',this.value)
        console.log('tets',this.editedValue)
    }

    renderedCallback() {
        this.editedValue = this.value;
    }
}