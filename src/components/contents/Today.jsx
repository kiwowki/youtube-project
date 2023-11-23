import React from 'react';
import { Link } from 'react-router-dom';
import { todayText } from '../../data/today';

const Today = () => {
  return (
    <section id='today'>
      <h2>😈 오늘의 추천 픽 😈</h2>
      <div className="today_inner">
        <div className="today_thumb">
          <Link to={`/video/${todayText[0].videoId}`}>
            <img src={todayText[0].img} alt={todayText[0].title} />
          </Link>
        </div>
        <div className="today_text">
          <span className='today'>오늘의 픽!</span>
          <h3 className='title'>
            <Link to={`/video/${todayText[0].videoId}`}>
              {todayText[0].title}
            </Link>
          </h3>
          <p className='desc'>{todayText[0].desc}</p>
          <div className='info'>
            <span className='author'>
              <Link to={`/channel/${todayText[0].channelId}`}>
                {todayText[0].author}
              </Link>
            </span>
            <span className='date'>{todayText[0].date}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Today