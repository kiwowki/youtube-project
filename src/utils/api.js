import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/youtube/v3"

// const options = {
//   params: {
//     maxResults: '48',
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_GOOGLE_YOUTUBE_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   console.log(`Request URL: ${BASE_URL}/${url}`);
//   return data;
// }

export const fetchFromAPI = async (endpoint, extraParams = {}) => {
  const defaultParams = {
    key: process.env.REACT_APP_GOOGLE_YOUTUBE_KEY,
    // 기존 48개에서 20개로 줄임(일일 쿼터 관리 필요)
    maxResults: 20,
  };

  const { data } = await axios.get(`${BASE_URL}/${endpoint}`, {
    params: { ...defaultParams, ...extraParams },
  });
  return data;
};