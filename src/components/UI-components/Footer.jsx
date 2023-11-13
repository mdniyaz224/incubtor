import React from 'react'
import "../UI-components/Footer.css"
import { MUIBox, MUIGrid, MUITypograpy } from '../MUI-components'
import { List, ListItem } from '@mui/material'
import logo from "../../assets/images/logo-2.png"
import { MUIfb, MUIinsta, MUIpintrest, MUItwitter } from '../icons'

const Footer = () => {
    return (
        <>
            <MUIGrid container className='footer' >
                <MUIGrid item xs={12} md={4}>
                    <MUIBox >
                        <MUIBox className='footer_logo' >
                            <img src={logo} alt='' />
                        </MUIBox>
                        <MUIBox className='footer_list'>
                            <List  >
                                <ListItem sx={{ textAlign: 'center' }}>
                                    ABOUT US
                                </ListItem>
                                <ListItem>
                                    SERVICES
                                </ListItem>
                                <ListItem>
                                    EVENTS
                                </ListItem>
                                <ListItem>
                                    NEWS
                                </ListItem>
                                <ListItem>
                                    CONTACT US
                                </ListItem>
                            </List>
                            <hr />
                            <MUIBox mt={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <MUIfb sx={{
                                    backgroundColor: 'blue', borderRadius: ' 38px', cursor: 'pointer'
                                }} />
                                <MUIinsta sx={{ backgroundColor: 'blue', borderRadius: ' 38px', cursor: 'pointer' }} />
                                <MUItwitter sx={{ backgroundColor: 'blue', borderRadius: ' 38px', cursor: 'pointer' }} />
                                <MUIpintrest sx={{ backgroundColor: 'blue', borderRadius: ' 38px', cursor: 'pointer' }} />
                            </MUIBox>
                        </MUIBox>
                    </MUIBox>
                </MUIGrid>
                <MUIGrid item xs={12} md={4}>
                    <MUIBox >
                        <MUITypograpy variant="h6" ml={5} mt={2}>
                            ABOUT US
                        </MUITypograpy>
                        <MUIBox mt={3}>
                            <MUITypograpy pl={5} pr={5}>
                                Malesuada neque duis adipiscing
                                nunc phasellus eget justo
                                rhoncus sociis parturient parturient
                            </MUITypograpy>
                            <MUITypograpy mt={2} pl={5} pr={5}>
                                Imperdiet parturient eleifend scelerisque
                                natoque parturient rutrum mus eros dis
                                ullamcorper a ullamcorper.Malesuada neque
                                duis adipiscing nunc phasellus eget
                                sociis on keydesign-themes.com.
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                </MUIGrid>
                <MUIGrid item xs={12} md={4} >
                    <MUIBox className="footer_post">
                        <MUITypograpy variant="h5" mt={2}>
                            RECENT POSTS
                        </MUITypograpy>
                        <MUIBox mt={3}>
                            <MUITypograpy variant="h6">
                                Future design concept
                            </MUITypograpy>
                            <MUITypograpy variant="h6">
                                Stand out venues
                            </MUITypograpy>
                            <MUITypograpy variant="h6">
                                Technology upgraded
                            </MUITypograpy>
                            <MUITypograpy variant="h6">
                                Deliver fresh news
                            </MUITypograpy>
                            <MUITypograpy variant="h6">
                                Development solutions
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                </MUIGrid>
            </MUIGrid>
            <MUIBox className='footer_text'>
                <MUITypograpy>
                    Incubator by KeyDesign. All rights reserved.
                </MUITypograpy>
                <MUITypograpy>
                    Privacy Policy
                    Terms and Conditions
                </MUITypograpy>
            </MUIBox>
        </>
    )
}

export default Footer