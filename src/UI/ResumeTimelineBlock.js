import React from "react";
import {createUseStyles} from 'react-jss';
import { DateTag } from "./DateTag";

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
  },
  h1: {
    color: 'rgba(255,255,255,.85)',
    fontSize: '1.1em',
    fontWeight: '500',
    margin: '0px',
    marginTop: '12px',
    letterSpacing: '0.02em',
  },
  h2: {
    color: '#999',
    fontSize: '14px',
    fontWeight: '500',
    margin: '0px',
    marginTop: '4px',
    letterSpacing: '0.02em',
  },
  body: {
    wordWrap: 'break-word',
    fontSize: '16px',
    color: 'rgba(255,255,255,.55)',
    letterSpacing: '0.02em',
    fontWeight: '500'
  }
})

export const ResumeTimelineBlock = ({ dateTagActive, date, title, subtitle, body }) => {
  const classes = useStyles();
  return (
    <>
      <DateTag active={dateTagActive} date={date} />
      <h1 className={classes.h1}>{title}</h1>
      <h2 className={classes.h2}>{subtitle}</h2>
      <p className={classes.body}>{body}</p>
    </>
  )
}