import React from "react"
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    marginBottom: '20px'
  },
  progressBar: {
    width: '100%',
    height: '5px',
    backgroundColor: '#3e4148',
    marginTop: '1.3px',
  },
  innerProgressBar: {
    backgroundColor: '#feb13e',
    height: '5px'
  },
  p: {
    margin: '10px 0px',
    marginBottom: '15px',
    letterSpacing: '.02em',
    color: '#dedee0'
  }
})

export const SkillLine = ({ title, width }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.p}>{title}</p>
      <div className={classes.progressBar}>
        <div className={classes.innerProgressBar} style={{width}} />
      </div>
    </div>
  )
}