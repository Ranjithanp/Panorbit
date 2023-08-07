import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import { Outlet, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react'
import { getUsers } from '../features/users/userSlice';
import Profile from './Profile';
import User_info from './User_info';



function Cards() {

  const location1 = useLocation();
  let stateData = location1.state.key;
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.users);
  const [profiles, setProfiles] = useState(true);
  const [posts, setPosts] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [todos, setTodos] = useState(false);

  const handleClick = () => {
    setProfiles(true);
    setPosts(false);
    setGallery(false);
    setTodos(false);
  }


  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);
  function stateHandler(link) {
  
  //   if (link === "Profile") {
  //     setProfiles(true);
  //     setPosts(false);
  //     setGtopic(!"Gallery");
  //     setTtopic(!"ToDos");
  //     setGallery(false);
  //     setTodos(false);
  //   } else if ((link === "Posts")) {
  //     setProfiles(false);
  //     setPosts(true);
  //     setPostopic("Posts");
  //     showReg(!"Profile");
  //     setPtopic(!"Profile");
  //     setGtopic(!"Gallery");
  //     setTtopic(!"ToDos");
  //     setGallery(false);
  //     setTodos(false);
  //   } else if ((link === "Gallery")) {
  //     setProfiles(false);
  //     setPosts(false);
  //     setGtopic("Gallery");
  //     setPtopic(!"Profile");
  //     showReg(!"Profile");
  //     setPostopic(!"Posts")
  //     setTtopic(!"ToDos");
  //     setGallery(true);
  //     setTodos(false);
  //   } else if ((link === "ToDos")) {
  //     setProfiles(false);
  //     setTtopic("ToDos");
  //     setPtopic(!"Profile");
  //     showReg(!"Profile");
  //     setPostopic(!"Posts")
  //     setGtopic(!"Gallery");
  //     setPosts(false);
  //     setGallery(false);
  //     setTodos(true);
  //   }
  }

  return (
    <>

      <Card className='sign_out'>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '1rem' }}><img src={stateData.profilepicture} alt="logo"
            style={{ borderRadius: '50%', width: '7rem', height: '7rem' }} />
          </p>
          <p> {stateData.name}</p>
          <p style={{ color: grey }}>{stateData.email}</p>
          <Divider variant="middle" style={{ borderColor: 'lightgrey' }} />
          <nav>
            {data.map((item, index) => {
              if (index >= 2)
                return null;
              return (
                <span key={index} style={{ fontFamily: 'inherit', fontSize: '1rem' }} onClick={stateHandler}><Link to='/User_info' state={{ key: item }}
                  style={{ color: 'black', textDecoration: 'none' }}>

                  <table>
                    <tr>
                      <th><img src={item.profilepicture} alt="logo"
                        style={{ borderRadius: '50%', width: '2rem', height: '2rem' }} /></th>
                      <th> {item.name}</th>
                    </tr>
                  </table>

                  <Divider variant="middle" style={{ borderColor: 'lightgrey' }} />
                </Link>


                </span>


              )
            })
            }

            <p>
              <Button type="button" style={{ backgroundColor: 'Red', borderRadius: '3rem' }}><Link to="/"
                style={{ textDecoration: 'none', color: 'white' }}>Sign out</Link></Button>
            </p>
          </nav>
          <Outlet />

        </div>

      </Card>
      {profiles && <Profile />}
      {posts && <Profile />}
      {gallery && <Profile />}
    </>
  );
}

export default Cards;
