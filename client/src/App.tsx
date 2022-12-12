import React from 'react';
import './App.css';
import {
    Route,
    Routes,
} from 'react-router-dom';
import Home from "./components/viewes/Home";
import Task from "./components/viewes/Task";
import Latout from "./components/viewes/Latout";
import RegistrationView from "./components/viewes/RegistrationView";
import LoginView from "./components/viewes/LoginView";


function App() {
    return<>
        <Routes>
            <Route path = '/' element={<Latout/>}>
                <Route index element={ <Home />}/>
                <Route path='/Login' element={ <LoginView/>} />
                <Route path='/Registration' element={ <RegistrationView/>}/>
                <Route path='/task/:id' element={ <Task />}/>
            </Route>
        </Routes>

    </>;

}

export default App;