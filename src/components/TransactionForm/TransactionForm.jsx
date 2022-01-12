import React, { Component } from 'react'
import LabelInput from '../_shared/labelInput/labelInput'
import { Form } from "./TransactionForm.style.js";

export default class TransactionForm extends Component {
    state = {
        date: "",
        time: "",
        category: "",
        sum: "",
        currency: "",
        comment: "",
    };

    handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    };
    
    handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.addData(this.state);
    };


    render() {
        return (
        <Form onSubmit={this.handleSubmit}>
            <button type="submit">OK</button>
            <LabelInput name='date' handleChange={this.handleChange} title='День' type='date'/>
            <LabelInput name='time' handleChange={this.handleChange} title='Время' type='time'/>
            <LabelInput name='category' handleChange={this.handleChange} title='Категория' type='button'/>
            <LabelInput name='sum' handleChange={this.handleChange} title='Сумма' type='text' placeholder="Введите сумму" />
            <LabelInput name='currency' handleChange={this.handleChange} title="Валюта" type="button" />
            <LabelInput name='comment' handleChange={this.handleChange} type="text" placeholder="Коментарий" />
        </Form>
    )
}
}


