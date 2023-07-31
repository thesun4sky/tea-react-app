import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Login from "./components/Login";
import MemberSignUp from "./components/MemberSignUp";

function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route path="/signup" element={<MemberSignUp/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
