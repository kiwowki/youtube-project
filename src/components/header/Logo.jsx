import React from 'react'
import { Link } from 'react-router-dom'
import { TbHandRock } from 'react-icons/tb'

const Logo = ({toggleMenu}) => {
    return (
        <h1 className='header_logo'>
            <Link to='/'>
                <em onClick={toggleMenu}><TbHandRock /></em>
                <span><em>Rock</em> Music<br />YOUTUBE</span>
            </Link>
        </h1>
    )
}

export default Logo