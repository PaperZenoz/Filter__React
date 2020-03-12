import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Main/Home/Home";
import Info from "./components/Main/Info/Info";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <div className="container pt-5">
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/info' component={Info}/>
                </Switch>
            </div>
        </BrowserRouter>


    );
}

export default App;
