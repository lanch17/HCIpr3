import React from 'react'
import ReactDOM from "react-dom"
import './style.css';

function Tabledata(){
    return(
        <div>

<body>
    <h1>Music Analyzing Projects</h1>
    <table >
        <tbody><tr>
          <th>Name</th>
          <th>Description</th>
          <th>Year</th>
        </tr>
        <tr>
          <td><a href = "https://spotifynd-friends.herokuapp.com/" >Spotifynd Friends</a></td>
          <td>Spotifynd Friends is a web app built with React.js, that was created with the vision to bring people closer together through similar music tastes. It uses the Spotify Web API in order to analyze playlists and generates a compatibility score based on audio features. Users can then find others who share similar music tastes.</td>
          <td>2020</td>
        </tr>
        <tr>
          <td><a href = "https://pudding.cool/2020/12/judge-my-spotify/">Judge My Spotify</a></td>
          <td>AI judges music tastes. NOTE: This is not my own project</td>
          <td>2020</td>
        </tr></tbody>
        
      </table>
      <button class="scrollToTopBtn">Scroll to top</button>
</body>
        </div>



    );
}

export default Tabledata;