import React from 'react'
import { Link } from 'react-router-dom'
import { TbHandRock } from 'react-icons/tb'

const Logo = () => {
    return (
        <h1 className='header_logo'>
            <Link to='/'>
                <em><TbHandRock /></em>
                <span><em>Rock</em> Music<br />YOUTUBE</span>
            </Link>
        </h1>
    )
}

export default Logo