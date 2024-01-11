import React from 'react';
import * as Ri from 'react-icons/ri';
import { NavLink } from 'react-router-dom';


const NavHeader = ({ toggle }) => {

    return (
        <div className='px-md-5'>
            <div className="navDesign container-fluid d-none d-md-flex">
                <div className="image cursor">
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


                <Ri.RiShoppingCartLine className='cart_icon my-auto cursor' />

            </div>


            <div className={toggle ? "d-block d-md-none" : "d-none"}>

                <div className='navBox'>
                    <ul className="my-auto ulDesign">
                        <li><NavLink to="/home" className="md-navlink" activeClassName="selected"> Home</NavLink></li>

                        <li><NavLink to="/skills" className="md-navlink" activeClassName="selected"> Shop</NavLink></li>

                        <li><NavLink to="/dashboard" className="md-navlink" activeClassName="selected"> Blog</NavLink></li>

                        <li><NavLink to="/about" className="md-navlink" activeClassName="selected"> About Us</NavLink></li>

                        <li><NavLink to="/about" className="md-navlink" activeClassName="selected"> Contact</NavLink></li>

                        <li><NavLink to="/about" className="md-navlink" activeClassName="selected"> FAQ</NavLink></li>
                    </ul>

                    <ul className="ulDesign">
                        <li><NavLink to="/about" className="md-navlink" activeClassName="selected">Free Delivery </NavLink></li>

                        <li><NavLink to="/about" className="md-navlink" activeClassName="selected">Returns Policy </NavLink></li>

                        <li><NavLink to="/about" className="md-navlink" activeClassName="selected">Follow Us </NavLink></li>
                        <li><NavLink to="/about" className="md-navlink" activeClassName="selected"> <i className="fab fa-facebook-f pe-2"> </i> <i className="fab fa-twitter pe-2"></i> <i className="fab fa-instagram"></i></NavLink></li>
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default NavHeader;