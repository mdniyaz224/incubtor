import React from 'react'
import "../UI-components/Subscribe.css"
import { MUIBox, MUITypograpy } from '../MUI-components'
import Button from "@mui/material/Button"
const Subscribe = () => {
    return (
        <>
            <MUIBox sx={{ textAlign: 'center', width: '100%' }} className="subscribe_img">
                <MUITypograpy variant="h3" mt={25}>
                    Subscribe to more news
                </MUITypograpy>
                <MUIBox mt={10}>
                    <MUITypograpy variant="body1" mt={7} sx={{ width: '50%', margin: 'auto', padding: 'auto' }}>
                        Subscribe to newsletter. We'll be pleased to keep you up to date about new technology, events and innovative apps.
                    </MUITypograpy>
                    <MUIBox mt={10} mb={20}>
                        <Button variant="contained" size="large" className='find_how' sx={{ bgcolor: 'white', color: 'blue', fontWeight: '500' }}>
                           Subscribe
                        </Button>
                    </MUIBox>
                </MUIBox>
            </MUIBox>

        </>
    )
}

export default Subscribe