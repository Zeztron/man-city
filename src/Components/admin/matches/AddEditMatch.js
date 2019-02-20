import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';
import FormFields from '../../ui/formFields';
import { validate } from '../../ui/misc';

export default class AddEditMatch extends Component {

    state = {
        matchId: '',
        formType: '',
        formError: false,
        formSuccess: '',
        teams: [],
        formData: {
            date: {
                element: 'input',
                value: '',
                config: {
                    label: 'Event date',
                    name: 'date_input',
                    type: 'date'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            local: {
                element: 'select',
                value: '',
                config: {
                    label: 'Select a local team',
                    name: 'select_local',
                    type: 'select',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: false
            }
        }
    }

    render() {
        return (
            <AdminLayout>
                <div className="editmatch_dialog_weapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(event) => this.submitForm(event)}>
                            <FormFields
                                id={'date'}
                                formData={this.state.formData.date}
                                change={(element) => this.updateForm(element)}
                            />
                        </form>
                    </div>
                </div>
            </AdminLayout>
        )
    }
}
