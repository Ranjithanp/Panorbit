import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid';



function Posts(){
    return(
        <>
      
<Card >
  
                        <Grid container style={{ minHeight: '30rem' }}>
                            <Grid item xs={8} className='griditem' >
                                Coming Soon Posts
                            </Grid>
                        </Grid>

                    </Card>
        
        </>
    );
}
export default Posts;