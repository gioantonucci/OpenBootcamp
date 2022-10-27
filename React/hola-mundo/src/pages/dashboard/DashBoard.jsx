import React from 'react';
import Button from '@mui/material/Button'
import Copyright from '../../components/pure/Copyright';
import MenuListItems from '../../components/pure/MenuListItems';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const history = useNavigate()
    const logout = () => {
        history.push('/login')
    }
    return (
        <div>
            <Button variant='contained' onClick={logout}>Logout</Button>
           
            <Copyright/>
        </div>
    );
}

export default DashBoard;
