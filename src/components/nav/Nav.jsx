import { useState } from "react";
import React from 'react'
import { translateText} from "../../helpers/translation";

import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  
    /*========================== Change Background Header =============================*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // When the scroll is higher than 200 viewport height, add
        // the scroll-header class to a tag with the header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    /*========================== Toggle Menu =============================*/
    const [Toggle, showMenu] = useState(false);

    return(
        <div className="NavMain__Container">
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo" style={{color: "blue"}}>EXKO</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#Electronics" className="nav__link active-link">
                            <i class='bx bxs-devices nav__icon'></i>
                                <Link to="/Electronics" className="navText__style">{translateText().navElectronics}</Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/" className="nav__link active-link">
                                <i class='bx bxs-book-bookmark nav__icon' ></i>
                                <Link to="/Books" className="navText__style">{translateText().navBooks}</Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Clothes" className="nav__link active-link">
                                <i class='bx bx-male-female nav__icon' ></i>
                                <Link to="/Clothes" className="navText__style">{translateText().navClothes}</Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Shoeses" className="nav__link active-link">
                                <i class='bx bxl-shopify nav__icon' ></i>
                                <Link to="/Shoeses" className="navText__style">{translateText().navShoeses}</Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Accessories" className="nav__link active-link">
                                <i class='bx bxs-gift nav__icon' ></i>
                                <Link to="/Accessuaries" className="navText__style">{translateText().navAccsessories}</Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Beauty&Care" className="nav__link active-link">
                                <i class='bx bxs-laugh nav__icon' ></i>
                                <Link to="/HealthCare" className="navText__style">{translateText().navBeautyCare}</Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Health" className="nav__link">
                                <i class='bx bx-run nav__icon' ></i>
                                <Link to="/Health" className="navText__style">{translateText().navHealth}</Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Laptops" className="nav__link">
                                <i class='bx bx-laptop nav__icon' ></i>
                                <Link to="/Laptops" className="navText__style">{translateText().navLaptops}</Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Toys" className="nav__link">
                                <i class='bx bxs-balloon nav__icon' ></i>
                                <Link to="/Toys" className="navText__style">{translateText().navToys}</Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Watches" className="nav__link">
                                <i class='bx bxs-watch nav__icon' ></i>
                                <Link to="/Watches" className="navText__style">{translateText().navWatches}</Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Catalog" className="nav__link">
                                <i class='bx bxs-hand-down nav__icon'></i>
                                {translateText().NavCatalog}
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    </div>
    )
}

export default Nav