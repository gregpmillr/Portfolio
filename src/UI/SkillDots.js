import React from "react"
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    marginBottom: '20px'
  },
  p: {
    margin: '10px 0px',
    marginBottom: '8px',
    letterSpacing: '.02em',
    color: '#dedee0'
  },
  progressBar: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    maxWidth: '350px',
  },
  dot: {
    width: '15px',
    height: '15px',
    borderRadius: '10px'
  },
  fill: {
    backgroundColor: 'orange'
  },
  noFill: {
    backgroundColor: 'grey',
  }
})

function renderFillDots(fill) {
  let fillDots = [];
  for(let i = 0;i < fill; i++) {
    fillDots.push("FILL");
  }
  for(let i = fill;i < 10; i++) {
    fillDots.push("NOFILL");
  }
  return fillDots;
}

export const SkillDots = ({ title, fill }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.p}>{title}</p>
      <div className={classes.progressBar}>
        {
          renderFillDots(fill).map((dot, index) =>
            <div key={index} className={`${classes.dot} ${dot === "FILL" ? classes.fill : classes.noFill}`}></div>
          )
        }
      </div>
    </div>
  )
}