import React from 'react'
import { musicianText } from '../data/musician'
import { Link } from 'react-router-dom'

const Musician = () => {
  return (
    <section id='musicianPage'>
      <h2>락밴드 모음</h2>
      <div className="musician_inner">
      {musicianText.map((musician, key) => (
        <div className="musician play_icon" key={key}>
          <div className="musician_img">
            <Link to={`/${musician.channelId}`}>
              <img src={musician.img} alt={musician.author} />
            </Link>
            
          </div>
          <div className="musician_info">{musician.author}</div>
        </div>
        ))}
      </div>
      
    </section>
  )
}

export default Musician