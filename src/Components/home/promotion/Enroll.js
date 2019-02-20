import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormFields from '../../ui/formFields';
import { validate } from '../../ui/misc';

export default class Enroll extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            }
        }
    }

    updateForm(element) {
        // console.log(element)
        const newFormData = {...this.state.formData}
        const newElement = {...newFormData[element.id]}

        newElement.value = element.event.target.value;
        let validData = validate(newElement);
        // console.log(validData);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormData[element.id] = newElement;
        // console.log(newFormData);
        
        this.setState({
            formError: false,
            formData: newFormData
        })

    }

    resetFormSuccess() {
        const newFormData = { ...this.state.formData }

        for(let key in newFormData) {
            newFormData[key].value = '';
            newFormData[key].valid = false;
            newFormData[key].validationMessage = '';
        }

        this.setState({
            formError: false,
            formData: newFormData,
            formSuccess: 'Congratulations'
        })

        this.successMessage();

    }

    successMessage() {
        setTimeout(() => {
            this.setState({
                formSuccess: ''
            })
        }, 2000)
    }

    submitForm(event) {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid) {
            this.resetFormSuccess();

        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormFields
                                id={'email'}
                                formData={this.state.formData.email}
                                change={(element) => this.updateForm(element)}
                            />
                            { this.state.formError ? 
                                <div className="error_label">Something went wrong, try again.</div> 
                            : null}
                            <div className="success_label">{this.state.formSuccess}</div>
                            <button onClick={(event) => this.submitForm(event)}>Enroll</button>
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }
}
