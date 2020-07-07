import React from "react";
import LinkedinIcon from './images/linkedin-icon.png';
import FacebookIcon from './images/facebook-icon.png';
import InstagramIcon from './images/instagram-icon.png';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    flex: '0 1 auto',
    padding: '20px 10%'
  },
  image: {
    margin: '5px',
    width: '25px',
    height: '25px',
  }
})

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
    <p>
      greg
    </p>

    <div>
      <img className={classes.image} src={LinkedinIcon}
      alt="Unavailable"></img>
      <img className={classes.image} src={FacebookIcon}
      alt="Unavailable"></img>
      <img className={classes.image} src={InstagramIcon}
      alt="Unavailable"></img>
    </div>
  </header>
  )
}