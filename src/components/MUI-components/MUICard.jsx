import { Card } from '@mui/material';
import React from 'react'

const MUICard = (props) => {
    const { children, className, ...rest } = props;
    return (
        <>
            <Card className={className} {...rest}>
                {children}

            </Card>
        </>
    )
}

export default MUICard