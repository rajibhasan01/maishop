import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import * as Ri from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const TopHeader = ({ setToggle, toggle }) => {
    const [scrolling, setScrolling] = useState(false);
    const ref = useRef();


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggleMenu = () => setToggle(!toggle);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen]);

    window.onscroll = () => {
        if (window.scrollY > 45) {
            setScrolling(true);
        }
        else {
            setScrolling(false);
        }
    };



    return (
        <div className="topBar">
            <div className='px-md-5'>
                <Container fluid className="topHeaderBox">
                    <div className="py-2 d-md-flex d-none cursor">
                        <div className="pe-3 topHeaderItem border-end"> <i className="fas fa-truck pe-2"></i>Free Delivery </div>
                        <div className="px-3 topHeaderItem border-end returns"> <i className="fas fa-globe-americas pe-2"></i>Returns Policy </div>
                        <div className="px-3 followUs"><span className='topHeaderItem'>Follow Us </span><i className="fab fa-facebook-f px-2"> </i> <i className="fab fa-twitter pe-2"></i> <i className="fab fa-instagram"></i></div>
                    </div>

                    {/* nav show when scroll */}
                    <ul className={scrolling ? "my-auto topNav" : "d-none"}>
                        <li><NavLink to="/home" className="navlink" activeClassName="selected"> Home</NavLink></li>

                        <li><NavLink to="/skills" className="navlink " activeClassName="selected"> Shop</NavLink></li>

                        <li><NavLink to="/dashboard" className="navlink" activeClassName="selected"> Blog</NavLink></li>

                        <li><NavLink to="/about" className="navlink" activeClassName="selected"> About Us</NavLink></li>

                        <li><NavLink to="/about" className="navlink" activeClassName="selected"> Contact</NavLink></li>

                        <li><NavLink to="/about" className="navlink" activeClassName="selected"> FAQ</NavLink></li>

                    </ul>


                    <div className='d-md-none d-flex align-items-center'>
                        <div className={toggle ? 'menu-btn open' : 'menu-btn'} onClick={handleToggleMenu}>
                            <div className='menu-btn_burger'></div>
                        </div>
                        <div className='ps-1 cursor'>
                            MaiShop
                        </div>
                    </div>

                    <div className='d-flex cursor'>
                        <div className="dropdownn" ref={ref}>

                            <div onClick={() => setIsMenuOpen(oldState => !oldState)} className={isMenuOpen ? "active" : "link"}>Login <i className="fas fa-sign-in-alt ps-1"></i></div>

                            <div className={isMenuOpen ? "dropdownn-menu active" : "dropdownn-menu"}>
                                <form action="">

                                    <input type="email" name="email" id="email" placeholder='Enter email' />
                                    <input type="password" name="password" id="password" placeholder='Enter password' />

                                    <input className="loginBtn" type="submit" value="Login" />
                                </form>
                                <p>New User? <span>Register Here</span></p>
                            </div>
                        </div>

                        <Ri.RiShoppingCartLine className={scrolling ? "cart_icon my-auto ms-2 fs-6" : "cart_icon my-auto ms-2 d-md-none fs-6"} />
                    </div>
                </Container>
            </div >
        </div >
    );
};

export default TopHeader;