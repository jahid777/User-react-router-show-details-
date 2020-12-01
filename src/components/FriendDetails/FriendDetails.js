import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = (props) => {
  const {friendId} = useParams()
  const [friend, setFriend] = useState({}) //ata object akare disi karon api data obj
  //useEffect kora hoise friend sate theke name, website, email loading ar jonno
  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setFriend(data))                       
  },[])                       
return (
<div>
   <h3>this is the friend details components {friendId}</h3> 
   <h1>Name: {friend.name}</h1>
   <h3>Email: {friend.email}</h3>
   <h4>Website: {friend.website}</h4>                   
</div>
);
};

export default FriendDetails;