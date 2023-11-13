import React from 'react'
import "../contactHead/Contact.css"
import { MUIBox, MUIGrid, MUITypograpy } from '../../MUI-components'

import Navbar from "../header/Navbar.jsx"
const Head = () => {
  return (
   <>
    <MUIBox className='contact_head_img' >
                <Navbar/>
                <MUIBox  className="contact_us_text" >
                    <MUITypograpy variant="h2" >
                    Contact Us
                    </MUITypograpy>
                </MUIBox>
            </MUIBox>
   </>
  )
}

export default Head