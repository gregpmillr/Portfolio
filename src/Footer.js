import React from "react";
import LinkedinIcon from './images/linkedin-icon.png';
import GithubIcon from './images/github.png';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  header: {
    position: 'absolute',
    bottom: '0',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: 'auto'
  },
  image: {
    margin: '10px',
    marginBottom: '30px',
    width: '25px',
    height: '25px',
    cursor: 'pointer'
  }
})

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.header}>
      <div>
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/gregpmillr/">
          <img className={classes.image} src={LinkedinIcon} alt="Unavailable" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/truescotian/">
          <img className={classes.image} src={GithubIcon} alt="Unavailable" />
        </a>
      </div>
  </footer>
  )
}