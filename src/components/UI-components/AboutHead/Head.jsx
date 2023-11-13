import React from 'react'
import Navbar from "../header/Navbar"
import "../AboutHead/Head.css"
import { MUIBox, MUIGrid, MUITypograpy } from '../../MUI-components'
export const Head = () => {
    return (
        <>
            <MUIBox className='about_head_img' >
                <Navbar />
                <MUIBox  className="about_us_text" >
                    <MUITypograpy variant="h2" >
                            ABOUT US
                    </MUITypograpy>
                </MUIBox>
            </MUIBox>

        </>
    )
}
