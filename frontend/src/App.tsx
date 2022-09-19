import React, {useState} from 'react';
import './static/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from "./pages/Register";
import Login from './pages/Login';
import {Business_Response} from "./types/response_types";
import NavbarComp from './components/NavbarComp';

function App() {
    const [business, setBusiness] = useState<Business_Response>({
        name: "",
        token: ""
    })

    return (
        <div className="App">
            <Router>
                {
                    <NavbarComp/>
                }
                <Routes>
                    <Route path={'/register'} element={<Register />}/>
                    <Route path={'/login'} element={<Login />}/>
                </Routes>
                {
                    //Footer
                }
            </Router>
        </div>
    );
}

export default App;
