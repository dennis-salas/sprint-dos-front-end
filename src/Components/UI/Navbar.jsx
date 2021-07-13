import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-white">

            <Link
                className="navbar-brand"
                to="/"
            >
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link text-dark"
                        exact
                        to="/Guajalotas"
                    >
                        Guajalotas
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link text-dark"
                        exact
                        to="/Bebidas"
                    >
                        Bebidas
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link text-dark"
                        exact
                        to="/Tamales"
                    >
                        Tamales
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
