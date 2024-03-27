import React, {useState} from 'react';
import './Dropdow.css';

function Dropdowss() {

  const [open, setOpen] = useState(false)

  return (
    <div className="Dropdowss">
      <div className='menu-container'>
        <div className='menu-trigger' >
          <img className='img-username' src="Yone.jpg" alt="Avatar"></img>
        </div>

        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <h3>Kiem Nguyen<br/><span>Frontend Devloper</span></h3>
          <ul>
            <DropdownItem text = {"My Profile"}/>
            <DropdownItem text = {"Edit Profile"}/>
            <DropdownItem text = {"Inbox"}/>
            <DropdownItem text = {"Setting"}/>
            <DropdownItem text = {"Helps"}/>
            <DropdownItem text = {"Logout"}/>
          </ul>
        </div>

        <div className='user' onClick={()=>{setOpen(!open)}}>
          <span>Nguyen Trang Chí Kiem</span>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return(
    <li className='dropdownItem'>
      <a href='/'> {props.text}</a>
    </li>
  )
}

export default Dropdowss;