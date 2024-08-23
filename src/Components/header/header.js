import React from 'react';
import { NavLink } from 'react-router-dom';
 





export default function Header({}) {



    return (
        <div>
            <div>
                <h1>
                    Welcome To My Appointment Planner
                </h1>
            </div>
            <div>
                <NavLink to='/contacts' >Contacts</NavLink>
                <NavLink to='/appointments' >Appointments</NavLink>
            </div>
        </div>
    )
}