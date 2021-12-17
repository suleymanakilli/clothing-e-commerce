import React from 'react'
import { FormInputContainer, FormInputLabel, GroupContainer } from './formInputStyle'
export default function FormInput({ handleChange, label, ...otherProps }) {
    return (
        <GroupContainer className="group">
            <FormInputContainer
                onChange={handleChange}
                {...otherProps} />
            {
                label ?
                    (<FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
                        {label}
                    </FormInputLabel >)
                    : null
            }
        </GroupContainer>
    )
}
