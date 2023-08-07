import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid';

function ToDo(){
  return(
    <>
    
<Card > 



                    <Grid container style={{ minHeight: '30rem' }}>
                        <Grid item xs={8} className='griditem' >
                            Coming Soon todos
                        </Grid>
                    </Grid>

                </Card>
    
    </>
);
}
export default ToDo;