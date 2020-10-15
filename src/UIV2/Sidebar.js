import React, { useState } from "react";
import {createUseStyles} from 'react-jss'
import { CSSTransition } from 'react-transition-group';

const useStyles = createUseStyles({
  aside: {
    height: '100%',
    width: '350px',
    backgroundColor: '#d7d7d7'
  },
  h3: {
    fontSize: '1.3em',
    color: '#000',
    marginLeft: '40px',
    marginBottom: '40px'
  },
  ul: {
    listStyleType: 'none',
    color: '#3b3b3b',
    fontWeight: '200',
    letterSpacing: '0.1em',
    fontSize: '0.9em',
    '& li': {
      cursor: 'pointer',
      marginTop: '15px',
    },
    '& ul': {
      color: '#3b3b3b',
      fontSize: '0.8em',
    }
  },
  entering: {
    maxHeight: '0px',
    overflow: 'hidden'
  },
  entered: {
    overflow: 'hidden',
    maxHeight: '100px',
    transition: 'max-height 0.5s ease',
  },
  exiting: {
    maxHeight: '100px',
  },
  exited: {
    overflow: 'hidden',
    maxHeight: '0px',
    transition: 'max-height 0.5s ease'

  },
})

const List = ({ label, children }) => {
  const classes = useStyles();
  const [isShowing, setIsShowing] = useState(false);

  const onClick = () => setIsShowing(!isShowing);

  return (
    <>
      <li onClick={onClick}>{label}</li>
      <CSSTransition in={isShowing}>
        {state => (
          <ul className={`${classes.ul} ${classes[state]}`}>
            {children}
          </ul>
        )}
      </CSSTransition>
    </>
  )
}

const Sidebar = () => {
  const classes = useStyles();

  return (
    <aside className={classes.aside}>
      <h3 className={classes.h3}>Greg</h3>
      <ul className={classes.ul}>
        <List label="React">
          <li>Sub Topic</li>
          <li>Sub Topic</li>
          <li>Sub Topic</li>
        </List>
        <List label="Golang">
          <li>Sub Topic</li>
        </List>
        <List label="Ops">
          <li>Sub Topic</li>
        </List>
        <List label="Networking">
          <li>Sub Topic</li>
          <li>Sub Topic</li>
          <li>Sub Topic</li>
        </List>
      </ul>
    </aside>
  )
}

export default Sidebar;