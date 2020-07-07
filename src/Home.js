import React from 'react';
import {createUseStyles} from 'react-jss'
import { HomeModal } from "./HomeModal";
import { Header } from "./Header";
import Background from "./images/background.jpg";
import { AboutMe } from "./AboutMe";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  outerContainer: {
    width: '100%',
    background: `
      linear-gradient(
        rgba(10, 31, 49, 0.60), 
        rgba(10, 31, 49, 0.60)
      ), 
      url(${Background}) top center no-repeat`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  container: {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0px',
    paddingTop: '15%',
    margin: '0 auto',
    clear: 'all',
    width: '80%',
  },
  header: {
    width: '100%',
    textAlign: 'center',
  },
  h1: {
    fontSize: '5em',
    textTransform: 'uppercase',
    margin: '15px',
    color: '#fff',
    fontWeight: '400',
    letterSpacing: '0.1em'
  },
  h2: {
    fontSize: '4em',
    color: '#6bccef',
    fontWeight: '300'
  },
  imagesContainer: {
    width: '100%'
  },
  '@media (max-width: 1050px)': {
    container: {
      alignItems: 'flex-start',
      flexWrap:"wrap"
    },
    h1: {
      fontSize: '2.8em'
    },
    h2: {
      fontSize: '2.3em'
    }
  },
});

export const Home = () => {
  const myClasses = useStyles()

  return (
    <div className={myClasses.outerContainer}>
      <Header />
      <section className={myClasses.container}>

        <header className={myClasses.header}>
          <h1 className={myClasses.h1}>
            Greg Miller
          </h1>
          <h2 className={myClasses.h2}>
            Web Developer
          </h2>
        </header>

        <article className={myClasses.imagesContainer}>
            <HomeModal text={"About Me"} color={"green"} style={{ marginLeft: "0px" }}>
              <AboutMe />
            </HomeModal>
            <HomeModal text={"Blog"} color={"orange"}>
              <p>I'm a modal!</p>
            </HomeModal>
            <HomeModal text={"Skills"} color={"blue"}>
              <p>I'm a modal!</p>
            </HomeModal>
        </article>

      </section>
    </div>
  )
}