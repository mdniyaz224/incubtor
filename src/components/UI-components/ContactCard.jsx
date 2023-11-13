import React from 'react'
import { MUIBox, MUICard, MUITypograpy } from '../MUI-components'
import logo from "../../assets/images/startup-office.png"

const ContactCard = (props) => {
    return (
        <>
            <MUICard >
                <MUIBox sx={{ textAlign: 'center' }} mt={10} mb={10}>
                    <img src={logo} alt='IMG' pt={4} />
                    <MUIBox mt={3}>
                        <MUITypograpy variant="h6">
                          {props.title}
                        </MUITypograpy>
                        <MUIBox mt={2}>
                            <MUITypograpy variant="body1">
                              {props.desc}
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                </MUIBox>
            </MUICard>
        </>
    )
}

export default ContactCard