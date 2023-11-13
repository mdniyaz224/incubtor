import React from 'react'
import { MUIBox, MUICard, MUIGrid, MUITypograpy } from '../MUI-components'
// import img from "../../assets/images/testimonial-startup.png"
import "../UI-components/Crousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Carousel } from 'react-responsive-carousel';
import Avatar from '@mui/material/Avatar';
const Crousel = () => {
    return (
        <>
            <MUIBox className='latest_blog_post'>
                <MUITypograpy variant="h4" mt={10} mb={3}>
                    Our Clients Says
                    <hr style={{ width: '100px', Height: '50px', border: '3px solid red' }} />
                </MUITypograpy>
                <MUITypograpy variant="body">
                    No matter how difficult your idea is, we are geared to meet the challenge. We can provide you with some quick solutions, so don't waste your valuable time on time-consuming research.
                </MUITypograpy>
            </MUIBox>
            <Carousel>
                <MUIGrid container spacing={5} mt={20}>
                    <MUIGrid item xs={6}>
                        <MUIBox>
                            <MUICard>
                                <MUIBox>
                                    <FormatQuoteIcon sx={{ fontSize: '50px', color: 'blue' }} />
                                </MUIBox>
                                <MUIBox sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <MUIBox sx={{ margin: "0px 50px 30px 45px", textAlign: 'justify' }}>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ipsa sapiente doloribus
                                        porro corporis tempora perspiciatis expedita,
                                        alias recusandae iure excepturi quas ratione
                                        alias recusandae iure excepturi quas ratione
                                        alias recusandae iure excepturi quas ratione
                                    </MUIBox>
                                    <MUIBox>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '180px', height: '180px', marginRight: '50px' }} />
                                    </MUIBox>
                                </MUIBox>
                                <MUIBox sx={{ margin: "-40px 50px 20px 40px" }}>
                                    <MUITypograpy variant="h4" sx={{ color: 'blue' }}>
                                        steven cooley
                                    </MUITypograpy>
                                    <MUITypograpy variant="body1" sx={{ margin: '0px 380px 0px 0px' }}>
                                        product manager:classapps
                                    </MUITypograpy>
                                </MUIBox>
                            </MUICard>
                        </MUIBox>

                    </MUIGrid>
                    <MUIGrid item xs={6}>
                        <MUIBox>
                            <MUICard>
                                <MUIBox>
                                    <FormatQuoteIcon sx={{ fontSize: '50px', color: 'blue' }} />
                                </MUIBox>
                                <MUIBox sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <MUIBox sx={{ margin: "0px 50px 30px 45px", textAlign: 'justify' }}>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ipsa sapiente doloribus
                                        porro corporis tempora perspiciatis expedita,
                                        alias recusandae iure excepturi quas ratione
                                        alias recusandae iure excepturi quas ratione
                                        alias recusandae iure excepturi quas ratione
                                    </MUIBox>
                                    <MUIBox>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '180px', height: '180px', marginRight: '50px' }} />
                                    </MUIBox>
                                </MUIBox>
                                <MUIBox sx={{ margin: "-40px 50px 20px 40px" }}>
                                    <MUITypograpy variant="h4" sx={{ color: 'blue' }}>
                                        steven cooley
                                    </MUITypograpy>
                                    <MUITypograpy variant="body1" sx={{ margin: '0px 380px 0px 0px' }}>
                                        product manager:classapps
                                    </MUITypograpy>
                                </MUIBox>
                            </MUICard>
                        </MUIBox>

                    </MUIGrid>
                </MUIGrid>
                {/* -------------------------------------- */}
                <MUIGrid container spacing={5} mt={20}>
                    <MUIGrid item xs={6}>
                        <MUIBox>
                            <MUICard>
                                <MUIBox>
                                    <FormatQuoteIcon sx={{ fontSize: '50px', color: 'blue' }} />
                                </MUIBox>
                                <MUIBox sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <MUIBox sx={{ margin: "0px 50px 30px 45px", textAlign: 'justify' }}>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ipsa sapiente doloribus
                                        porro corporis tempora perspiciatis expedita,
                                        alias recusandae iure excepturi quas ratione
                                        alias recusandae iure excepturi quas ratione
                                        alias recusandae iure excepturi quas ratione
                                    </MUIBox>
                                    <MUIBox>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '180px', height: '180px', marginRight: '50px' }} />
                                    </MUIBox>
                                </MUIBox>
                                <MUIBox sx={{ margin: "-40px 50px 20px 40px" }}>
                                    <MUITypograpy variant="h4" sx={{ color: 'blue' }}>
                                        steven cooley
                                    </MUITypograpy>
                                    <MUITypograpy variant="body1" sx={{ margin: '0px 380px 0px 0px' }}>
                                        product manager:classapps
                                    </MUITypograpy>
                                </MUIBox>
                            </MUICard>
                        </MUIBox>

                    </MUIGrid>
                    <MUIGrid item xs={6}>
                        <MUIBox>
                            <MUICard>
                                <MUIBox>
                                    <FormatQuoteIcon sx={{ fontSize: '50px', color: 'blue' }} />
                                </MUIBox>
                                <MUIBox sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <MUIBox sx={{ margin: "0px 50px 30px 45px", textAlign: 'justify' }}>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ipsa sapiente doloribus
                                        porro corporis tempora perspiciatis expedita,
                                        alias recusandae iure excepturi quas ratione
                                        alias recusandae iure excepturi quas ratione
                                        alias recusandae iure excepturi quas ratione
                                    </MUIBox>
                                    <MUIBox>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '180px', height: '180px', marginRight: '50px' }} />
                                    </MUIBox>
                                </MUIBox>
                                <MUIBox sx={{ margin: "-40px 50px 20px 40px" }}>
                                    <MUITypograpy variant="h4" sx={{ color: 'blue' }}>
                                        steven cooley
                                    </MUITypograpy>
                                    <MUITypograpy variant="body1" sx={{ margin: '0px 380px 0px 0px' }}>
                                        product manager:classapps
                                    </MUITypograpy>
                                </MUIBox>
                            </MUICard>
                        </MUIBox>

                    </MUIGrid>
                </MUIGrid>
            </Carousel>
        </>
    )
}

export default Crousel