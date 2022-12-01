import React from 'react'
import './static/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Navigate, Route, Routes,} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import NavbarComp from './components/NavbarComp'
import useBusiness from './hooks/useBusiness'
import Inventory from './pages/Inventory'
import NotFound from './pages/NotFound'
import ForgotPassword from './pages/ForgotPassword'
import PasswordRecovered from './pages/PasswordRecovery'
import ChangePassword from './pages/ChangePassword'
import Order from './pages/Order'
import SalesHistory from './pages/SalesHistory'

function App() {
    const {business, handleBusiness} = useBusiness()

    return (
        <div className='App'>
            <Router>
                <NavbarComp business={business} handleBusiness={handleBusiness}/>
                <Routes>
                    <Route path={'/'} element={
                        business.logged ? <Order/> : <Navigate to={'/login'}/>
                    }/>
                    <Route path={'/inventory'} element={
                        business.logged ? <Inventory/> : <Navigate to={'/login'}/>
                    }>
                        <Route path={':search'} element={
                            business.logged ? <Inventory/> : <Navigate to={'/login'}/>
                        }/>
                    </Route>
                    <Route path={'/salesHistory'} element={
                        business.logged ? <SalesHistory/> : <Navigate to={'/login'}/>
                    }/>
                    <Route path={'/register'} element={
                        !business.logged ?
                            <Register handleBusiness={handleBusiness}/>:
                            <Navigate to={'/'}/>

                    }/>
                    <Route path={'/login'} element={
                        !business.logged ?
                            <Login handleBusiness={handleBusiness}/>:
                            <Navigate to={'/'}/>
                    }/>
                    <Route path={'/forgotPassword'} element={
                        !business.logged ? <ForgotPassword/> : <Navigate to={'/'}/>
                    }/>
                    <Route path={'/passwordRecovery'} element={
                        !business.logged ? <PasswordRecovered/> : <Navigate to={'/'}/>
                    }/>
                    <Route path={'/changePassword'} element={
                        business.logged ?
                            <ChangePassword handleBusiness={handleBusiness}/>:
                            <Navigate to={'/'}/>
                    }/>
                    <Route path={'/*'} element={<NotFound/>}/>
                </Routes>
                {
                    //Footer
                }
            </Router>
        </div>
    )
}

export default App
