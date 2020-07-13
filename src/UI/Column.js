import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: '1'
  },
})

export const Column = ({rootClasses, children}) => {
  const classes = useStyles();
  return (
    <div className={`${rootClasses} ${classes.container}`}>
      {children}
    </div>
  )
};