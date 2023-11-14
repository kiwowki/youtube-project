import React from 'react'

import { musicianText } from '../../data/musician'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const Musician = () => {
  return (
    <section id='musician'>
      <h2>밴드 공식 채널 모음</h2>
      <div className="musician_inner">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {musicianText.map((musician, key) => (
        
            <SwiperSlide className="musician play_icon" key={key}>
              <div className="musician_img">
                <Link to={`/${musician.channelId}`}>
                  <img src={musician.img} alt={musician.author} />
                </Link>

              </div>
              <div className="musician_info">{musician.author}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Musician