import React from "react";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  h1: {
    margin: "auto auto",
    fontFamily: "Moderat",
    fontWeight: "200",
    letterSpacing: "normal",
    textAlign: "center",
  },
})

const AboutMeV2 = () => {
  const classes = useStyles()

  return (
    <>
      <h1 className={classes.h1}>About Me</h1>
    </>
  )
}

export default AboutMeV2;