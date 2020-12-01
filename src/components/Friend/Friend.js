import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
      const{name, email, id }= props.friend;
      const cardStyle ={
          border: '1px solid red',
          textAlign: 'center',
          margin: '80px',
          padding: '10px',
          borderRadius: '5px'               
      }   
      
      const history = useHistory(); //ata disi button take click korle detls dhekbe
      const handleClick = (idName) =>{
          const url = `/friend/${idName}`
        history.push(url)
      }

   return (
        <div style={cardStyle}>
             <h1>{name}</h1> 
             <p>{email}</p>  
             {/* <Link to={"/friend" + id}>Details of {id}</Link>  */} 
             {/*aytake amra es6 ar moto karet dieo korte pari nise daoa holo */}


            <Link to ={`/friend/${id}`}>Details of {id}</Link>
                <br/>
            <button onClick={() => handleClick(id)}>Click me</button> {/*uporer aki kaj amra button die korsi history ar madhome*/}
         </div>
       );
};

export default Friend;