
import Card from 'react-bootstrap/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import '../App.css';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import Map_Box from './Map_Box';



const Profile = () => {
  const loc = useLocation();
 

  // const [showCard, setShowCard] = useState(false);
  
  let value = loc.state.key;

  return (

       
        <Card  >
      
         
         
         <Grid container >


            <Grid item xs={3.5}>
              <table className='table_Name' >
                <tr >
                  <th colSpan={3}>  <img src={value.profilepicture} alt="logo" style={{ borderRadius: '50%', width: '15rem', height: '15rem' }} />
                  </th>
                </tr>
                <tr >
                  <th colSpan="3"> Name</th>
                </tr>
                <tr>
                  <th >Username</th>
                  <td>:</td>
                  <td>{value.username}</td>
                </tr>
                <tr>
                  <th >email</th>
                  <td>:</td>
                  <td>{value.email}</td>
                </tr>
                <tr>
                  <th >Phone</th>
                  <td>:</td>
                  <td>{value.phone}</td>
                </tr>
                <tr>
                  <th >Website</th>
                  <td>:</td>
                  <td>{value.website}</td>
                </tr>
              </table>

              <Divider variant="middle" />

              <table className="CompanyName" >

                <tr  >
                  <th colSpan="3"  >Company</th>

                </tr>
                <tr>
                  <th >Name</th>
                  <td>:</td>
                  <td>{value.name}</td>
                </tr>
                <tr>
                  <th >catchpharse</th>
                  <td>:</td>
                  <td>{value.catchPhrase}</td>
                </tr>
                <tr>
                  <th >bs</th>
                  <td>:</td>
                  <td>{value.company.bs}</td>
                </tr>
              </table>

            </Grid>
            <Grid item xs={0.5}>
              <Divider orientation="vertical" style={{ maxHeight: '35rem', position: 'relative', top: '3rem', zIndex: '1' }}>

              </Divider>
            </Grid>
            <Grid item xs={8}>


              <table className='table_address' >

                <tr >
                  <th >Address:</th>

                </tr>
                <tr >
                  <th >Street</th>
                  <td>:</td>
                  <td>{value.address.street}</td>
                </tr>
                <tr>
                  <th >Suit</th>
                  <td>:</td>
                  <td>{value.address.suite}</td>
                </tr>
                <tr>
                  <th >City</th>
                  <td>:</td>
                  <td>{value.address.city}</td>
                </tr>
                <tr>
                  <th >Zipcode</th>
                  <td>:</td>
                  <td>{value.address.zipcode}</td>
                </tr>
              </table>
              <div className='sidebar'>
                {<Map_Box />}
              
              </div>

            </Grid>

          </Grid>

        </Card>

  
    
 
 );
 }
export default Profile;


