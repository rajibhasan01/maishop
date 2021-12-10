import React from 'react';
import { Dropdown } from 'react-bootstrap';
import * as Bi from 'react-icons/bi';


const DropDown = ({ _id }) => {
    const handleUpdateStatus = (id, status) => {
        console.log(id)
    }
    return (
        <Dropdown>
            <Dropdown.Toggle className="dropDown">
                <Bi.BiMenuAltLeft className="me-2" />All Category
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" className="dropDownItem">
                <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Pending")}>Pending</Dropdown.Item>
                <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Approved")}>Approved</Dropdown.Item>
                <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Shipped")}>Shipped</Dropdown.Item>
                <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Recieved")}>Recieved</Dropdown.Item>

                <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Rejected")}>Rejected</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown >
    );
};

export default DropDown;