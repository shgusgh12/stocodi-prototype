import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.svg";
import "../styles/NavBar.scss";

export default function NavBar() {
    const location = useLocation();

    useEffect(() => {
        for (const endpoint of document.querySelectorAll(".nav-item > a")) {
            if (endpoint.getAttribute("href") == location.pathname) {
                console.log(endpoint.getAttribute("href"));
                endpoint.classList.add("nav-item-highlight");
            } else {
                endpoint.classList.remove("nav-item-highlight");
            }
        }
    }, [location.pathname]);

    return (
        <nav className="nav-wrapper wrapper">
            <ul className="nav-container container">
                <li className="nav-item nav-item-main">
                    <Link to="/">
                        <img src={logo} alt="" />
                        <span>Stocodi</span>
                    </Link>
                </li>

                <li style={{ flexGrow: 1 }} />

                <li className="nav-item">
                    <Link to="/experiment">투자 실험</Link>
                </li>

                <li className="nav-item">
                    <Link to="/study">스터디</Link>
                </li>

                <li className="nav-item">
                    <Link to="/community">커뮤니티</Link>
                </li>

                <li style={{ width: "50px" }} />

                <li className="nav-item nav-item-login">
                    <Link to="/login">로그인</Link>
                </li>

                <li className="nav-item nav-item-register">
                    <Link to="/register">
                        <span>회원가입</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
