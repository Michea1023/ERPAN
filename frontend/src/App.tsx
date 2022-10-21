import React from 'react'
import './static/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import NavbarComp from './components/NavbarComp'
import useBusiness from './hooks/useBusiness'
import Inventory from './pages/Inventory'
import NotFound from './pages/NotFound'
import ForgotPassword from './pages/ForgotPassword'
function App() {
  const { business, handleBusiness } = useBusiness()

  return (
    <div className='App'>
      <Router>
        <NavbarComp business={business} />
        <Routes>
          <Route
            path={'/'}
            element={
              business.logged ? <Inventory /> : <Navigate to={'/login'} />
            }
          />
          <Route
            path={'/register'}
            element={
              !business.logged ? (
                <Register handleBusiness={handleBusiness} />
              ) : (
                <Navigate to={'/'} />
              )
            }
          />
          <Route
            path={'/login'}
            element={
              !business.logged ? (
                <Login handleBusiness={handleBusiness} />
              ) : (
                <Navigate to={'/'} />
              )
            }
          />
          <Route
            path={'/forgotPassword'}
            element={
              !business.logged ? (
                <ForgotPassword handleBusiness={handleBusiness} />
              ) : (
                <Navigate to={'/'} />
              )
            }
          />
          <Route path={'/*'} element={<NotFound />} />
        </Routes>
        {
          //Footer
        }
      </Router>
    </div>
  )
}

export default App
