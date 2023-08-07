import Cards from './Cards';
import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, prefix } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import Divider from '@mui/material/Divider';
import { useLocation } from 'react-router-dom';
import Profile from './Profile';
import Gallery from './Gallery';
import Posts from './Posts';
import ToDo from './ToDo';
import Chatbox from './Chat_box';
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const User_info = () => {
  const location = useLocation();
  const [showCard, setShowCard] = useState(false);
  const Sign_Out = () => setShowCard(!showCard);
  const [profiles, setProfiles] = useState(true);
  const [posts, setPosts] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [todos, setTodos] = useState(false);
  const [ptopic, setPtopic] = useState("");
  const [postopic, setPostopic] = useState("");
  const [gtopic, setGtopic] = useState("");
  const [ttopic, setTtopic] = useState("");
  let keys = location.state.key;
  const chat_drop = () => setShowList(!showList);
  const [showList, setShowList] = useState(false);
  const [reg, showReg] = useState("Profile");

  function stateHandler(link) {

    if (link === "Profile") {
      setProfiles(true);
      setPosts(false);
      showReg(!"Profile");
      setPtopic("Profile");
      setPostopic(!"Posts")
      setGtopic(!"Gallery");
      setTtopic(!"ToDos");
      setGallery(false);
      setTodos(false);
    } else if ((link === "Posts")) {
      setProfiles(false);
      setPosts(true);
      setPostopic("Posts");
      showReg(!"Profile");
      setPtopic(!"Profile");
      setGtopic(!"Gallery");
      setTtopic(!"ToDos");
      setGallery(false);
      setTodos(false);
    } else if ((link === "Gallery")) {
      setProfiles(false);
      setPosts(false);
      setGtopic("Gallery");
      setPtopic(!"Profile");
      showReg(!"Profile");
      setPostopic(!"Posts")
      setTtopic(!"ToDos");
      setGallery(true);
      setTodos(false);
    } else if ((link === "ToDos")) {
      setProfiles(false);
      setTtopic("ToDos");
      setPtopic(!"Profile");
      showReg(!"Profile");
      setPostopic(!"Posts")
      setGtopic(!"Gallery");
      setPosts(false);
      setGallery(false);
      setTodos(true);
    }
  }


  return (
    <>
      <Card className='card_main'>
        <Card className='card_view' >

          <ListGroup variant="flush" style={{ marginLeft: '3rem', marginTop: '15rem', padding: '10px' }}>
            <nav>

              <ListGroup.Item onClick={(() => stateHandler("Profile"))} style={{ padding: '10px', color: "#fff" }} > Profile
                <FontAwesomeIcon className="chevron" icon={faChevronRight} style={{ color: '#000' }} /></ListGroup.Item>
              <Divider variant="middle" style={{ borderColor: 'lightgrey' }} />
              <ListGroup.Item onClick={(() => stateHandler("Posts"))} style={{ padding: '10px', color: "#fff" }} >
                Posts</ListGroup.Item>
              <Divider variant="middle" style={{ borderColor: 'lightgrey' }} />
              <ListGroup.Item onClick={(() => stateHandler("Gallery"))} style={{ padding: '10px', color: "#fff" }}>
                Gallery</ListGroup.Item>
              <Divider variant="middle" style={{ borderColor: 'lightgrey' }} />
              <ListGroup.Item onClick={(() => stateHandler("ToDos"))} style={{ padding: '10px', color: "#fff" }}>ToDo
              </ListGroup.Item>

            </nav>
            <Outlet />
          </ListGroup>
        </Card>

        <Card className='proflie_Name'>
          <Card style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ padding: '20px' }}>
              <span className="span_profile" >{reg}</span>
              <span className="span_profile" >{ptopic}</span>
              <span className="span_profile" >{postopic}</span>
              <span className="span_profile" >{gtopic}</span>
              <span className="span_profile" >{ttopic}</span>
              <span onClick={Sign_Out} style={{ float: 'right', fontFamily: 'inherit', fontSize: '1rem' }}><table>

                <tr><td><img src={keys.profilepicture} alt="logo" style={{ borderRadius: '50%', width: '2rem', height: '2rem' }} />
                </td>
                  <th>{keys.name} </th></tr> </table></span>
            </p>
            <Divider variant="middle" style={{ borderColor: 'lightgrey' }} />

            {showCard && <Cards />}

          </Card>


          {posts && <Posts />}
          {gallery && <Gallery />}
          {todos && <ToDo />}
          {profiles && <Profile />}



          <Card className="chat">
            <Card.Header className='cardHeader' onClick={chat_drop}>

              <table>
                <tr>
                  <th><FontAwesomeIcon icon={faMessage} flip="horizontal" style={{ color: "#fff" }} /> </th>
                  <th style={{ color: '#fff', fontFamily: 'serif', padding: '10px' }} >Chats</th>
                  <th> {showList ? (<FontAwesomeIcon icon={faChevronDown} style={{ right: '40px', zIndex: '2', position: 'fixed', color: "#fff" }} />)
                    : (<FontAwesomeIcon icon={faChevronUp} style={{ right: '40px', zIndex: '2', position: 'fixed', color: "#fff" }} />)}</th>
                </tr>

              </table>

            </Card.Header>
            {showList && <Chatbox />}
          </Card>

          <Card >


          </Card>


        </Card>
      </Card>

    </>
  );
}
export default User_info;