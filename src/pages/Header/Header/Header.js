import React, { useState } from 'react';
import NavHeader from '../NavHeader/NavHeader';
import SearchHeader from '../SearchHeader/SearchHeader';
import TopHeader from '../TopHeader/TopHeader';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <TopHeader setToggle={setToggle} toggle={toggle} />
            <NavHeader toggle={toggle} />
            <SearchHeader />
        </div>
    );
};

export default Header;