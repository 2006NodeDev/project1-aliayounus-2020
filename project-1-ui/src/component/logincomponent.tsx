import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { FunctionComponent, useState, SyntheticEvent } from 'react'
import {RouteComponentProps} from 'react-router-dom'
import { webLogin } from '../Remote/p1-app-api/weblogin';

//the interface called route component props just defines history match and location
interface ILoginProps extends RouteComponentProps{
  changeCurrentUser:(newUser:any)=>void
}

export const LoginComponent:FunctionComponent<ILoginProps> = (props) => {

  //we need to keep track of a username and a password
  const [username, changeUsername] = useState('')// two bits of state from react
  const [password, changePassword] = useState('')// one for username, one for password
  // there used to be the user state here - now it is from props

  const updateUsername = (event:any) => {//callback for events
      event.preventDefault()//stop the default behaviour of the event
      changeUsername(event.currentTarget.value)//call the state changing function with new value from user
  }

  const updatePassword = (event:any) => {
      event.preventDefault()
      changePassword(event.currentTarget.value)
  }

  const loginSubmit = async (e:SyntheticEvent) => {//sythentic events are react interface for converting between the many different types of browser events
      e.preventDefault()
      let res = await webLogin(username, password)
      props.changeCurrentUser(res)
      changePassword('')
      // props.history.push('/clicker')
  }

  return (
      <div>
          {/* by default the submit event in a form tries to send a get request to the href value in the form */}
          <form autoComplete="off" onSubmit={loginSubmit}>
              <TextField id="standard-basic" label="Username" value={username} onChange={updateUsername}/>
              <TextField id="standard-basic" type='password' label="Password" value={password} onChange={updatePassword} />
              <Button type='submit' variant="contained" color="primary">Login</Button>
          </form>
      </div>
  )
}



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(0, 0, 1),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined" margin="normal" required fullWidth
            id="username"
            label="username"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      
      </Box>
    </Container>
  );
}




// import React from 'react';

// export function LoginComponent(props:any){

//     return (
//         <div>
//             <h3> This is login Component</h3>
//         </div>
//     )
// }