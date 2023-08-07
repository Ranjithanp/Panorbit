import User_info from "./User_info";
import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid';

function Gallery(){
   
    return(
        <>
        
<Card > 
  

                        <Grid container style={{ minHeight: '30rem' }}>
                            <Grid item xs={8} className='griditem' >
                                Coming Soon Gallery
                            </Grid>
                        </Grid>

                    </Card>
        
        </>
    );
}
export default Gallery;