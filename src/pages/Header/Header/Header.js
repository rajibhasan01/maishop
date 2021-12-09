import React, { useState } from 'react';
import NavHeader from '../NavHeader/NavHeader';
import TopHeader from '../TopHeader/TopHeader';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <TopHeader setToggle={setToggle} toggle={toggle} />
            <NavHeader toggle={toggle} />
        </div>
    );
};

export default Header;