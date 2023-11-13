import React from 'react'
import "../Pages/Contact.css"
import Head from '../components/UI-components/contactHead/Head'
import { MUIBox, MUICard, MUIGrid, MUITypograpy } from '../components/MUI-components'

import logo from "../../src/assets/images/pricing-bg.png"
import Logo from '../components/UI-components/Logo';
import Button from "@mui/material/Button"
import Footer from '../components/UI-components/Footer';
const Contact = () => {
    return (
        <>
            <Head />
            <MUIGrid container>
                <MUIGrid item xs={12} sm={4} md={4} >
                    <MUICard   className='card_width'>
                        <MUIBox sx={{ textAlign: 'center' }} mt={10} mb={20} >
                            <img src='' alt='' />
                            <MUIBox mt={3}>
                                <MUITypograpy variant="h4">
                                    Our Offices
                                </MUITypograpy>
                                <MUIBox mt={2} pl={20} pr={20}>
                                    <MUITypograpy variant="body" >
                                        879 Schulist Parks Suite 559 Schulist, Berlin, Germany, Europe
                                    </MUITypograpy>
                                </MUIBox>
                            </MUIBox>
                        </MUIBox>
                    </MUICard>
                </MUIGrid>
                <MUIGrid item xs={12} sm={4} md={4} >
                    <MUICard sx={{ backgroundColor: '#f3f3f3' }}>
                        <MUIBox sx={{ textAlign: 'center' }} mt={10} mb={20}>
                            <img src='' alt='' />
                            <MUIBox mt={3}>
                                <MUITypograpy variant="h4" >
                                    Drop us a line
                                </MUITypograpy>
                                <MUIBox mt={2} pl={20} pr={20}>
                                    <MUITypograpy variant="body" >
                                        879 Schulist Parks Suite 559 Schulist, Berlin, Germany, Europe
                                    </MUITypograpy>
                                </MUIBox>
                            </MUIBox>
                        </MUIBox>
                    </MUICard>
                </MUIGrid>
                <MUIGrid item xs={12} sm={4} md={4} >
                    <MUICard sx={{ backgroundColor: '#e9e9e9' }}>
                        <MUIBox sx={{ textAlign: 'center' }} mt={10} mb={20}>
                            <img src='' alt='' />
                            <MUIBox mt={3}>
                                <MUITypograpy variant="h4" >
                                    Call us now
                                </MUITypograpy>
                                <MUIBox mt={2} pl={20} pr={20}>
                                    <MUITypograpy variant="body">
                                        879 Schulist Parks Suite 559 Schulist, Berlin, Germany, Europe
                                    </MUITypograpy>
                                </MUIBox>
                            </MUIBox>
                        </MUIBox>
                    </MUICard>
                </MUIGrid>
            </MUIGrid>
            <MUIBox className='pricing-bg' mt={8} >
                <img src={logo} alt='' />
            </MUIBox>

            <MUIBox>
                <Logo />
            </MUIBox>
            <MUIBox className='map_img' mb={20}>
                <MUIBox pt={20} pb={20} sx={{ textAlign: 'center' }}>
                    <Button variant="contained" size="large" className='find_how' >
                    Subscribe
                    </Button>
                </MUIBox>

            </MUIBox>
            <Footer/>
        </>
    )
}

export default Contact