import React from 'react'
// import Dropdown from "./Dropdown"
import DropdownItem from './DropdownItem'


const DropdownLink = () => {
  return (
    <div className='menu_container'>
        <div className='menu_trigger'>
            <p>Teaching Dropdown</p>   
 

            <div className='dropdown-menu'>
                <ul>
                      <DropdownItem link="/academic-teaching" title="Academic Teaching" />
                      <DropdownItem link="/private-lessons" title="Private Lessons" />
                </ul>
            </div>   
        </div>
    </div>
  )
}

export default DropdownLink
