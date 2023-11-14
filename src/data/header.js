import { PiMicrophoneStageBold } from 'react-icons/pi'
import { LiaRecordVinylSolid } from "react-icons/lia";
import { TbMusicDollar } from "react-icons/tb";
import { TbHandRock } from 'react-icons/tb'
import { AiFillGithub } from "react-icons/ai";
import { TbBrandBlogger } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";

export const menuText = [
    {
        title: "락밴드 유튜브 공식 홈",
        icon: <PiMicrophoneStageBold />,
        src: "/"
    },{
        title: "오늘의 추천 픽!!",
        icon: <LiaRecordVinylSolid />,
        src: "/today"
    },{
        title: "유명 락밴드",
        icon: <TbMusicDollar />,
        src: "/musician"
    },
]

export const keywordText = [
    {
        title: "Beatles",
        icon: <TbHandRock />,
        src: "/search/Beatles"
    },{
        title: "Led Zeppelin",
        icon: <TbHandRock />,
        src: "/search/Led Zeppelin"
    },{
        title: "Pink Floyd",
        icon: <TbHandRock />,
        src: "/search/Pink Floyd"
    },{
        title: "Queen",
        icon: <TbHandRock />,
        src: "/search/Queen"
    },{
        title: "AC/DC",
        icon: <TbHandRock />,
        src: "/search/AC%2FDC"
    },{
        title: "Rolling Stones",
        icon: <TbHandRock />,
        src: "/search/Rolling Stones"
    },{
        title: "Eagles",
        icon: <TbHandRock />,
        src: "/search/Eagles"
    },{
        title: "U2",
        icon: <TbHandRock />,
        src: "/search/U2"
    },{
        title: "Aerosmith",
        icon: <TbHandRock />,
        src: "/search/Aerosmith"
    },{
        title: "Metallica",
        icon: <TbHandRock />,
        src: "/search/Metallica"
    },{
        title: "Oasis",
        icon: <TbHandRock />,
        src: "/search/Oasis"
    },{
        title: "Coldplay",
        icon: <TbHandRock />,
        src: "/search/Coldplay"
    },{
        title: "Muse",
        icon: <TbHandRock />,
        src: "/search/Muse"
    },{
        title: "Radiohead",
        icon: <TbHandRock />,
        src: "/search/Radiohead"
    }
]

export const snsText = [
    {
        title: "Github",
        src: "https://github.com/kiwowki",
        icon: <AiFillGithub />,
    },{
        title: "Blog",
        src: "http://kiwowki.dothome.co.kr/php2/html/main.html",
        icon: <TbBrandBlogger />,
    },{
        title: "Youtube",
        src: "https://www.youtube.com/channel/UCB-BuZ8_DIWxJvbzVUomdTQ",
        icon: <AiOutlineYoutube />,
    }
]