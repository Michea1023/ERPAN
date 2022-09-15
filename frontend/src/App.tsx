import React, {useState} from 'react';
import logo from './static/images/logo.svg';
import './static/css/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from "./pages/Register";
import {Business_Response} from "./types/response_types";

function App() {
    const [business, setBusiness] = useState<Business_Response>({
        name: "",
        token: ""
    })

    return (
        <div className="App">
            <Router>
                {
                    //Nav Bar
                }
                <Routes>
                    <Route path={'/register'} element={<Register />}/>
                </Routes>
                {
                    //Footer
                }
            </Router>
        </div>
    );
}

export default App;
