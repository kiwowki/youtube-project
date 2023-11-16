import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

import VideoSearch from '../components/video/VideoSearch';

const Channel = () => {
  const { channelId } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  // const [channelView, setChannelView] = useState();
  const [channelVideo, setChannelVideo] = useState([]);
  // const [ channelVideos, setChannelVideos ] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [nextPageToken, setNextPageToken] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
        console.log(data)
        setChannelDetail(data.items[0])

        const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`)
        console.log(videoData.items)
        setChannelVideo(videoData.items);


      } catch(error){
        console.log("Error -> ", error);
      }
    };
    fetchResults();


  }, [channelId])

  return (
    <section id="cannelPage">
      {channelDetail && (
        <div className="channel_inner">
          <div className="channel_header" style={{backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})`}}>
            <div className="circle">
              <img src={channelDetail.snippet.thumbnails.default.url} alt="Channel Banner" />
            </div>
          </div>
          
          <div className="channel_info">
            <h3 className="title">{channelDetail.snippet.title}</h3>
            <p className="desc"><span>{channelDetail.snippet.description}</span></p>
            <div className='info'>
              <span><p>구독자 수</p>: {channelDetail.statistics.subscriberCount} 명</span>
              <span><p>동영상 개수</p>: {channelDetail.statistics.videoCount} 개</span>
              <span><p>총 조회수</p>: {channelDetail.statistics.viewCount} 회</span>
            </div>
          </div>
          <div className='channel_video video_inner'>
              <h2 className='blind'>동영상 목록</h2>
              <VideoSearch videos={channelVideo} layout="channel"/>
          </div>
          <div className="channel_more"></div>
        </div>

      )}
      
    </section>
  )
}

export default Channel