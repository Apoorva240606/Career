import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout(){

    return (
        <div className="help-layout">
            <h2 >Website Help</h2>
            <p>Nisi excepteur qui irure quis amet consectetur reprehenderit non culpa.</p>

            <nav>
                <NavLink to="faq">View the Faq</NavLink>
                <NavLink to="contact">View the contact</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}