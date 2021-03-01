import React from 'react'
import ReactDOM from "react-dom"
import './style.css';

function Textdata(){
    return(
        <div>

    <body>
    <form>
        <label for="fname">First name:</label><br />
        <input type="text" id="fname" name="fname"/><br />
        <label for="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname"/><br />
        <br/>
        Grade<br/><br/>
        <input type= "radio" id="freshman" name="grade" value="freshman"/>
        <label for="male">Freshman</label><br />
        <input type ="radio" id="sophomore" name="grade" value="sophomore"/>
        <label for="female">Sophomore</label><br />
        <input type ="radio" id="junior" name="grade" value="junior"/>
        <label for="junior">Junior</label><br />
        <input type ="radio" id = "senior" name = "grade" value = "senior"/>
        <label for = "senior">Senior</label><br />

        <input type="submit" value="Submit"/>

    </form>
    <button class="scrollToTopBtn">Scroll to top </button>
    </body>
        </div>



    );
}

export default Textdata;