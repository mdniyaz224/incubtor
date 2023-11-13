import React from 'react'

import { MUIBox, MUITypograpy } from '../components/MUI-components'

const Card = (props) => {
    return (
        <>
            <MUIBox container mb={5}>
                <MUIBox mb={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <MUIBox sx={{ width: '160px', height: '160px', borderRadious: '239px', borderRadius: '100%', boxShadow: ' 0 6px 20px rgba(0,0,0,7%)' }}>
                        <MUIBox sx={{ textAlign: 'center', marginLeft: '4px', marginTop: '60px'}}>
                            <img src={props.logo1} style={props.styles} alt=''  />
                        </MUIBox>
                    </MUIBox>
                    <MUIBox>
                        <MUITypograpy sx={{ textAlign: 'center' }} mt={5} variant="h5">
                            {props.title}
                        </MUITypograpy>
                    </MUIBox>
                    <MUITypograpy sx={{ textAlign: 'center' }} mt={2}>
                        {props.description}
                    </MUITypograpy>
                </MUIBox>
            </MUIBox>
        </>
    )
}

export default Card