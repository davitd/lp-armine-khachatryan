import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  FormControl,
  Button,
  Select,
  MenuItem,
  TextField,
  Stepper,
  Step,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import bgMobile from '../img/Group 275.svg';
import activeStepImg from '../img/logoNettTreff 7.svg';
import nonActiveStep from '../img/logoNettTreff 5.svg';

export const MobileComponent = ({ loginData }) => {

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

   const getSteps = () => {
    return new Array(5).fill(0);
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <FormControl
              fullWidth
              margin="dense"
              sx={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginBottom: '12px',
              }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: '800',
                  fontSize: '14px',
                  lineHeight: '19px',
                  textAlign: 'left',
                  color: '#3E352F',
                  display: 'block',
                  marginLeft: '10px',
                  marginBottom: '10px'
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
                  width: '218px',
                  height: '26px',
                  textAlign: 'left',
                  fontWeight: '800',
                  fontSize: '12px',
                  lineHeight: '16px',
                  alignSelf: 'center',
                  '& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline:hover': {
                    border: '2px solid #F6A95F',
                    borderRadius: '8px',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid #F6A95F',
                  },
                  '& .MuiSelect-select': {
                    padding: '4px 20px'
                  }
                }}>
                <MenuItem value={'a man looking for a woman'}>a man looking for a woman</MenuItem>
                <MenuItem value={'a woman looking for a man'}>a woman looking for a man</MenuItem>
              </Select>
            </FormControl>
          </>
        );
      case 1:
        return (
          <>
            <FormControl
              fullWidth
              margin="dense"
              sx={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginBottom: '12px',
              }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: '800',
                  fontSize: '14px',
                  lineHeight: '19px',
                  textAlign: 'left',
                  color: '#3E352F',
                  display: 'block',
                  marginLeft: '10px',
                  marginBottom: '10px'
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
                  width: '218px',
                  height: '26px',
                  textAlign: 'left',
                  fontWeight: '800',
                  fontSize: '12px',
                  lineHeight: '16px',
                  alignSelf: 'center',
                  '& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline:hover': {
                    border: '2px solid #F6A95F',
                    borderRadius: '8px',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid #F6A95F',
                  },
                  '& .MuiSelect-select': {
                    padding: '4px 20px'
                  }
                }}>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={18}>18</MenuItem>
              </Select>
            </FormControl>
          </>
        );
      case 2:
        return (
          <>
            <FormControl
              fullWidth
              margin="dense"
              sx={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginBottom: '12px',
              }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: '800',
                  fontSize: '14px',
                  lineHeight: '19px',
                  textAlign: 'left',
                  color: '#3E352F',
                  display: 'block',
                  marginLeft: '10px',
                  marginBottom: '10px'
                }}>
                My location:
              </Typography>
              <Select
                className="login-form-filed"
                fullWidth
                variant="outlined"
                defaultValue={'Yerevan'}
                value={location}
                onChange={handleLocation}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  display: 'inline-block',
                  width: '218px',
                  height: '26px',
                  textAlign: 'left',
                  fontWeight: '800',
                  fontSize: '12px',
                  lineHeight: '16px',
                  alignSelf: 'center',
                  '& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline:hover': {
                    border: '2px solid #F6A95F',
                    borderRadius: '8px',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid #F6A95F',
                  },
                  '& .MuiSelect-select': {
                    padding: '4px 20px'
                  }
                }}>
                <MenuItem value={'Yerevan'}>Yerevan</MenuItem>
                <MenuItem value={'New York'}>New York</MenuItem>
                <MenuItem value={'London'}>London</MenuItem>
              </Select>
            </FormControl>
          </>
        );
        case 3:
        return (
          <>
          <FormControl
            fullWidth
            margin="dense"
            sx={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginBottom: '12px',
            }}>
            <Typography
              component="span"
              sx={{
                fontWeight: '800',
                fontSize: '14px',
                lineHeight: '19px',
                textAlign: 'left',
                color: '#3E352F',
                display: 'block',
                marginLeft: '10px',
                marginBottom: '10px'
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
                width: '218px',
                height: '26px',
                textAlign: 'left',
                fontWeight: '800',
                fontSize: '12px',
                lineHeight: '16px',
                alignSelf: 'center',
                margin: '0px',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: '2px solid #F6A95F',
                  borderRadius: '8px',
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
                  padding: '0px 20px',
                },
              }}></TextField>
          </FormControl>
          {renderErrorMessage('email')}
          </>
        );
        case 4:
        return (
          <>
            <FormControl
              fullWidth
              margin="dense"
              sx={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginBottom: '12px',
                position: 'relative',
              }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: '800',
                  fontSize: '14px',
                  lineHeight: '19px',
                  textAlign: 'left',
                  color: '#3E352F',
                  display: 'block',
                  marginLeft: '10px',
                  marginBottom: '10px'
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
                  padding: '0',
                  width: '218px',
                  height: '26px',
                  textAlign: 'left',
                  fontWeight: '800',
                  fontSize: '12px',
                  lineHeight: '16px',
                  alignSelf: 'center',
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid #F6A95F',
                    borderRadius: '8px',
                  },
                  '& .MuiOutlinedInput-root': {
                    width: '100%',
                    height: '26px',
                  },
                  '& .MuiOutlinedInput-root.Mui-focused, & .MuiOutlinedInput-root:hover': {
                    '& > fieldset': {
                      borderColor: '#F6A95F',
                    },
                    '& input[type=password], & input[type=text]': {
                      padding: '0px 20px',
                    },
                  },
                }}></TextField>
              <IconButton
                aria-label="visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                sx={{
                  position: 'absolute',
                  width: '24px',
                  height: '24px',
                  right: '15px',
                  top: '30px',
                  '&:hover, &:active ': {
                    backgroundColor: 'transparent',
                  },
                }}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </FormControl>
          </>
        );
      default:
        return 'Unknown step';
    }
  }

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container
          maxWidth={false}
          disableGutters
          className="main"
          component="main"
          sx={{
            minHeight: '100vh',
            backgroundImage: `linear-gradient(180deg, rgba(62, 53, 47, 0) 0%, rgba(62, 53, 47, 0.08) 100%), url('${bgMobile}')`,
            backgroundPosition: 'center 90%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Box
              component="div"
              sx={{
                height: 228,
                width: 276,
                marginTop: '120px',
                background: '#FEF6F0',
                boxShadow: '0px 0px 30px rgba(91, 105, 152, 0.2)',
                borderRadius: '16px',
                padding: '20px',
              }}>
                <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  margin: '0',
                  paddind: '0'
                }}>
                <Typography
                  component="h1"
                  sx={{
                    fontWeight: '600',
                    fontSize: '12px',
                    lineHeight: '19px',
                    textTransform: 'uppercase',
                    color: '#3E352F',
                    marginBottom: '14px',
                  }}>
                  GET LOVELY CUTIES IN YOUR AREA!
                </Typography>
                

                {activeStep === steps.length ? (
                  <>
                    <Typography>Form is submitted</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </>
                ) : (
                  <>
                    {getStepContent(activeStep)}
                  </>
                )}


                {activeStep !== steps.length && ( <div>
                      <div style={{'marginBottom': '15px'}}>
                        <Button 
                          startIcon={<ArrowBackIosIcon /> }
                          sx={activeStep === 0 ? 
                          {display: 'none'} : 
                          {
                            width: '103px',
                            height: '26px',
                            padding: '6px',
                            background: '#F6A95F',
                            border: '2px solid #F6A95F',
                            borderRadius: '8px',
                            fontWeight: '500',
                            fontSize: '10px',
                            lineHeight: '14px',
                            color: '#3E352F',
                            marginLeft: '9px',
                            marginRight: '12px',
                            '&:hover': {
                              background: '#F6A95F'
                            },
                            '& > .MuiButton-startIcon': {
                              marginRight: '0',
                            },
                            '& > .MuiButton-startIcon>*:nth-of-type(1)': {
                              fontSize: '14px',
                            }
                          }} 
                          onClick={handleBack}>
                          Back
                        </Button>
                        <Button 
                        variant="contained" 
                        endIcon={activeStep !==  (steps.length - 1) ? <ArrowForwardIosIcon /> : ''}
                        sx={activeStep === 0 ? 
                            {width: '218px',
                            height: '26px',
                            padding: '6px',
                            background: '#F6A95F',
                            border: '2px solid #F6A95F',
                            borderRadius: '8px',
                            fontWeight: '500',
                            fontSize: '10px',
                            lineHeight: '14px',
                            color: '#3E352F',
                            marginLeft: '9px',
                            '&:hover': {
                              background: '#F6A95F'
                            },
                            '& > .MuiButton-endIcon': {
                              marginLeft: '0',
                            },
                            '& > .MuiButton-endIcon>*:nth-of-type(1)': {
                              fontSize: '14px',
                            }
                            }: 
                            {
                              width: '103px',
                              height: '26px',
                              padding: '6px',
                              background: '#CBC8C5',
                              border: '1px solid #CBC8C5',
                              borderRadius: '8px',
                              color: '#3E352F',
                              '&:hover': {
                                background: '#CBC8C5'
                              },
                              '& > .MuiButton-endIcon': {
                                marginLeft: '0',
                              },
                              '& > .MuiButton-endIcon>*:nth-of-type(1)': {
                                fontSize: '14px',
                              }
                            }} 
                            onClick={handleNext}>
                                                
                          {(activeStep === steps.length - 1) ? 
                          ('Start') : 
                          ('Next')}
                        </Button>
                      </div>
                    </div>)}

                  <Stepper
                  nonLinear
                  activeStep={activeStep}
                  sx={{
                    justifyContent: 'center',
                    '& .MuiStepConnector-horizontal': {
                      display: 'none',
                    },
                  }}>
                  {steps.map((label, index) => (
                    <Step sx={{padding: '0'}} key={index}>
                      {activeStep >= index ? (
                        <Box
                          component="img"
                          sx={{
                            height: 20,
                            width: 20,
                            marginRight: '16px',
                            display: 'block',
                          }}
                          alt="Step"
                          src={activeStepImg}
                        />
                      ) : (
                        <Box
                          component="img"
                          sx={{
                            height: 20,
                            width: 20,
                            marginRight: '16px',
                            display: 'block',
                          }}
                          alt="Step"
                          src={nonActiveStep}
                        />
                      )}
                    </Step>
                  ))}
                </Stepper>

                </Box>
                <Box 
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                  >
                  <Typography
                    component="p"
                    sx={{
                      fontWeight: '800',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#3E352F',
                      display: 'inline-block',
                      marginRight: '8px',
                    }}>
                    Already signed up?
                  </Typography>
                  <Link style={{display: 'inline-block'}} className="login-link" to="/">
                    <Typography
                      sx={{
                        fontWeight: '800',
                        fontSize: '12px',
                        lineHeight: '16px',
                        textDecoration: 'underline',
                        color: '#585DEC',
                      }}>
                      Log in
                    </Typography>
                  </Link>
                </Box>
            </Box>
            <Typography
              component="p"
              sx={{
                fontWeight: '500',
                fontSize: '8px',
                lineHeight: '11px',
                color: '#3E352F',
                marginBottom: '20px',
              }}>
              © Copyright 2023, Kaleton Web s.r.o.
            </Typography>
        </Container>
  )
}
