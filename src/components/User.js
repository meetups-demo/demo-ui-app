import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Topbar from './Topbar';
import Client from '../Client';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const backgroundShape = require('../images/shape.svg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['A500'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 20,
    padding: 20,
    paddingBottom: 200,

  },
  // card: {
  //   display: 'flex',
  // },
  // details: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  grid: {
    width: 1000
  },
  // content: {
  //   flex: '1 0 auto',
  // },
  media: {
    height: 0,
    "padding-top": "56.25%"
  },
})

class User extends Component {
  state = {
    user: {},
  };
  componentDidMount() {
    Client.user(user => {
      this.setState({
        user: user.data
      });
    });
  }
  render() {
    const { classes } = this.props;
    const { user } = this.state;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>


                <Card className={classes.card}>
                  <Grid item xs={8}>
                    <CardContent className={classes.content}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {user.name}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="h4">
                        {user.email}
                      </Typography>
                      <Typography gutterBottom variant="h8" component="h5">
                        <b>Address: </b> {user.address}
                      </Typography>
                      <Typography gutterBottom variant="h8" component="h5">
                        <b>Website: </b> {user.website}
                      </Typography>
                      <Typography component="p">
                        {user.bio}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={4}>
                    <CardMedia
                      className={classes.media}
                      image={user.image}
                      title={user.name}
                    />
                  </Grid>
                  
                </Card>

              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(User);