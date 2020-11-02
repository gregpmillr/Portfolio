import React from "react";
import {createUseStyles} from 'react-jss'
import Sidebar from "./UIV2/Sidebar";

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '100%'
  },
  section: {
    width: '100%',
    color: '#000'
  },
  h1: {
    color: 'grey',
    fontFamily: 'Playfair Display',
    fontWeight: '500',
    letterSpacing: '0.1em',
    fontSize: '3em',
    marginTop: '10px',
    textAlign: 'center'
  }
})

const Blog = () => {
  const classes = useStyles()

  return (
    <main className={classes.container}>
      <Sidebar />
      <section className={classes.section}>
        <h1 className={classes.h1}>Welcome!</h1>
      </section>
    </main>
  )
}

export default Blog;