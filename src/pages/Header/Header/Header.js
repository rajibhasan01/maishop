import React, { useState } from 'react';
import NavHeader from '../NavHeader/NavHeader';
import SearchHeader from '../SearchHeader/SearchHeader';
import TopHeader from '../TopHeader/TopHeader';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='sticky-top main-header pb-2'>
            <TopHeader setToggle={setToggle} toggle={toggle} />
            <div className=""></div>
            <NavHeader toggle={toggle} />
            <SearchHeader />
        </div>
    );
};

export default Header;