import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faChevronDown,  faTimes} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';




const Chats=(props)=>
{
  const [message,setMess] = useState("");
  const [open,setOpen] = useState(false);
  

const text =({target})=>
{
setMess(target.value);
}

  const info = e=>
  {
    setOpen(true);
    console.log("text is ",message);
    
  }
 
  return(
      <> 
         <Card  className="chat_info">
             <Card.Header  className='cardHeader' >
              <table>
                <tbody>
                 <tr>
                  <td><img src ={props.item.profilepicture} alt="logo" style={{borderRadius:'50%',width:'2rem',height:'2rem'}}/></td>
                    <th style={{color:"#fff",fontSize:'12px'}}>{props.item.name}</th>
                   <td>  <FontAwesomeIcon icon={faChevronDown}  style={{right:'22rem',zIndex:'1', position:'fixed',color:"#fff"}}/></td>
                   <td><FontAwesomeIcon icon={faTimes} style={{right:'21rem',zIndex:'1', position:'fixed',color:"#fff"}}/> </td>
                
                    </tr>
                    </tbody>
                   </table>
               </Card.Header>
      
         <div class="scrollbar scrollbar-primary">
         <div class="force-overflow">
            <Card className="main">
            
             <Card id ="message" >
               {message}
             
                </Card>

                <Card id = "message1">
                  
                </Card>
                </Card>
                </div>
               </div>
                <div>
                    <input type="text" id ="input" on={text} placeholder='Enter your Message here' style={{border:'none'}}/>
                    <FontAwesomeIcon onClick={info} icon={faPaperPlane}  style={{right:'21rem',bottom:'0px',zIndex:'1', position:'fixed',color:"blue",padding:'3px'}}/>
                    
               </div>
               </Card> 
       
    </>
   
  );
  }
export default Chats;