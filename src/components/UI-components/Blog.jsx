import React from 'react'
import { MUIBox, MUICard, MUIGrid, MUITypograpy } from '../MUI-components'
import "../UI-components/Blog.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <>
            <MUIBox  className='latest_blog_post' mb={15}>
                <MUITypograpy variant="h4" mt={10} mb={3}>
                    Latest blog posts
                </MUITypograpy>
                <MUITypograpy variant="body">
                    Read more about our latest news posts and be informed.
                </MUITypograpy>
            </MUIBox>
            <MUIGrid container spacing={4} ml={10} mr={10} mb={10} >
                <MUIGrid item xs={12} sm={6} md={3} className='card_space'>
                    <MUICard pb={5}>
                        <MUIBox p={5}>
                            <MUITypograpy variant="body">
                                Feb 3, 2016
                            </MUITypograpy>
                            <MUIBox pt={3} >
                                <MUITypograpy variant="h6" className='future'>
                                    Future design concept
                                </MUITypograpy>
                                <MUIBox pt={3}>
                                    <MUITypograpy variant="body" pb={5}>
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam et suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Et mollis, est non 
                                    </MUITypograpy>
                                </MUIBox>
                                <Link className='learn_more' endIcon={<KeyboardArrowRightIcon />} pt={10}>
                                    LEARN MORE
                                </Link>
                            </MUIBox>
                        </MUIBox>
                    </MUICard>
                </MUIGrid>
                <MUIGrid item xs={12} sm={6} md={3}  className='card_space'>
                    <MUICard pb={5}>
                        <MUIBox p={5}>
                            <MUITypograpy variant="body">
                                Feb 3, 2016
                            </MUITypograpy>
                            <MUIBox pt={3} >
                                <MUITypograpy variant="h6" className='future'>
                                    Future design concept
                                </MUITypograpy>
                                <MUIBox pt={3}>
                                    <MUITypograpy variant="body">
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam et suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Et mollis, est non 
                                    </MUITypograpy>
                                </MUIBox>
                                <Link className='learn_more' endIcon={<KeyboardArrowRightIcon />} pt={10}>
                                    LEARN MORE
                                </Link>
                            </MUIBox>
                        </MUIBox>
                    </MUICard>
                </MUIGrid>
                <MUIGrid item xs={12} sm={6} md={3}  className='card_space'>
                    <MUICard pb={5}>
                        <MUIBox p={5}>
                            <MUITypograpy variant="body">
                                Feb 3, 2016
                            </MUITypograpy>
                            <MUIBox pt={3} >
                                <MUITypograpy variant="h6" className='future'>
                                    Future design concept
                                </MUITypograpy>
                                <MUIBox pt={3}>
                                    <MUITypograpy variant="body">
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam et suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Et mollis, est non 
                                    </MUITypograpy>
                                </MUIBox>
                                <Link className='learn_more' endIcon={<KeyboardArrowRightIcon />} pt={10}>
                                    LEARN MORE
                                </Link>
                            </MUIBox>
                        </MUIBox>
                    </MUICard>
                </MUIGrid>
                <MUIGrid item xs={12} sm={6} md={3} className='card_space'>
                    <MUICard pb={5}>
                        <MUIBox p={5}>
                            <MUITypograpy variant="body">
                                Feb 3, 2016
                            </MUITypograpy>
                            <MUIBox pt={3} >
                                <MUITypograpy variant="h6" className='future'>
                                    Future design concept
                                </MUITypograpy>
                                <MUIBox pt={3}>
                                    <MUITypograpy variant="body">
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam et suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Et mollis, est non 
                                    </MUITypograpy>

                                </MUIBox>
                            </MUIBox>
                            <Link className='learn_more' pt={10}>
                                LEARN MORE
                            </Link>
                        </MUIBox>

                    </MUICard>
                </MUIGrid>
            </MUIGrid>
        </>
    )
}

export default Blog