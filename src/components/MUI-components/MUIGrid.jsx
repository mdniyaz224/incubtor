import { Grid } from '@mui/material';
import React from 'react'

const MUIGrid = (props) => {
    const { children, className, container, sm, md, xs, lg, ...rest } = props;

    return (
        <>
            <Grid className={className} container={container} sm={sm} md={md} xs={xs} lg={lg} {...rest}>
                {children}
            </Grid>

        </>
    )
}

export default MUIGrid