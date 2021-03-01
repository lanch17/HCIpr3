import React, {Component} from 'react';
import './style.css';
function Itab (props) {
    

   const addstyle = () => {
       if(props.out.id == props.activetab){
          return {backgroundColor: "#e6a72a"} 
       }
       else{
           //return {backgroundColor: '#604d35'}
       }
   };




   console.log(props)
   return (
       <li><a className = "indtab" style = {addstyle()} onClick = {props.ctab.bind(this,props.out.id)}> {props.out.title}</a> </li>

        
   );
}

export default Itab;