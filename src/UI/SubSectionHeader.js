import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  header: {
    position: 'relative',
    fontSize: '1.2em',
    color: '#dedee0',
    letterSpacing: '-0.03em',
    fontWeight: '500',
    padding: '5px 0px',
    paddingBottom: '20px',
  },
})

export const SubSectionHeader = ({children}) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>{children}</header>
  )
};