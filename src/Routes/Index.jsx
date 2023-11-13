import React from 'react'
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from '../Pages/Contact';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const Index = () => {
    return (
        <>

                         <BrowserRouter>
                         <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/About' element={<About/>}/>
                            <Route path='/Contact' element={<Contact/>}/>
                         </Routes>
                         </BrowserRouter>
        </>
    )
}

export default Index