export const outputBlock = document.querySelector('.block');

import img1 from "../img/111.png"
import img2 from "../img/222.png"
import img3 from "../img/333.png"
import img5 from "../img/555.png"

export const items = [
    {
        header: '1 ступень',
        src: img5,
        type: 'img'
    },
    {
        header: '2 ступень',
        src: img3,
        type: 'img'
    },
    {
        header: '3 ступень',
        src: img2,
        type: 'img'
    },
    {
        header: '4 ступень',
        src: img1,
        type: 'img'
    },
    {
        header: 'Видео часы',
        src: 'video/clock.mp4',
        type: 'video'
    },
    {
        header: 'Видео листья',
        src: 'video/leaves.mp4',
        type: 'video'
    },
    {
        header: 'Видео машина',
        src: 'video/car.mp4',
        type: 'video'
    },
    {
        header: 'Видео дракон',
        src: 'video/dragon.mp4',
        type: 'video'
    },
    {
        header: 'Звук победы',
        src: 'audio/win.mp3',
        type: 'audio'
    },
    {
        header: 'Звук пройгрыша',
        src: 'audio/lose.mp3',
        type: 'audio'
    },
    {
        header: 'Звук неправильного ответа',
        src: 'audio/false.mp3',
        type: 'audio'
    },
    {
        header: 'Звук карканья вороны',
        src: 'audio/crow.mp3',
        type: 'audio'
    }
];

import {letImg} from "./forImage.js";
import {letVideo} from "./forVideo.js";
import {letAudio} from "./forAudio.js";
letImg();
letVideo();
letAudio();

