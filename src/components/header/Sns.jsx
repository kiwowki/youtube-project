import React from 'react'

import { snsText } from '../../data/header'

const Sns = () => {
    return (
        <div className='header_sns'>
            {snsText.map((sns, key) => (
                <li key={key}>
                    <a
                        href={sns.src}
                        target='_blank'
                        rel='noopener  noreferrer'
                    >
                        <span>{sns.icon}</span>
                    </a>
                </li>
            ))}
        </div>
    )
}

export default Sns