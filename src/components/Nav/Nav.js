import React from 'react'
import Logo from './lifeitselfbanner.gif'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import '../../styles/Nav.css'

function Navbar() {
    return (
        <>
            <nav className="topnav">
                {/* <!-- Logo --> */}
                <img className="logo" src={Logo} alt="Logo" />
                {/* <!-- Navigation links (hidden by default) --> */}
                <Nav className="justify-content-end" variant="pills" activeKey="/">
                    <Nav.Item>
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/blog" className={window.location.pathname === "/Blog" ? "nav-link" : "nav-link"}>Blog</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/travel" className={window.location.pathname === "/Travel" ? "nav-link" : "nav-link"}>Travel</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/recipes" className={window.location.pathname === "/Recipes" ? "nav-link" : "nav-link"}>Recipes</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/furbabies" className={window.location.pathname === "/FurBabies" ? "nav-link" : "nav-link"}>Fur Babies</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/gardening" className={window.location.pathname === "/Gardening" ? "nav-link" : "nav-link"}>Gardening</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/diyprojects" className={window.location.pathname === "/DIYProjects" ? "nav-link" : "nav-link"}>DIY Projects</Link>
                    </Nav.Item>
                </Nav>
            </nav>
        </>
    )
};

export default Navbar;