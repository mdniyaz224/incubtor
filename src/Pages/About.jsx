import React from 'react'
import { Head } from '../components/UI-components/AboutHead/Head'
import "../Pages/About.css"
import { MUIBox, MUIGrid, MUITypograpy } from '../components/MUI-components'
import { Box, Typography } from '@mui/material'
import img1 from "../assets/images/startup-development.png"
import img2 from "../assets/images/startup-marketing.png"
import img3 from "../assets/images/startup-security.png"
import img4 from "../assets/images/startup-design.png"
import Card from './Card'
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Footer from '../components/UI-components/Footer'
import logo1 from "../assets/images/jena-lambert-team.png"
import logo2 from "../assets/images/raymond-turner-team.png"
import logo3 from "../assets/images/bruce-sutton-team.png"
import logo4 from "../assets/images/vincent-adams-team.png"
const About = () => {
    const styles = {
        marginTop: '-56px',
        marginLeft: '-22px'
    };
    return (
        <>

            <Head />

            <MUIGrid container >
                <MUIGrid item xs={12} >
                    <MUIBox className='The-hardest-part'>
                        <MUITypograpy variant="h4" mt={20} sx={{ textAlign: 'center', color: '#333', fontWeight: '700', fontSize: '40px', lineHeight: '48px' }}>
                            GET TO KNOW US
                        </MUITypograpy>
                    </MUIBox>
                </MUIGrid>
                <MUIGrid item xs={12} >
                    <MUIBox className='The-hardest-part'>
                        <MUITypograpy variant="h6" sx={{ textAlign: 'center', color: '#333', }}>
                            We make your business stand out
                        </MUITypograpy>
                    </MUIBox>
                </MUIGrid>
                <Grid container mt={20} spacing={4} sx={{ padding: '0 10% 0 10%' }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            logo1={img1}
                            title="Our Company"
                            description='Porta nam faucibus. Fusce non dignissim dignissim nibh nibh. Urna eleifend. Sociosqu a proin congue.. Sociosqu a proin congue'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            logo1={img2}
                            title="Our Objective"
                            description='Porta nam faucibus. Fusce non dignissim dignissim nibh nibh. Urna eleifend. Sociosqu a proin congue.. Sociosqu a proin congue'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            logo1={img3}
                            title="Security"
                            description='Porta nam faucibus. Fusce non dignissim dignissim nibh nibh. Urna eleifend. Sociosqu a proin congue.. Sociosqu a proin congue'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            logo1={img4}
                            title="Design"
                            description='Porta nam faucibus. Fusce non dignissim dignissim nibh nibh. Urna eleifend. Sociosqu a proin congue.. Sociosqu a proin congue'
                        />
                    </Grid>
                </Grid>
                <MUIGrid item xs={12} >
                    <MUIBox className='The-hardest-part'>
                        <MUITypograpy variant="h4" mt={20} sx={{ textAlign: 'center', color: '#333', fontWeight: '700', fontSize: '40px', lineHeight: '48px' }}>
                            WHO WE ARE
                        </MUITypograpy>
                    </MUIBox>
                </MUIGrid>
                <MUIGrid item xs={12} >
                    <MUIBox className='The-hardest-part'>
                        <MUITypograpy variant="h6" sx={{ textAlign: 'center', color: '#333', }}>
                            A team of experienced professionals
                        </MUITypograpy>
                    </MUIBox>
                </MUIGrid>
            </MUIGrid>

            <Grid container spacing={2} mt={10} className='we_are-awsem' mb={15}>
                <Grid item sx={12} md={6}>
                    <Typography variant="h4">
                        We are Awesome
                    </Typography>
                    <Typography mt={2}>
                        Nisi suscipit fermentum nisl duis commodo cum ornare rutrum
                        imperdiet blandit lobortis, felis aliquam curae; habitasse
                        luctus condimentum integer, cum vel. Euismod sociosqu morbi
                        nulla malesuada sem nunc consectetuer proin rhoncus id. Purus
                        pulvinar, potenti gravida class. Hac sociosqu. Quis netus lacinia
                        varius mattis. Sociosqu a proin congue congue penatibus risus
                        euismod mi. Lorem curae; elit placerat leo, curabitur ut neque.
                        Dui, consectetuer cras pharetra
                    </Typography>
                </Grid>
                <Grid item sx={12} md={6}>
                    <Typography variant="h4">
                        Our Skills
                    </Typography>
                    <Box mt={3}>
                        <Typography>
                            Development
                        </Typography>
                        <LinearProgress variant="determinate" value={60} mt={2} />
                    </Box>
                    <Box mt={3}>
                        <Typography>
                            Design
                        </Typography>
                        <LinearProgress variant="determinate" value={75} mt={2} />
                    </Box>
                    <Box mt={3}>
                        <Typography >
                            Marketing
                        </Typography>
                        <LinearProgress variant="determinate" value={90} mt={2} />
                    </Box>

                </Grid>
            </Grid>


            <Grid container mt={20} spacing={4} sx={{ padding: '0 10% 0 10%' }} mb={15}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        logo1={logo1}
                        styles={styles}
                        title="Bruce Sutton"
                        description='Senior Web Developer'
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        logo1={logo2}
                        styles={styles}
                        title="Vincent Adams"
                        description='Network Engineer.'
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        logo1={logo3}
                        styles={styles}
                        title="Jena Lambert"
                        description='Sales & Marketing Manager.'
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        logo1={logo4}
                        styles={styles}
                        title="Raymond Turner"
                        description='Cloud Manager'
                    />
                </Grid>
            </Grid>

            <Footer />
        </>
    )
}

export default About