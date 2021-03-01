import React from 'react'
import ReactDOM from "react-dom"
import './style.css';
import vid1 from "./videos/zhonglibirthday.MOV";
import vid2 from "./videos/zhongli.MOV";
import vid3 from "./videos/jean.MOV";
import vid4 from "./videos/diluc.MOV";
import vid5 from "./videos/xiao.MOV";
function Videodata(){
    const videoClick= (e) => {
        e.preventDefault();
        document.getElementById("overlay-video").style.display = "block";
        document.getElementById("enlargedvideo").src = e.target.src;
        console.log(e.target.src);
    }
    const closeVideo = (e) => {
        console.log(e.target.getAttribute('class'));
        if((e.target.getAttribute('class') == "overlay-s-style")){
            document.getElementById("overlay-video").style.display = "none";
        }
    }
    return(
        <div>

<body>
<h1>When I First Rolled My Five Stars</h1>

<div class = "parent">
    <div class = "child"  ><video id = "video2"controls autoplay src={vid2} onClick={e => {videoClick(e)}}></video></div>
    <div class = "child"  ><video id = "video3"controls autoplay src={vid3} onClick={e => {videoClick(e)}}></video></div>
    <div class = "child"  ><video id = "video4"controls autoplay src={vid4} onClick={e => {videoClick(e)}}></video></div>
    <div class = "child"  ><video id = "video5"controls autoplay src={vid5} onClick={e => {videoClick(e)}}></video></div>


</div>
<div id="overlay-video" class="overlay-s-style" onClick={e => {closeVideo(e)}}>
    <div class="video-block"  >
        <video id = "enlargedvideo" controls autoplay src= {vid1} ></video>
    </div> 
    </div>

    <button class="scrollToTopBtn">Scroll to top</button>
</body>
        </div>



    );
}

export default Videodata;