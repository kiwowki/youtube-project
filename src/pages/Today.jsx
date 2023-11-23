import React from 'react';
import { Link } from 'react-router-dom';
import { todayText } from '../data/today';
import Main from '../components/section/Main';

const Today = () => {
  return (
    <Main
      title="오늘의 추천 음악"
      description="오늘의 추천 락밴드 음악 영상입니다."
    >
      <section id='todayPage'>
        <h2>😈 오늘의 추천 픽 😈</h2>
        {todayText.map((today, key) => (
          <div className="today_inner" key={key}>
            <div className="today_thumb">
              <Link to={`/video/${today.videoId}`}>
                <img src={today.img} alt={today.title} />
              </Link>
            </div>
            <div className="today_text">
              <span className='today'>오늘의 픽!</span>
              <h3 className='title'>
                <Link to={`/video/${today.videoId}`}>
                  {today.title}
                </Link>
              </h3>
              <p className='desc'>{today.desc}</p>
              <div className='info'>
                <span className='author'>
                  <Link to={`/channel/${today.channelId}`}>
                    {today.author}
                  </Link>
                </span>
                <span className='date'>{today.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Main>
  );
}

export default Today;