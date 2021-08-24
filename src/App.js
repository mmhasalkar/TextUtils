import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


function App() {
    const [theme, setTheme] = useState('light');
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });

        setTimeout(() => setAlert(null), 1500);
    }

    const handleChangetheme = (theme) => {
        setTheme(theme);
        document.body.className = `cstm-bg-${theme}`;
        showAlert(`Theme changed to ${theme}`, 'success');
    }

    return (
        <Router>
            <Navbar title="TextUtils" aboutText="About" theme={theme} changeTheme={handleChangetheme}/>
            <Alert alert={alert}/>
            <div className={`container my-4 cstm-bg-${theme}`}>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <TextForm heading="Enter text below to analyze" theme={theme} showAlert={showAlert}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
