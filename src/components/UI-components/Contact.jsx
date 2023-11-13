import React from 'react'
import { MUIBox, MUIGrid, MUITypograpy, MUICard } from '../MUI-components'
import "../UI-components/Contact.css"
import Card from '../../Pages/Card'
import ContactCard from './ContactCard'
const Contact = () => {
    return (
        <>
            <MUIBox sx={{ width: '100%', color: 'white' }} className="contact" mb={40}>
                <MUIBox className="contact-bg" sx={{ textAlign: 'center' }}>
                    <MUITypograpy variant="h2" pt={20} sx>
                        Contact Us
                    </MUITypograpy>
                    <MUITypograpy variant="body1" pt={2} mb={30}>
                        Drop us a line or give us a ring. We love to hear from you and are happy to answer any questions.
                    </MUITypograpy>

                </MUIBox>
                <MUIGrid container className="contact_card" pl={20} pr={20}>
                    <MUIGrid item xs={12} sm={12} md={4} className='card_width'>
                        <ContactCard 
                            title='OUR OFFICE'
                            desc='879 Schulist Parks Suite 559'
                        />
                    </MUIGrid>
                    <MUIGrid item xs={12} md={4}>
                        <ContactCard
                            title='OUR MAIL'
                            desc='info@incubator.com'
                        />
                    </MUIGrid>
                    <MUIGrid item xs={12} md={4} >
                        <ContactCard
                            title='OUR PHONE'
                            desc='034.112.242.67'
                        />
                    </MUIGrid>
                </MUIGrid>

            </MUIBox>
        </>
    )
}

export default Contact