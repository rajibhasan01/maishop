import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import * as Ri from 'react-icons/ri';
import './Top.css';


const TopHeader = ({ setToggle, toggle }) => {
    const [loginToggle, setLoginToggle] = useState(false);

    const handleToggleMenu = () => setToggle(!toggle);

    const handleLoginToggle = () => setLoginToggle(!loginToggle);

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
                    <div className="dropdownn">

                        <div onClick={handleLoginToggle} className={loginToggle ? "link active" : "link"}>Login <i className="fas fa-sign-in-alt ps-1"></i></div>

                        <div className={loginToggle ? "dropdownn-menu active" : "dropdownn-menu"}>
                            Dropdown content
                        </div>
                    </div>

                    <Ri.RiShoppingCartLine className='cart_icon my-auto ms-2 d-md-none fs-6' />
                </div>
            </Container>
        </div>
    );
};

export default TopHeader;