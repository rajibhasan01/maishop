import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import * as Ri from 'react-icons/ri';

const TopHeader = ({ setToggle, toggle }) => {
    const ref = useRef()
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
    }, [isMenuOpen])



    return (
        <div className="topBar">
            <Container fluid className="px-md-5 topHeaderBox">
                <div className="py-2 d-md-flex d-none cursor">
                    <div className="pe-3 border-end"> <i className="fas fa-truck pe-2"></i>Free Delivery </div>
                    <div className="px-3 border-end"> <i className="fas fa-globe-americas pe-2"></i>Returns Policy </div>
                    <div className="px-3">Follow Us <i className="fab fa-facebook-f px-2"> </i> <i className="fab fa-twitter pe-2"></i> <i className="fab fa-instagram"></i></div>
                </div>

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

                    <Ri.RiShoppingCartLine className='cart_icon my-auto ms-2 d-md-none fs-6' />
                </div>
            </Container>
        </div>
    );
};

export default TopHeader;