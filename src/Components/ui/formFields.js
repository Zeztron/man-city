import React from 'react';

const FormFields = ({formData, id}) => {

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formData.element) {
            case('input'):
                formTemplate = (
                    <div>
                        <input
                            {...formData.config}
                        />
                    </div>
                )
            break;
            default:
                formTemplate = null;
        }

        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormFields;