import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={8} md={4} lg={4}>
                <Paper elevation={3} sx={{ height: '150px', padding: 3 }} >
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: '#1ED0C1', fontWeight: 500 }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 600, fontSize: 16 }}>
                        {time}
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div" sx={{ mb: 2 }}>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} style={{ fontWeight: 700, backgroundColor: '#1ED0C1' }} variant="contained">BOOK APOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                open={open}
                date={date}
                setBookingSuccess={setBookingSuccess}
                handleClose={handleClose}
            ></BookingModal>
        </>
    );
};

export default Booking;