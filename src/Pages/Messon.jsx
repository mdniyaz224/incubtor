import React from 'react'
// import "./Pages/Mission.css"
import "../Pages/Mission.css"
import missonimg from "../assets/images/tab4 .jpg"
import startup_mission from "../assets/images/startup-mission.png"
import history from "../assets/images/startup-history.png"
import people from "../assets/images/startup-people.png"
import focus from "../assets/images/startup-focus.png"

import { MUIBox, MUIGrid, MUITypograpy } from '../components/MUI-components'

const Messon = () => {
    return (
        <>
            <MUIGrid container >
                <MUIGrid item sx={12} md={6}>
                    <MUIBox className='mission_img'>
                        <img src={missonimg} alt='' />
                    </MUIBox>
                </MUIGrid>
                <MUIGrid item  sx={12} md={6} mt={19}>
                    <MUIBox className="our_mission" ml={2} sx={{ bgcolor: 'blue', color: 'white' }}>
                        <MUIBox pl={2}>
                            <img src={startup_mission} alt='' />
                        </MUIBox>
                        <MUIBox ml={5}>
                            <MUITypograpy variant="h5" mb={2}>
                                Our mission
                            </MUITypograpy>
                            <MUITypograpy sx={{ lineHeight: '30px' }}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                    <MUIBox className="our_mission" ml={2}>
                        <MUIBox pl={2}>
                            <img src={history} alt='' />
                        </MUIBox>
                        <MUIBox ml={5}>
                            <MUITypograpy variant="h5">
                                Our history
                            </MUITypograpy>
                            <MUITypograpy sx={{ lineHeight: '30px' }}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                    <MUIBox className="our_mission" ml={2}>
                        <MUIBox pl={2}>
                            <img src={people} alt='' />
                        </MUIBox>
                        <MUIBox ml={5}>
                            <MUITypograpy variant="h5">
                                Our people
                            </MUITypograpy>
                            <MUITypograpy sx={{ lineHeight: '30px' }}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                    <MUIBox className="our_mission" ml={2}>
                        <MUIBox pl={2}>
                            <img src={focus} alt='' />
                        </MUIBox>
                        <MUIBox ml={5}>
                            <MUITypograpy variant="h5">
                                Our Focus
                            </MUITypograpy>
                            <MUITypograpy sx={{ lineHeight: '30px' }}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                </MUIGrid>
            </MUIGrid>
            {/* <MUIGrid mt={15}>
                <MUIGrid item xs={4}>
                    <MUIBox className="misson" sx={{ marginRight: '300px' }}>
                        <img src={missonimg} alt='' sx={{ width: '40%', height: '100px' }} />
                    </MUIBox>
                </MUIGrid>
                <MUIGrid item xs={8}>
                    <MUIBox>
                        <MUIBox>
                            <img src='' alt='' />
                        </MUIBox>
                        <MUIBox>
                            <MUITypograpy>
                                Our mission
                            </MUITypograpy>
                            <MUITypograpy>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                    <MUIBox>
                        <MUIBox>
                            <img src='' alt='' />
                        </MUIBox>
                        <MUIBox>
                            <MUITypograpy>
                                Our history
                            </MUITypograpy>
                            <MUITypograpy>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                    <MUIBox>
                        <MUIBox>
                            <img src='' alt='' />
                        </MUIBox>
                        <MUIBox>
                            <MUITypograpy>
                                Our people
                            </MUITypograpy>
                            <MUITypograpy>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                    <MUIBox>
                        <MUIBox>
                            <img src='' alt='' />
                        </MUIBox>
                        <MUIBox>
                            <MUITypograpy>
                                Our focus
                            </MUITypograpy>
                            <MUITypograpy>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </MUITypograpy>
                        </MUIBox>
                    </MUIBox>
                </MUIGrid>
            </MUIGrid> */}
        </>
    )
}

export default Messon