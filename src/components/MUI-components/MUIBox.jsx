// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { Box } from '@mui/material'
const MUIBox = (props) => {
    const {children ,className,...rest}=props;
  return (
  <Box  className={className} {...rest}>
    {children}
  </Box>
  )
}

export default MUIBox