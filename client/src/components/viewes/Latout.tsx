import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Latout = () => {
    return <>
        <nav >
            <ul>
                <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                       <Link to="/registration">Registration</Link>
                    </li>
                 <li>
                       <Link to="/login">Login</Link>
                 </li>



                 <li>
                        <Link to="/task/1">API</Link>
                    </li>

                </ul>
        </nav>
        <Outlet/>
        </>;
};

export default Latout;