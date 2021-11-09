import { Alert, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]


const AvailableAppiontment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container sx={{ marginBottom: '50px' }}>
            <h2 style={{ color: '#1ED0C1', fontWeight: 600, fontSize: 30, marginBottom: 50 }}>Available Appointment on {date.toDateString()}</h2>
            {
                bookingSuccess && <Alert severity='success'>Appointment Booked Successfully!</Alert>
            }
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    {
                        bookings.map(booking => <Booking
                            key={booking.id}
                            date={date}
                            booking={booking}
                            setBookingSuccess={setBookingSuccess}
                        ></Booking>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AvailableAppiontment;