import React from 'react';

import { CustomButtonContainer } from './customButtonStyle';

const CustomButton = ({ children, ...otherProps }) => (
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;