import { Container } from '@mui/material';
import React from 'react'

const MUIContainer = (props) => {
    const { children, className, ...rest } = props;
    return (
        <>
            <Container className={className} {...rest}>
                {children}
            </Container>
        </>
    )
}

export default MUIContainer