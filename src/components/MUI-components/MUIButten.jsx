import { Button } from '@mui/material';
import React from 'react'

const MUIButten = (props) => {
  const { children, className, ...rest } = props;
  return (
    <>
      <Button className={className}  {...rest}>
        {children}
      </Button>
    </>
  )
}

export default MUIButten