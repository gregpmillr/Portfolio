import React from 'react';
import {createUseStyles} from 'react-jss'
import { BlogListModal } from "./BlogListModal";
import { HomeModal } from "./HomeModal";
import { Footer } from "./Footer";
import Background from "./images/background.jpg";
import { AboutMe } from "./AboutMe";
import { ContactModal } from "./UI/ContactModal";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  outerContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
    minHeight: '100%',
    background: `
      linear-gradient(
        rgba(10, 31, 49, 0.80), 
        rgba(10, 31, 49, 0.80)
      ), 
      url(${Background}) top center no-repeat`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto'
  },
  container: {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 'auto',
    width: '80%',
    maxHeight: '100%',
  },
  header: {
    width: '100%',
    textAlign: 'center',
  },
  h1: {
    fontFamily: 'Playfair Display',
    fontSize: '3.8em',
    textTransform: 'uppercase',
    margin: '30px',
    color: '#fff',
    fontWeight: '400',
    letterSpacing: '0.1em'
  },
  h2: {
    fontSize: '1em',
    margin: '50px',
    color: '#fff',
    fontWeight: '400',
  },
  listItems: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: 'auto'
  },
  '@media (max-width: 1050px)': {
    container: {
      alignItems: 'flex-start',
      flexWrap:"wrap"
    },
    h1: {
      fontSize: '2.5em'
    },
    h2: {
      fontSize: '1.2em'
    },
  },
});

export const Home = () => {
  const myClasses = useStyles()

  return (
    <div className={myClasses.outerContainer}>
      <section className={myClasses.container}>

        <header className={myClasses.header}>
          <h1 className={myClasses.h1}>
            greg miller
          </h1>
          <h2 className={myClasses.h2}>
            Let's build something amazing.
          </h2>
        </header>

        <article className={myClasses.listItems}>
            <HomeModal text={"ABOUT ME"}>
              <AboutMe />
            </HomeModal>
            <BlogListModal />
            <ContactModal />
        </article>

      </section>

      <Footer />
    </div>
  )
}