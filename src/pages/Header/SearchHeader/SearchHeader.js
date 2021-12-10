import React from 'react';
import DropDown from './DropDown';
import Offer from './Offer';
import Search from './Search';

const SearchHeader = () => {
    return (
        <div className='container-fluid px-5'>

            <div className="row mt-2">

                <div className="col-md-3">
                    <DropDown />
                </div>

                <div className="col-md-6">
                    <Search />
                </div>

                <div className="col-md-3">
                    <Offer />
                </div>

            </div>
        </div>
    );
};

export default SearchHeader;