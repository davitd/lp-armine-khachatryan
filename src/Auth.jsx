import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';

import {DesktopComponent} from './components/DesktopComponent';
import {MobileComponent} from './components/MobileComponent';

import './Auth.css';

export const Auth = () => {

  const [formData, setFormData] = useState('')
  
  const navigate = useNavigate();
  const showDesktopVersion = useMediaQuery('(min-width:900px)');

  const login = (data) => {
    setFormData(prev => data)

    return axios
      .post('https://iconnect247.net/api/v2/sessions', {
        username: formData.email,
        password: formData.password,
      })
      .then((response) => {
        const data = response.data;

        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        navigate('/home');
        return data;
      })
      .catch((error) => {
        console.log('Oops! Some error occured.');
      });
  };

  return (
    <>
      {showDesktopVersion ? (
        <DesktopComponent loginData={login} />
      ) : (
        <MobileComponent loginData={login} />
      )}
    </>
  );
};
