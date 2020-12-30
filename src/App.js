import './App.css';
import {Container, Checkbox, Box, Paper, FormControl, FormControlLabel, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React,{useState} from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    width:"100vw",
    height:"100vh",
    paddingTop:theme.spacing(5)
  },
}));

function App() {
  const classes = useStyles();
  const [remember, setRemember] = useState(false)
  const handleChange= (e)=>{
    setRemember(e.target.checked)
  }
  return (
    <Container className={classes.root}  >
      <Paper component={Box} width="30%" padding={4} mx="auto">
        <Typography>{remember ? "true":"false"}</Typography>
        <Box component="form">
          <FormControl>
            <FormControlLabel label="keep me remember" control={<Checkbox 
             icon={<FavoriteBorderIcon/>}
             checkedIcon={<FavoriteIcon />}
             onChange={handleChange}
              checked={remember}/>}/>
          </FormControl>
      
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
