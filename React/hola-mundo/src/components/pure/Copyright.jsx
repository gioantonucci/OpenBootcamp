import { Typography, Link } from '@mui/material';
import React from 'react';

const Copyright = () => {
    return (
        <div>
            <Typography variant='body2' color='GrayText' align='center'>
                {'Copyright ©'}
                <Link color={'inherit'} href='https://linkedin.com/in/giovanna-antonucci'>
                    About Me
                </Link>
                {' '}
                {new Date().getFullYear()}
            </Typography>
        </div>
    );
}

export default Copyright;
