import React from 'react'
import { todayText } from '../../data/today'

const Today = () => {
  return (
    <section id='today'>
        <h2>😈 오늘의 추천 픽 😈</h2>
            <div className="today_inner">
                <div className="today_thumb"></div>
                <div className="today_text">
                    <span className='today'>오늘의 픽!</span>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>{todayText[0].desc}</p>
                    <div className='info'>
                        <span className='author'>{todayText[0].author}</span>
                        <span className='date'>{todayText[0].date}</span>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Today