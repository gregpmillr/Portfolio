import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  header: {
    fontSize: '20px',
    color: '#dedee0',
    fontWeight: '600',
    paddingBottom: '15px',
    borderBottom: '1px solid rgba(197,202,213,.15)',
  },
})

export const SectionHeader = ({children}) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>{children}</header>
  )
};