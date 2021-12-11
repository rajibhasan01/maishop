import React from 'react';
import { Dropdown } from 'react-bootstrap';
import * as Bi from 'react-icons/bi';


const Search = ({ _id }) => {
    const handleUpdateStatus = (id, status) => {
        console.log(id)
    }
    return (
        <div className='search'>
            <input type="text" className="" name="" id="" placeholder='Find your product' />
            <Dropdown>
                <Dropdown.Toggle className="dropDownSearch">
                    <Bi.BiMenuAltLeft className="me-2" /><span className='d-none d-md-inline'>All Category</span>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" className="dropDownItemSearch">
                    <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Pending")}>Pending</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Approved")}>Approved</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Shipped")}>Shipped</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Recieved")}>Recieved</Dropdown.Item>

                    <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Rejected")}>Rejected</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown >

            <div className='searchBox'>
                <p><span className='d-none d-xl-inline textTag'>Search</span> <Bi.BiSearch className='textTag' /></p>
            </div>
        </div>
    );
};

export default Search;