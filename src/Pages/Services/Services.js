import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../src/images/fluoride.png';
import cavity from '../../../src/images/cavity.png';
import teath from '../../../src/images/whitening.png';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';


const services = [
    {
        name: 'Flourida Treatment',
        key: 1,
        desc: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        key: 2,
        desc: 'Having a cavity filled may cause some discomfort, but it should not cause pain. Anyone who experiences moderate or severe pain during or after the procedure should let their dentist know',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        key: 3,
        desc: 'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want.',
        img: teath
    }
]

const Services = () => {
    return (
        <Container>
            <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} gutterBottom variant="h6" component="div">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 600, m: 2 }} gutterBottom variant="h4" component="div">
                Services We Provice
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="space-evenly" columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services; <h2>This is Services</h2>