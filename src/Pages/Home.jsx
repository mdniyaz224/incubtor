import React from 'react'
import Head from '../components/UI-components/header/Head'
import development from "../assets/images/startup-development.png"
import marketing from "../assets/images/startup-marketing.png"
import Security from "../assets/images/startup-security.png"
import Design from "../assets/images/startup-design.png"
import logo1 from "../assets/images/jena-lambert-team.png"
import logo2 from "../assets/images/raymond-turner-team.png"
import logo3 from "../assets/images/bruce-sutton-team.png"
import logo4 from "../assets/images/vincent-adams-team.png"
import "../Pages/Home.css"
import Messon from './Messon'
import { MUIBox, MUIGrid, MUITypograpy } from '../components/MUI-components'
import Grid from '@mui/material/Grid';


import Card from './Card'
import Solution from './Solution'
import Resource from '../components/UI-components/Resource'
import Subscribe from '../components/UI-components/Subscribe'
// import Crousel from '../components/UI-components/Crousel'
import Logo from '../components/UI-components/Logo'
import Blog from '../components/UI-components/Blog'
import Contact from '../components/UI-components/Contact'
import Footer from '../components/UI-components/Footer'
const Home = () => {
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
              The hardest part of starting up is starting out
            </MUITypograpy>
          </MUIBox>
        </MUIGrid>
        <MUIGrid item xs={12}>
          <MUITypograpy variant="h4" mt={5} sx={{ textAlign: 'center', color: '#666;', fontWeight: '700', fontSize: '16px', lineHeight: '30px', margin: 'auto 20% auto 20%' }}>
            Surrounded by smart,
            passionate people and with the best tools
            and approaches at your disposal, you ll take
            giant leaps toward creating a business,
            becoming a founder and connecting.
          </MUITypograpy>
        </MUIGrid>
        <MUIGrid container mt={20} spacing={4} sx={{ padding: '0 10% 0 10%' }}>
          <MUIGrid item xs={12} sm={6} md={3}>
            <Card
              logo1={marketing}
              title="Marketing"
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
            />
          </MUIGrid>
          <MUIGrid item xs={12} sm={6} md={3}>
            <Card
              logo1={development}

              title="Development"
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
            />
          </MUIGrid>
          <MUIGrid item xs={12} sm={6} md={3}>
            <Card
              logo1={Security}
              title="Security"
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
            />
          </MUIGrid>
          <MUIGrid item xs={12} sm={6} md={3}>
            <Card
              logo1={Design}
              title="Design"
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
            />
          </MUIGrid>
        </MUIGrid>
        <Messon />
        <Solution />
        <MUIGrid item xs={12}  >
          <MUIBox className='The-hardest-part'>
            <MUITypograpy variant="h4" mt={20} sx={{ textAlign: 'center', color: '#333', fontWeight: '700', fontSize: '40px', lineHeight: '48px' }}>
              The best team available
            </MUITypograpy>
          </MUIBox>
        </MUIGrid>
        <MUIGrid item xs={12} >
          <MUITypograpy variant="h4" mt={5} sx={{ textAlign: 'center', color: '#666;', fontWeight: '700', fontSize: '16px', lineHeight: '30px', margin: 'auto 20% auto 20%' }}>
            We understand the success secrets of the world's most successful business teams.
          </MUITypograpy>
        </MUIGrid>
        <Grid container mt={10} spacing={4} sx={{ padding: '0 10% 0 10%' }} mb={10}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              logo1={logo1}
              styles={styles}
              title="Raymond Turner"
              description='Cloud Manager'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              logo1={logo2}
              styles={styles}
              title="Bruce Sutton"
              description='Senior Web Developer'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              logo1={logo3}
              styles={styles}
              title="Vincent Adams"
              description='Network Engineer'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              logo1={logo4}
              styles={styles}
              title="Jena Lambert"
              description='Sales & Marketing Manager'
            />
          </Grid>
        </Grid>
        <Resource />
        <Subscribe />
        {/* <Crousel /> */}
        <Logo />
        <Blog />
        <Contact />

      </MUIGrid>
      <Footer />


    </>
  )
}

export default Home
