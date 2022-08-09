import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import Footer from './Footer'
// import Home from './Home'
// import Policies from './Policies'
// import Terms from './Terms'
import React, { Suspense } from 'react'
import Loading from './Loading'
// import Ambassador from './Ambassador'


const Home = React.lazy(() => import('./Home'))
const Policies = React.lazy(() => import('./Policies'))
const Terms = React.lazy(() => import('./Terms'))
const Ambassador = React.lazy(() => import('./Ambassador'))


const Router = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/policies' element={<Policies />} />
                    <Route path='/terms' element={<Terms />} />
                    <Route path='/ambassador' element={<Ambassador />} />
                    <Route path='*' element={<Home />} />
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;