import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png';
import Calender from '../../../Shared/Calender/Calender';


// const bGBanner = {
//     background: `url(${})`
// }

const verticalCenter = {
    display: 'flex',
    height: 450,
    alignItems: 'center',
    marginTop: '50px'

}

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ ...verticalCenter, textAlign: 'left' }}>
                        <Box>
                            <Calender date={date} setDate={setDate}></Calender>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '400px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentHeader;