import React from 'react'
import "./Head.css"
import Navbar from "./Navbar"
import Button from '@mui/material/Button';
import { MUIBox, MUIGrid, MUITypograpy } from '../../MUI-components'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


// import { MUITypograpy } from '../../components/MUI-components'
const Head = () => {
    return (
        <>
            <MUIGrid container className='head_bg_img'>
                <Navbar />
                <MUIBox className='head_div'>
                    <MUIBox className='head_font'>
                        <MUITypograpy variant="h1" className='head_font_h2' sx={{ fontFamily: 'mycustomfont' }}>
                            WE PREPARE STARTUPS FOR ACCELERATORS
                        </MUITypograpy>
                    </MUIBox>
                    <MUIBox className='head_para'>
                        <MUITypograpy variant="body1"  >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dicta dignissimos atque libero perspiciatis,
                            velit similique optio voluptatibus tempore repellendus odit minima .
                        </MUITypograpy>
                    </MUIBox>
                    <Button variant="contained" size="large" className='find_how'  mb={20}>
                        FIND HOW
                    </Button>
                </MUIBox>
            </MUIGrid>
            <MUIBox className="arrow">
                <ArrowCircleDownIcon sx={{fontSize:'90px', margin:'auto',display: 'block',backgroundColor:'blue',borderRadius:'100px'}} />
            </MUIBox>
        </>
    )
}

export default Head