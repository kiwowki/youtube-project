import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

import VideoSearch from '../components/video/VideoSearch';
import Main from '../components/section/Main';

const formatCount = (count) => {
  const billion = 100000000;
  const million = 10000; // 1만을 나타냄

  if (count >= billion) {
    const formatted = (count / billion).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    return formatted.endsWith('.00') ? `${formatted.slice(0, -3)} 억` : `${formatted} 억`;
  } else if (count >= million) {
    const formatted = (count / million).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    return formatted.endsWith('.00') ? `${formatted.slice(0, -3)} 만` : `${formatted} 만`;
  } else {
    return count % 1 === 0 ? count.toLocaleString() : count.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }
};

const Channel = () => {
  const { channelId } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [channelVideo, setChannelVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState(null);


  useEffect(() => {
    const fetchResults = async () => {
      try {
        // 1) 채널 정보 가져올 때 snippet + brandingSettings 요청
        const channelData = await fetchFromAPI(
          "channels",
          {
            part: "snippet,brandingSettings",
            id: channelId
          }
        );
        setChannelDetail(channelData.items[0]);

        // 2) 영상 목록 가져올 때는 search 엔드포인트와 필요한 파라미터만
        const videoData = await fetchFromAPI(
          "search",
          {
            channelId,
            part: "snippet",
            order: "date"
          }
        );
        setChannelVideo(videoData.items);
      } catch (error) {
        console.log("Error -> ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [channelId]);

  const loadMoreVideos = async () => {
    if (nextPageToken) {
      const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
      setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
      setNextPageToken(videosData?.nextPageToken);
    }
  }

  const channelPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main
      title="락밴드 유튜브 공식 채널"
      description="락밴드 유튜브 공식 채널 페이지 입니다. 밴드의 음악 영상을 모두 확인할 수 있습니다."
    >

      <section id="channelPage" className={channelPageClass}>
        {channelDetail && (
          <div className="channel_inner">
            <div className="channel_header" style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
              <div className="circle">
                <img src={channelDetail.snippet.thumbnails.default.url} alt="Channel Banner" />
              </div>
            </div>

            <div className="channel_info">
              <h3 className="title">{channelDetail.snippet.title}</h3>
              <p className="desc"><span>{channelDetail.snippet.description}</span></p>
              <div className='info'>
                <span><p>구독자 수</p>: {formatCount(Number(channelDetail.statistics.subscriberCount))} 명</span>
                <span><p>동영상 개수</p>: {formatCount(Number(channelDetail.statistics.videoCount))} 개</span>
                <span><p>총 조회수</p>: {formatCount(Number(channelDetail.statistics.viewCount))} 회</span>
              </div>
            </div>
            <div className='channel_video video_inner search'>
              <h2 className='blind'>동영상 목록</h2>
              <VideoSearch videos={channelVideo} layout="channel" />
            </div>
            <div className="channel_more">
              {nextPageToken && <button onClick={loadMoreVideos}>더 보기 ▽</button>}
            </div>
          </div>
        )}

      </section>
    </Main>
  )
}

export default Channel