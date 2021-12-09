import React from 'react';
import { Container } from 'react-bootstrap';

const TopHeader = () => {
    return (
        <div className="topBar">
            <Container fluid className="px-5 topHeaderBox">
                <div className="py-2 d-flex">
                    <div className="pe-3 border-end"> <i className="fas fa-truck pe-2"></i>Free Delivery </div>
                    <div className="px-3 border-end"> <i className="fas fa-globe-americas pe-2"></i>Returns Policy </div>
                    <div className="px-3">Follow Us <i className="fab fa-facebook-f px-2"> </i> <i className="fab fa-twitter pe-2"></i> <i className="fab fa-instagram"></i></div>
                </div>

                <div>
                    <div className="">Login <i className="fas fa-sign-in-alt ps-1"></i></div>
                </div>
            </Container>
        </div>
    );
};

export default TopHeader;