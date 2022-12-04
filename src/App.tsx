import React, {useState} from 'react';
import './App.css';
import LoginForm,{FormData} from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Home from "./components/viewes/Home";


function App() {

    const [views, setViews] = useState([true, false, false]);

    const onLoginSubmit = (data: FormData) => {
        console.log("Login submit",data);
        //const result = await fetch()
        setViews([false, false, true]);
    };

    const onRegistrationSubmit = (data: FormData) => {
        console.log("Registration submit",data);
        setViews([false, false, true]);
    };

    return<>
        {views[0] && <LoginForm onSubmit={onLoginSubmit}/>}
        {views[1] && <RegistrationForm onSubmit={onRegistrationSubmit}/>}
        {views[2] && <Home />}
    </>;

}

export default App;