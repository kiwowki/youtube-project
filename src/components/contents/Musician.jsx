import React from 'react'

import { musicianText } from '../../data/musician'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

import { Navigation, Autoplay } from 'swiper/modules';

const Musician = () => {
  return (
    <section id='musician'>
      <h2>밴드 공식 채널 모음</h2>
      <div className="musician_inner">
        <Swiper
          slidesPerView={15}
          spaceBetween={20}
          navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            400: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            600: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            960: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 9,
              spaceBetween: 20,
            },
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