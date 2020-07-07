import React from "react";
import {createUseStyles} from 'react-jss'
import profileImg from "./images/profileCircle.png";
import { useState } from 'react';
import { SectionHeader } from "./UI/SectionHeader";
import { Column } from "./UI/Column";

const useStyles = createUseStyles({
  layout: {
    display: 'flex',
    overflow: 'hidden',
    flexFlow: 'row nowrap',
    height: '100%',
  },
  container: {
    position: 'relative',
    width: '70%',
    margin: '0 auto',
    overflow: 'auto',
    padding: '0px 40px',
    overscrollBehavior: 'contain',
  },
  left: {
    width: '30%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '10px 10px 15px rgba(0,0,0,.1)'
  },
  leftTop: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    margin: 'auto'
  },
  profileTitle: {
    color: 'rgba(255,255,255,.85)',
    fontSize: '34px',
    fontWeight: '400',
    margin: '15px'
  },
  profileRole: {
    margin: '0px',
    textAlign: 'center'
  },
  profileImage: {
    width: '150px',
    height: 'auto',
    margin: '0 auto'
  },
  downloads: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    borderTop: '1px solid rgba(197,202,213,.15)',
  },
  downloadable: {
    padding: '20px',
    flex: '1',
    textAlign: 'center',
    color: 'rgba(255,255,255,.85)',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    '&:hover': {
      color: '#ff9800',
    }
  },
  downloadableLeftBorder: {
    borderLeft: '1px solid rgba(197,202,213,.15)',
  },
  orange: {
    color: '#ff9800',
  },
  section: {
    marginTop: '70px',
  },
  p: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: 'rgba(255,255,255,.77)',
    letterSpacing: '.03em',
  },
  center: {
    margin: '0 auto',
  },
  personalInfo: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
  col: {
    width: '50%',
  },
  strong: {
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.91)',
  },
  resumeContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    paddingTop: '30px',
  },
  columnPadding: {
    padding: '0px 20px'
  },
  borderLeft: {
    borderLeft: '1px solid rgba(197,202,213,.15)',
  },
  '@media (max-width: 1450px)': {
    profileImage: {
      margin: '0px',
      marginLeft: '20px',
      width: '80px'
    },
    layout: {
      flexFlow: 'column nowrap',
      height: 'auto'
    },
    left: {
      width: '100%',
      height: 'auto',
      flexFlow: 'row wrap',
      boxShadow: 'none'
    },
    leftTop: {
      flexFlow: 'row wrap',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'flex-start',
      padding: '10px'
    },
    p: {
      width: '100%',
    },
    container: {
      boxSizing: 'border-box',
      width: '100%',
    },
    personalInfo: {
      flexFlow: 'column wrap'
    },
    col: {
      width: '100%',
    },
    downloads: {
      width: '100%',
      border: 'none',
      padding: '20px'
    },
    downloadable: {
      flex: 'unset',
      width: 'auto',
      border: '1px solid #ff9800 !important',
      margin: '10px',
      padding: '0px 10px'
    },
    downloadableLeftBorder: {
      border: '0px',
    }
  }
})

function useResume() {
  const [isShowing, setIsShowing] = useState(false);

  function toggle(e) {
    e.stopPropagation();
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
}

function renderResume(classes) {
  return (
    <article className={classes.container}>
      <section className={classes.section}>
        <SectionHeader>Resume</SectionHeader>
        <div className={classes.resumeContainer}>
          <Column rootClasses={classes.columnPadding}>
            <SectionHeader>EXPERIENCE</SectionHeader>
            <p>blah</p>
            <p>blah</p>
            <p>blah</p>
            <p>blah</p>
            <p>blah</p>
            <p>blah</p>

          </Column>
          <Column rootClasses={`${classes.borderLeft} ${classes.columnPadding}`}>
            <SectionHeader>EDUCATION</SectionHeader>
            <p>blah</p>
            <p>blah</p>
            <p>blah</p>
            <p>blah</p>
            <p>blah</p>
            <p>blah</p>

          </Column>
        </div>
      </section>
    </article>
  )
}

function renderBio(classes) {
  return (
    <article className={classes.container}>
      <section className={classes.section}>
        <SectionHeader>
          <span className={classes.orange}>About</span> Me
        </SectionHeader>
        <p className={`${classes.p}`}>
          I'm a web developer based in Halifax, NS. I hold a diploma
          from the Nova Scotia Community College (NSCC) in Data Applications Programming, and
          a degree in Applied Computer Science (BACS) from Dalhousie University.
        </p>
        <div className={classes.personalInfo}>
          <div className={classes.col}>
            <p className={`${classes.p}`}><span className={classes.strong}>AGE</span>:... 25</p>
            <p className={`${classes.p}`}><span className={classes.strong}>FREELANCE</span>:... Available</p>
          </div>
          <div className={classes.col}>
            <p className={`${classes.p}`}><span className={classes.strong}>RESIDENCE</span>:... Canada</p>
            <p className={`${classes.p}`}><span className={classes.strong}>ADDRESS</span>:... Nova Scotia, Canada</p>
          </div>
        </div>
      </section>

      <section className={classes.section}>
        <SectionHeader>
          <span className={classes.orange}>Work</span> Ethic
        </SectionHeader>
        <p className={`${classes.p}`}>
          I pride Myself in being the sole developer for a local start-up for
          3 years, leading the development of a scalable web application and later 
          putting together a remarkable team of developers. It 
          may be because of this that my work ethic leads me to believe proper developers must 
          understand best-practices of the technology they are working with, the Software Development
          Lifecycle, and have working knowledge of all parts of their application.
        </p>
      </section>

      <section className={classes.section}>
        <SectionHeader>
          Interests
        </SectionHeader>
        <p className={`${classes.p}`}>
          Other than work, I have a few more interests. Recently, I've been learning of 
          genetic algorithms to create evolution simulations using Unity. I'm an avid 
          woodworker, taking after my Father, Grandfather, and others in my family.
          My main mode of transportation is a Boosted Board. Finally, I'm sure many describe 
          me as the quiet outdoorsy type, because of how frequently I backwoods camp 
          and hike.
        </p>
      </section>
    </article>
  )
}

export const AboutMe = () => {
  const classes = useStyles();
  const { isShowing, toggle } = useResume();
  return (
    <div className={classes.layout}>
      <div className={classes.left}>
        <div className={classes.leftTop}>
          <img className={classes.profileImage} src={profileImg} alt="profileImage" />
          <p className={classes.profileTitle}>Greg Miller</p>
          <p className={`${classes.orange} ${classes.profileRole}`}>Web Developer</p>
        </div>
        <div className={classes.downloads}>
          <div className={classes.downloadable} onClick={toggle}>
            <p>{isShowing ? 'BIO' : 'RESUME'}</p>
          </div>
          <div className={`${classes.downloadable} ${classes.downloadableLeftBorder}`}>
            <p>CONTACT ME</p>
          </div>
        </div>
      </div>
      { isShowing ? renderResume(classes, toggle) : renderBio(classes) }
    </div>
  )
}