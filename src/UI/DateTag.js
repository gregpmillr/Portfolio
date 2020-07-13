import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  container: {
    border: '1px solid #666',
    color: '#666',
    padding: '4px',
    fontSize: '13px',
    width: 'max-content',
    letterSpacing: '.02em',
  },
  active: {
    color: '#feb13e',
    borderColor: '#feb13e'
  }
})

export const DateTag = ({ active, date }) => {
  const classes = useStyles();
  return (
    <span className={`${classes.container} ${active && classes.active}`}>{date}</span>
  )
}