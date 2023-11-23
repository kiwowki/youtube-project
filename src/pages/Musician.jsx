import React from 'react'
import { musicianText } from '../data/musician'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main'

const Musician = () => {
  return (
    <Main
      title = "락밴드 공식 유튜브 모음"
      description = "락밴드 공식 유튜브 모음 페이지입니다."
    >
      <section id='musicianPage'>
        <h2>락밴드 모음</h2>
        <div className="musician_inner">
        {musicianText.map((musician, key) => (
          <div className="musician play_icon" key={key}>
            <div className="musician_img">
              <Link to={`/channel/${musician.channelId}`}>
                <img src={musician.img} alt={musician.author} />
              </Link>

            </div>
            <div className="musician_info">{musician.author}</div>
          </div>
          ))}
        </div>
        
      </section>
    </Main>

  )
}

export default Musician