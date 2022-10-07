import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
import { BrowserRouter as Router , Routes , Route , Navigate } from 'react-router-dom';
import PenIcon from '@material-ui/icons/Create';
import PostsList from './components/PostsLists';

const useStyles = makeStyles((theme) =>({
  root : {
    flexGrow : 1 , 
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title : {
    flexGrow : 1,
  },
  container: {
    marginTop : theme.spacing(3),
  },
} ) );
const App = () => {
  const classes = useStyles();
    return (
      <>
      <CssBaseline/>
      <Container maxWidth = "lg">
        <AppBar position='static' color='inherit' elevation={0}>
          <Toolbar>
            <IconButton 
             edge = 'start'
             className={classes.container} 
             color = 'inherit' 
             />
             <Typography variant='h6' 
             color='secondary'
              className={classes.title}
              >
                <a href="http://localhost:3000/posts">Mert's Blog</a>
             </Typography>
             <Button color = 'primary' variant='outlined' startIcon ={<PenIcon />}>
                  Yeni Yazııı
             </Button>
          </Toolbar>
        </AppBar>

        <Grid container className = {classes.container}>
          <Grid item xs = {12}>
            <Router>
              <Routes>
                <Route exact path='/posts' element = {PostsList}/>
              </Routes>

              <Navigate from ='/' to = '/posts'/>
            </Router>
          </Grid>
        </Grid>
      </Container>
      </>
    )
}

export default App;