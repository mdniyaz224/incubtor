import React from 'react'
import "../../components/UI-components/Resource.css"
import { MUIBox,MUIGrid, MUITypograpy } from '../MUI-components'

const Resource = () => {
    return (
        <>
            <MUIBox className="resource_img" >
                {/* <MUIBox className='resource_text' sx={{ marginTop: '100px', marginBottom: '20px' }}>
                    <MUITypograpy variant="h3" sx={{ color: 'white', textAlign: 'justify' }}>
                        “Incubator is a great resource for startups considering getting off the ground in the best way.”
                    </MUITypograpy>
                </MUIBox> */}
                <MUIGrid item xs={12} mb={8} className='resource_text' >
                    <MUITypograpy variant="h3" mt={5} className='incubator'>
                    “Incubator is a great resource for startups considering getting off the ground in the best way.”
                    </MUITypograpy>
                </MUIGrid>
                <hr className='hr' />
                <MUIBox mb={10}>
                    <MUITypograpy variant="h4" sx={{ color: 'white', textAlign: 'center' }} mt={7}>
                        Bruce Sutton
                    </MUITypograpy>
                    <MUITypograpy variant="body2" sx={{ color: 'white', textAlign: 'center' }} mt={1}>
                        Co-founder of StartUps
                    </MUITypograpy>
                </MUIBox>
            </MUIBox>
        </>
    )
}

export default Resource