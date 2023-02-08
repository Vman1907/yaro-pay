import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import Footer from './Footer'
// import Home from './Home'
// import Policies from './Policies'
// import Terms from './Terms'
import React, { Suspense, useState } from 'react'
import Loading from './Loading'
// import Ambassador from './Ambassador'


const Home = React.lazy(() => import('./Home'))
const Policies = React.lazy(() => import('./Policies'))
const Terms = React.lazy(() => import('./Terms'))
const Ambassador = React.lazy(() => import('./Ambassador'))
const About = React.lazy(() => import('./About'))
const YaroCoin = React.lazy(() => import('./YaroCoin'))


const Router = () => {

    const [page, setPage] = useState('home')

    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Menu page={page} />
                <Routes>
                    <Route exact path='/' element={<Home page={page} setPage={setPage} />} />
                    <Route path='/home' element={<Home page={page} setPage={setPage} />} />
                    <Route path='/policies' element={<Policies page={page} setPage={setPage} />} />
                    <Route path='/terms' element={<Terms page={page} setPage={setPage} />} />
                    <Route path='/about' element={<About page={page} setPage={setPage} />} />
                    <Route path='/ambassador' element={<Ambassador page={page} setPage={setPage} />} />
                    <Route path='/yaro-coin' element={<YaroCoin page={page} setPage={setPage} />} />
                    <Route path='*' element={<Home page={page} setPage={setPage} />} />
                </Routes>
                <Footer />
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;