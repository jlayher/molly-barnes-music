import Link from 'next/link'
import React from 'react'

import styles from "@/styles/dropdownitem.module.css"


const DropdownItem = (props) => {
  return (
    <li className="dropdown_link">
        <a href={props.link}>{props.title}</a>
    </li>
  )
}

export default DropdownItem
