import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: "flex-start",
    padding: '40px 0px',
    '&:before': {
      position: 'absolute',
      top: '0px',
      width: '100%',
      marginTop: '0px',
      content: '""',
      backgroundImage: 'radial-gradient(ellipse at left,rgba(197,202,213,.15) 0%,rgba(255,255,255,0) 70%)',
      height: '1px', /*for horizontal border; width for vertical*/
      display: 'block',
    }
  }
})

export const SectionBody = ({ styles, children }) => {
  const classes = useStyles();
  return (
    <div style={styles} className={classes.container}>{children}</div>
  )
}