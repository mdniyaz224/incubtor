import { Typography } from '@mui/material';
import React from 'react'

const MUITypograpy = (props) => {
    const { children, className, ...rest } = props;
    return (
        <>
            <Typography className={className} {...rest}>
                {children}
            </Typography>

        </>
    )
}

export default MUITypograpy