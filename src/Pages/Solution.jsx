import React from 'react'
import Button from "@mui/material/Button"
import "../Pages/Solution.css"
import { MUIBox, MUIGrid, MUITypograpy } from '../components/MUI-components'
const Solution = () => {
    return (
        <>
            <MUIGrid container className="solution_bg_img" mb={15}>
                <MUIGrid item xs={12}mb={8} >
                    <MUIBox className='The-hardest-part'>
                        <MUITypograpy variant="h4" mt={20} sx={{ textAlign: 'center', color: '#333', fontWeight: '700', fontSize: '40px', lineHeight: '48px' }}>
                            We have the right solutions
                        </MUITypograpy>
                    </MUIBox>
                </MUIGrid>
                <MUIGrid item xs={12} mb={8}>
                    <MUITypograpy variant="h4" mt={5} sx={{ textAlign: 'center', color: '#666;', fontWeight: '700', fontSize: '16px', lineHeight: '30px', margin: 'auto 20% auto 20%' }}>
                        Services done right will have a positive impact on your business. Help us understand you and your business needs so that we can serve you better.
                    </MUITypograpy>
                </MUIGrid>
                <MUIBox sx={{ textAlign: 'center',margin:'auto',padding:'auto' }} mt={10}>
                    <Button variant="contained" size="large" className='find_how' sx={{ bgcolor: 'white', color: 'blue', fontWeight: '500' }}>
                        BUY INCBURATOR
                    </Button>
                </MUIBox>

            </MUIGrid>
        </>
    )
}

export default Solution