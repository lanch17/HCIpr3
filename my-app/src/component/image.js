import React from 'react'
import ReactDOM from "react-dom"
import './style.css';
import img1 from "./images/art1.png"
import img2 from "./images/art2.png"
import img3 from "./images/art3.png"
import img4 from "./images/art4.png"
import img5 from "./images/art5.png"
import img6 from "./images/art6.PNG"
function Imagedata(){
    const imageClick= (e) => {
        e.preventDefault();
        console.log(e.target.src);
        document.getElementById("overlay-image").style.display = "block";
        document.getElementById("enlarged").src = e.target.src;
        console.log(e.target.src);
      }
    const closeImage = (e) => {
        console.log(e.target.getAttribute('class'));
            if((e.target.getAttribute('class') == "overlay-s-style")){
                document.getElementById("overlay-image").style.display = "none";
            }
    }
    return(
        <div>

<body>
    <h1> Gallery of the Geo God</h1>
    
    <div class = "parent">
        <div class = "child"> <img id = "Img1" src= {img1} onClick={e => {imageClick(e)}}/></div>
        <div class = "child"> <img id = "Img2"src= {img2} onClick={e => {imageClick(e)}}/></div>
        <div class = "child"> <img id = "Img3" src= {img3}onClick={e => {imageClick(e)}}/></div>
        <div class = "child"> <img id = "Img4" src= {img4}onClick={e => {imageClick(e)}}/></div>
        <div class = "child"> <img id = "Img5" src= {img5}onClick={e => {imageClick(e)}}/></div>
        <div class = "child"> <img id = "Img6" src= {img6} onClick={e => {imageClick(e)}}/></div>
        
    </div>
    
    <div id="overlay-image" class="overlay-s-style" onClick={e => {closeImage(e)}}>
    <div class="image-block" >
        <img id = "enlarged" src= "images/art1.png" />
    </div> 
    </div>
  
    
    <button class="scrollToTopBtn">Scroll to top</button>
</body>
        </div>



    );
}

export default Imagedata;