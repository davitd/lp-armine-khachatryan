  import { useState } from 'react';
  import { Link } from 'react-router-dom';
  import {
    Container,
    Grid,
    Box,
    Typography,
    FormControl,
    Button,
    Select,
    MenuItem,
    TextField,
    List,
    ListItem,
    IconButton,
  } from '@mui/material';
  import { Visibility, VisibilityOff } from '@mui/icons-material';
  import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
  import logo from '../img/logoNettTreff 1.svg';
  import bgDectop from '../img/Pic.svg';

  export const DesktopComponent = ({loginData}) => {

    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleGender = (e) => {
      setGender((prev) => e.target.value);
    };
    const handleAge = (e) => {
      setAge((prev) => e.target.value);
    };

    const handleLocation = (e) => {
      setLocation((prev) => e.target.value);
    };
    const handleEmail = (e) => {
      setEmail((prev) => e.target.value);
      if (!e.target.value !== 'razd22') {
        setError({
          name: 'email',
          message:
            "Oops! There may be a mistake in your email address. Please check. If you've already signed up at our site, please use the login form.",
        });
      }
    };

    const handleClickShowPassword = () => {
      setShowPassword((prev) => !prev);
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const handlePassword = (e) => {
      setPassword((prev) => e.target.value);
    };

    const renderErrorMessage = (name) => {
      return name === error.name ? (
        <Typography
          component="p"
          sx={{
            fontWeight: '400',
            fontSize: '8px',
            lineHeight: '11px',
            maxWidth: '380px',
            textAlign: 'left',
            marginLeft: 'auto',
            color: '#D50000',
          }}>
          {error.message}
        </Typography>
      ) : (
        ''
      );
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      loginData = { gender, age, location, email, password }
    }

    return (
      <Container
        maxWidth={false}
        disableGutters
        className="main"
        component="main"
        sx={{
          minHeight: '100vh',
          backgroundImage: `linear-gradient(180deg, rgba(62, 53, 47, 0) 0%, rgba(62, 53, 47, 0.08) 100%), url('${bgDectop}')`,
          backgroundPosition: '90% 50px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}>
        <Grid container spacing={0}>
          <Grid item md={7}>
            <Box
              component="div"
              sx={{
                height: '612px',
                width:'640px',
                marginTop: '170px',
                marginLeft: '150px',
                background: '#FEF6F0',
                boxShadow: '0px 0px 30px rgba(91, 105, 152, 0.2)',
                borderRadius: '16px',
                padding: '50px 53px 30px',
                marginBottom: '131px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
              <Typography
                component="h1"
                sx={{
                  fontWeight: '500',
                  fontSize: '28px',
                  lineHeight: '41px',
                  textTransform: 'uppercase',
                  color: '#3E352F',
                  marginBottom: '20px',
                }}>
                GET LOVELY CUTIES IN YOUR AREA!
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  marginBottom: '20px',
                }}>
                <FormControl
                  fullWidth
                  margin="dense"
                  sx={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: '800',
                      fontSize: '16px',
                      lineHeight: '22px',
                      textAlign: 'right',
                      color: '#3E352F',
                      display: 'inline-block',
                      marginRight: '24px',
                    }}>
                    I am:
                  </Typography>
                  <Select
                    className="login-form-filed"
                    fullWidth
                    variant="outlined"
                    defaultValue="a man looking for a woman"
                    value={gender}
                    onChange={handleGender}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      display: 'inline-block',
                      width: '380px',
                      height: '46px',
                      textAlign: 'left',
                      '& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline:hover':
                        {
                          border: '2px solid #F6A95F',
                          borderRadius: '12px',
                        },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #F6A95F',
                      },
                    }}>
                    <MenuItem value={'a man looking for a woman'}>
                      a man looking for a woman
                    </MenuItem>
                    <MenuItem value={'a woman looking for a man'}>
                      a woman looking for a man
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  fullWidth
                  margin="dense"
                  sx={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: '800',
                      fontSize: '16px',
                      lineHeight: '22px',
                      textAlign: 'right',
                      color: '#3E352F',
                      display: 'inline-block',
                      marginRight: '24px',
                    }}>
                    Age:
                  </Typography>
                  <Select
                    className="login-form-filed"
                    fullWidth
                    variant="outlined"
                    defaultValue={25}
                    value={age}
                    onChange={handleAge}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      display: 'inline-block',
                      width: '380px',
                      height: '46px',
                      textAlign: 'left',
                      '& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline:hover':
                        {
                          border: '2px solid #F6A95F',
                          borderRadius: '12px',
                        },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #F6A95F',
                      },
                    }}>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  fullWidth
                  margin="dense"
                  sx={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: '800',
                      fontSize: '16px',
                      lineHeight: '22px',
                      textAlign: 'right',
                      color: '#3E352F',
                      display: 'inline-block',
                      marginRight: '24px',
                    }}>
                    My location:
                  </Typography>
                  <Select
                    className="login-form-filed"
                    fullWidth
                    variant="outlined"
                    defaultValue="Yerevan"
                    value={location}
                    onChange={handleLocation}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      display: 'inline-block',
                      width: '380px',
                      height: '46px',
                      textAlign: 'left',
                      '& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline:hover':
                        {
                          border: '2px solid #F6A95F',
                          borderRadius: '12px',
                        },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #F6A95F',
                      },
                    }}>
                    <MenuItem value={'Yerevan'}>Yerevan</MenuItem>
                    <MenuItem value={'New York'}>New York</MenuItem>
                    <MenuItem value={'London'}>London</MenuItem>
                  </Select>
                </FormControl>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: '400',
                    fontSize: '8px',
                    lineHeight: '11px',
                    color: '#3E352F',
                    maxWidth: '380px',
                    textAlign: 'left',
                    marginLeft: 'auto',
                  }}>
                  E.g. New Roads or 70760 <br />
                  We don’t use postal addresses to contact members directly!
                </Typography>

                <FormControl
                  fullWidth
                  margin="dense"
                  sx={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: '800',
                      fontSize: '16px',
                      lineHeight: '22px',
                      textAlign: 'right',
                      color: '#3E352F',
                      display: 'inline-block',
                      marginRight: '24px',
                    }}>
                    My email:
                  </Typography>
                  <TextField
                    className={`login-form-filed ${error.name === 'email' ? 'error' : ''}`}
                    fullWidth
                    required
                    name="email"
                    variant="outlined"
                    type="text"
                    value={email}
                    onChange={handleEmail}
                    autoFocus
                    sx={{
                      padding: '0',
                      display: 'inline-block',
                      width: '380px',
                      height: '46px',
                      textAlign: 'left',
                      margin: '0px',
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #F6A95F',
                        borderRadius: '12px',
                      },
                      '&:not(.error) .MuiOutlinedInput-root.Mui-focused, & .MuiOutlinedInput-root:hover':
                        {
                          '& > fieldset': {
                            borderColor: '#F6A95F',
                          },
                        },
                      '&.error .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #D50000',
                      },
                      '& input[type=email], & input[type=text]': {
                        padding: '12px 20px',
                      },
                    }}></TextField>
                </FormControl>
                {renderErrorMessage('email')}

                <FormControl
                  fullWidth
                  margin="dense"
                  sx={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginTop: '20px',
                    position: 'relative',
                  }}>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: '800',
                      fontSize: '16px',
                      lineHeight: '22px',
                      textAlign: 'right',
                      color: '#3E352F',
                      display: 'inline-block',
                      marginRight: '24px',
                    }}>
                    My password:
                  </Typography>
                  <TextField
                    className="login-form-filed"
                    fullWidth
                    required
                    name="password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePassword}
                    autoFocus
                    sx={{
                      display: 'inline-block',
                      width: '100%',
                      maxWidth: '380px',
                      height: '46px',
                      textAlign: 'left',
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #F6A95F',
                        borderRadius: '12px',
                      },
                      '& .MuiOutlinedInput-root.Mui-focused, & .MuiOutlinedInput-root:hover': {
                        '& > fieldset': {
                          borderColor: '#F6A95F',
                        },
                        '& input[type=password]': {
                          padding: '12px 20px',
                        },
                      },
                    }}></TextField>
                  <IconButton
                    aria-label="visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={{
                      position: 'absolute',
                      width: '46px',
                      height: '46px',
                      right: '5px',
                      top: '3px',
                      '&:hover, &:active ': {
                        backgroundColor: 'transparent',
                      },
                    }}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </FormControl>
                <FormControl
                  fullWidth
                  margin="dense"
                  sx={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '22px',
                      textTransform: 'ppercase',
                      color: '#3E352F',
                      padding: '10px 30px',
                      width: '115px',
                      height: '42px',
                      background: '#F6A95F',
                      border: '1px solid #F6A95F',
                      borderRadius: '12px',
                      '&:hover, &:active': {
                        background: '#CBC8C5',
                        borderRadius: '12px',
                        color: 'rgba(62, 53, 47, 0.3)',
                        border: 'none',
                      },
                    }}>
                    start!
                  </Button>
                </FormControl>
              </Box>
              <Box 
                sx={{
                  margin: '0',
                  padding: '0',
                  display: 'flex',
                  justifyContent: 'center',
                }}
                >
              <Typography
                component="p"
                sx={{
                  fontWeight: '800',
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: '#3E352F',
                  marginRight: '24px',
                }}>
                Already signed up?
              </Typography>
              <Link className="login-link" to="/">
                <Typography
                  sx={{
                    fontWeight: '800',
                    fontSize: '16px',
                    lineHeight: '22px',
                    textDecoration: 'underline',
                    color: '#585DEC',
                  }}>
                  Log in
                </Typography>
              </Link>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                width: { md: 640 },
                marginLeft: '150px',
                marginBottom: '50px',
                marginTop: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Box
                component="ul"
                sx={{
                  width: { md: 640 },
                  marginBottom: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <List
                  className="footer-links"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    '& li:not(:last-of-type)': {
                      marginRight: '40px',
                    },
                  }}>
                  <ListItem disableGutters>
                    <Link
                      to={
                        'https://www.nett-treff.com/c3RhdGljUGFnZS9wcml2YWN5cG9saWN5bmV0dC10cmVmZi5jb20='
                      }>
                      Privacy Policy
                    </Link>
                  </ListItem>
                  <ListItem disableGutters>
                    <Link
                      to={
                        'https://www.nett-treff.com/c3RhdGljUGFnZS9wcml2YWN5cG9saWN5bmV0dC10cmVmZi5jb20='
                      }>
                      Terms of Use
                    </Link>
                  </ListItem>
                  <ListItem disableGutters>
                    <Link
                      to={
                        'https://www.nett-treff.com/c3RhdGljUGFnZS9wcml2YWN5cG9saWN5bmV0dC10cmVmZi5jb20='
                      }>
                      Safe Dating
                    </Link>
                  </ListItem>
                  <ListItem disableGutters>
                    <Link
                      to={
                        'https://www.nett-treff.com/c3RhdGljUGFnZS9wcml2YWN5cG9saWN5bmV0dC10cmVmZi5jb20='
                      }>
                      Contact Us
                    </Link>
                  </ListItem>
                </List>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '22px',
                    textAlign: 'center',
                    color: '#3E352F',
                  }}>
                  © Copyright 2023, Kaleton Web s.r.o.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} sx={12}>
            <Box
              component="img"
              sx={{
                height: 80,
                width: 188,
                marginTop: '50px',
                marginRight: '107px',
                display: 'block',
                float: 'right',
              }}
              alt="Logo"
              src={logo}
            />
          </Grid>
        </Grid>
      </Container>
    )
  }
