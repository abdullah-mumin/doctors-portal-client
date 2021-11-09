import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import doctor from '../../images/doctor.png'
import aBanner from '../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
import { SportsRugbySharp } from '@mui/icons-material';


const bannerBackGround = {
    background: `url(${aBanner})`,
    backgroundColor: 'rgba(60, 69, 103)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 200
}

const AppointmentBanner = () => {
    return (
        <Box style={bannerBackGround} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <img style={{ width: '450px', marginTop: '-122px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={6} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                    <Box>
                        <Typography gutterBottom variant="h6" sx={{ mb: 5 }} style={{ color: '#1ED0C1', fontWeight: 350 }} component="div">
                            Appointment
                        </Typography>
                        <Typography gutterBottom variant="h4" style={{ color: 'white', fontWeight: 500 }} component="div">
                            Make an appointment Today
                        </Typography>
                        <Typography gutterBottom variant="h6" sx={{ my: 3 }} style={{ color: 'white', fontWeight: 300, fontSize: 15 }} component="div">
                            It is a long established fact that a reader will be distractedby <br /> the readable content of a page when looking at its
                        </Typography>
                        <Button style={{ fontWeight: 700, backgroundColor: '#1ED0C1' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;