import React, { useState } from 'react';
import * as Ri from 'react-icons/ri';
import { NavLink } from 'react-router-dom';


const NavHeader = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>

            <div className="navDesign container-fluid px-5 mt-2 d-none d-md-flex">
                <div className="image">
                    <img src="https://i.ibb.co/fY3z6BC/isla-500x500-37673648-ak449n55-removebg-preview.png" alt="" className="img-fluid" />
                </div>


                <ul className="my-auto">
                    <li><NavLink to="/home" className="navlink" activeClassName="selected"> Home</NavLink></li>

                    <li><NavLink to="/skills" className="navlink " activeClassName="selected"> Shop</NavLink></li>

                    <li><NavLink to="/dashboard" className="navlink" activeClassName="selected"> Blog</NavLink></li>

                    <li><NavLink to="/about" className="navlink" activeClassName="selected"> About Us</NavLink></li>

                    <li><NavLink to="/about" className="navlink" activeClassName="selected"> Contact</NavLink></li>

                    <li><NavLink to="/about" className="navlink" activeClassName="selected"> FAQ</NavLink></li>

                </ul>


                <Ri.RiShoppingCartLine className='cart_icon my-auto' />

            </div>


            <div className="navBox d-block d-md-none">
                <div className="imag">
                    <img src="https://i.ibb.co/fY3z6BC/isla-500x500-37673648-ak449n55-removebg-preview.png" alt="" className="img-fluid" />
                </div>


                <ul className="my-auto uidesign">
                    <li><NavLink to="/home" className="md-navlink" clas activeClassName="selected"> Home</NavLink></li>

                    <li><NavLink to="/skills" className="md-navlink" activeClassName="selected"> Shop</NavLink></li>

                    <li><NavLink to="/dashboard" className="md-navlink" activeClassName="selected"> Blog</NavLink></li>

                    <li><NavLink to="/about" className="md-navlink" activeClassName="selected"> About Us</NavLink></li>

                    <li><NavLink to="/about" className="md-navlink" activeClassName="selected"> Contact</NavLink></li>

                    <li><NavLink to="/about" className="md-navlink" activeClassName="selected"> FAQ</NavLink></li>

                </ul>
            </div>

        </div>

    );
};

export default NavHeader;