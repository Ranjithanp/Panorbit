
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect,useState} from 'react'
import { getUsers } from '../features/users/userSlice';
import Chats from './Chats';





function Chatbox()
{

    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.users)
    const [showChat,setShowChat] = useState(false);
    const [chat,setChat] = useState();
    

    useEffect(() => {
      dispatch(getUsers())
    }, [dispatch]);
   
 const Chat_input = (e,item) =>{
  setShowChat(!showChat);
  setChat(item);

 }

 
 
    return(
   <> 
     <div>
     <div class="scrollbar scrollbar-primary">
  <div class="force-overflow">

      <ListGroup  className="hiddenList" variant="flush" style={{padding:'12px'}}>
    {data.map((item)=>{

   return(
      <ListGroup.Item key ={item.id} onClick={((e)=>Chat_input(e,item))} style={{textDecoration:'none',color:'black'}} >   <span style={{fontFamily:'revert'}}>
        
        <table><tbody> <tr><td><img src = {item.profilepicture} alt="logo" style={{borderRadius:'50%',width:'2rem',height:'2rem'}}/></td>
       <td>{item.name} </td>
       <td><FontAwesomeIcon icon={faCircle} style={{color: "#197217",fontSize:'6px',right:'45px',zIndex:'0',position:'fixed'}} /></td>
       </tr></tbody></table></span> </ListGroup.Item> 
        )}) }
         {showChat && <Chats item={chat} />}
    </ListGroup>  
 
    </div>
    </div>
    </div>
    </>
    );
}
    export default Chatbox;
