
import './App.css';
import Divider from '@mui/material/Divider';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect,useState} from 'react'
import { getUsers} from './features/users/userSlice';
import { ListGroupItem } from 'react-bootstrap';
import image from './background/img.jpg';





function App() {

  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);
 
  

  let content
  if (loading === 'pending') {
    content = (

      <span>Loading...</span>

    )
  }
  if (loading === 'idle') {
    
      return(
      <div className="App" style={{backgroundImage:`url(${image})`}} >
      

      <Card className='app_card' >
        <Card.Header className='app_Header' >Select an Account</Card.Header>
        <ListGroup variant="flush" style={{ padding: '12px' }}>
       
          <nav>
    
          <div class="scrollbars scrollbars-primary">
         <div class="force-overflows">
         { data.map((item) =>{
          return(  <ListGroupItem key={item.id} ><Link className='link' to="/User_Info" state = {{key:item}}>
    
              <span style={{ fontFamily: 'revert' }}>
                <table>
                  <tbody>
                  <tr>
                    <td><img src={item.profilepicture} alt="logo"
                      style={{ borderRadius: '50%', width: '2rem', height: '2rem' }} /></td>
                    <td>{item.name}</td>
                  </tr>
                  </tbody>
                </table>
              </span>
            </Link>
              <Divider variant="middle" /></ListGroupItem>
              )})}
              </div>
              </div>

            </nav>
          <Outlet />
        </ListGroup>
       
      </Card>

    </div>
  );
  }
  if (error !== null) {
    content = (
      <div >
        {error}
      </div>)
   
  }

  return <div >{content}</div>
}
export default App;






