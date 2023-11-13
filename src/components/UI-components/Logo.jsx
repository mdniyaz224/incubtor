import React from 'react'
import { MUIGrid } from '../MUI-components'
import logo1 from "../../assets/images/client-logo4.png"
import logo2 from "../../assets/images/client-logo5.png"
import logo3 from "../../assets/images/client-logo6.png"
import logo4 from "../../assets/images/client-logo7.png"
import logo5 from "../../assets/images/client-logo1.png"
import logo6 from "../../assets/images/client-logo2.png"

const Logo = () => {
    return (
        <>
            <MUIGrid container p={10}  spacing={4}>
                <MUIGrid item xs={6} sm={4} md={4} lg={2}>
                    <img src={logo1} alt='' />
                </MUIGrid>
                <MUIGrid item xs={6} sm={4} md={4} lg={2}>
                    <img src={logo2} alt='' />
                </MUIGrid>
                <MUIGrid item xs={6} sm={4} md={4} lg={2}>
                    <img src={logo3} alt='' />
                </MUIGrid>
                <MUIGrid item xs={6} sm={4} md={4} lg={2}>
                    <img src={logo4} alt='' />
                </MUIGrid>
                <MUIGrid item xs={6} sm={4} md={4} lg={2}>
                    <img src={logo5} alt='' />
                </MUIGrid>
                <MUIGrid item xs={6} sm={4} md={4} lg={2}>
                    <img src={logo6} alt='' />
                </MUIGrid>
            </MUIGrid>
        </>
    )
}

export default Logo