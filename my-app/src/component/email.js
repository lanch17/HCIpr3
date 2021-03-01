import React from 'react'
import ReactDOM from "react-dom"
import './style.css';
import {useState} from 'react';

function Emaildata(props){
    const [email,setEmail] = useState("");

    const handleSubmit= (e) => {
        e.preventDefault();
        
        var emailname = email;
        var ending = emailname.substring(emailname.length - 4, emailname.length);
        console.log(emailname);
        console.log(ending);
          if( emailname.includes("@") && ((ending === ".com")|| ending === ".edu")){
                console.log(emailname);
                console.log(ending);
                document.getElementById("message").innerHTML = "<h2>Email successfully recorded!</h2>";
            }
            else{
                console.log("false doesnt include it");
                document.getElementById("message").innerHTML = "<h2>Invalid email address</h2>";
            }
        
      }
    return(
        <div>
<body>
    <form name = "emailform" onSubmit={e => {handleSubmit(e)}}>
        <label for="email">Email:
        <input type="text" id="email" name="email" value = {email} onChange={e =>setEmail(e.target.value)}/>
        </label><br/>
       <br/>


        <button type="submit"  >Submit</button>
    
    </form>
    <div id = "message">
        
    </div>


      <button class="scrollToTopBtn">Scroll to top</button>
</body>

        </div>



    );
}

export default Emaildata;