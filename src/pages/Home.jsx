import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/api';

import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Musician from '../components/contents/Musician'
import VideoSlider from '../components/video/VideoSlider'




const Home = () => {
  // const [channelVideoV1, setChannelVideoV1] = useState([]);
  // const [channelVideoV2, setChannelVideoV2] = useState([]);
  // const [channelVideoV3, setChannelVideoV3] = useState([]);
  // const [channelVideoV4, setChannelVideoV4] = useState([]);

  const channels = [
    { id: "UCUDVBtnOQi4c7E8jebpjc9Q", title: "오아시스", name: "v1" },
    { id: "UCDPM_n1atn2ijUwHd0NNRQw", title: "콜드플레이", name: "v2" },
    { id: "UCGGhM6XCSJFQ6DTRffnKRIw", title: "뮤즈", name: "v3" },
    { id: "UCiMhD4jzUqG-IgPzUmmytRQ", title: "퀸", name: "v4" },
  ];

  const [videosList, setVideosList] = useState(() => channels.map(() => []));

  useEffect(() => {
    // const v1 = "UCUDVBtnOQi4c7E8jebpjc9Q";
    // const v2 = "UCDPM_n1atn2ijUwHd0NNRQw";
    // const v3 = "UCGGhM6XCSJFQ6DTRffnKRIw";
    // const v4 = "UCiMhD4jzUqG-IgPzUmmytRQ";

    // const fetchResults = async (channelId, setDataFunction) => {
    //   try {
    //     const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
    //     setDataFunction(videosData.items);
    //     console.log(videosData.items);
    //   } catch (error) {
    //     console.log("Error fetching data -> ", error);
    //   }
    // };

    // fetchResults(v1, setChannelVideoV1);
    // fetchResults(v2, setChannelVideoV2);
    // fetchResults(v3, setChannelVideoV3);
    // fetchResults(v4, setChannelVideoV4);
    channels.forEach(({ id }, idx) => {
      fetchFromAPI("search", { channelId: id, part: "snippet", order: "date" })
        .then(data => {
          setVideosList(prev => {
            const next = [...prev];
            next[idx] = data.items;
            return next;
          });
        })
        .catch(console.error);
    });
  }, [channels]);


  return (
    <Main
      title="락밴드 유튜브"
      description="락밴드 유튜브 모음 사이트에 오신 것을 환영합니다."
    >
      <Today />
      <Musician />

      {channels.map(({ title, name }, idx) => (
        <VideoSlider
          key={name}
          videos={videosList[idx]}
          title={`${title} 최신 영상`}
          name={name}
        />
      ))}
      {/* { 오아시스 } */}
      {/* <VideoSlider videos={channelVideoV1} title='오아시스 최신 영상' name='v1' /> */}

      {/* { 콜드플레이 } */}
      {/* <VideoSlider videos={channelVideoV2} title='콜드플레이 최신 영상' name='v2' /> */}

      {/* { 뮤즈 } */}
      {/* <VideoSlider videos={channelVideoV3} title='뮤즈 최신 영상' name='v3' /> */}

      {/* { 퀸 } */}
      {/* <VideoSlider videos={channelVideoV4} title='퀸 최신 영상' name='v4' /> */}
    </Main>
  )
}

export default Home