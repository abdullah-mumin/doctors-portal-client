import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    height: 450,
    alignItems: 'center',

}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography gutterBottom variant="h4" style={{ fontWeight: 550 }} component="div">
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography gutterBottom variant="h6" sx={{ my: 3, color: 'gray', fontWeight: 300, fontSize: 15 }} component="div">
                            Doctor is an academic degree, awarded by a university or similar institution. "Doctor" is used to refer to a person with a doctorate.
                        </Typography>
                        <Button style={{ fontWeight: 700, backgroundColor: '#1ED0C1' }} variant="contained">Get Started</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '500px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;

// style={{ color: 'white', fontWeight: 500 }}