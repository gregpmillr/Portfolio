import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  header: {
    position: 'relative',
    fontSize: '20px',
    color: '#dedee0',
    letterSpacing: '0.02em',
    fontWeight: '600',
    paddingBottom: '15px',
    '&:after': {
      position: 'absolute',
      bottom: '0px',
      width: '100%',
      marginTop: '0px',
      content: '""',
      backgroundImage: 'radial-gradient(ellipse at left,rgba(197,202,213,.15) 0%,rgba(255,255,255,0) 70%)',
      height: '1px', /*for horizontal border; width for vertical*/
      display: 'block',
    }
  },
})

export const SectionHeader = ({children}) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>{children}</header>
  )
};