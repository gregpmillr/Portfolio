import React from "react";
import {createUseStyles} from 'react-jss'
import profileImg from "./images/profileCircle.png";
import useResume from "./UI/useResume";
import { SectionHeader } from "./UI/SectionHeader";
import { Resume } from "./UI/Resume";
import { useState } from 'react';

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
      color: '#feb13e',
    }
  },
  downloadableLeftBorder: {
    borderLeft: '1px solid rgba(197,202,213,.15)',
  },
  orange: {
    color: '#feb13e',
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
    fontWeight: '500',
    fontSize: '0.94em',
    color: 'rgba(255, 255, 255, 0.91)',
  },
  resumeContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  columnPadding: {
    padding: '0px 20px',
    paddingTop: '15px'
  },
  borderLeft: {
    borderLeft: '1px solid rgba(197,202,213,.15)',
  },
  '@media (max-width: 1450px)': {
    profileTitle: {
      fontSize: '1.05em',
    },
    profileImage: {
      margin: '0px',
      marginLeft: '20px',
      width: '60px'
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
      border: '1px solid #feb13e !important',
      margin: '10px',
      padding: '0px 10px'
    },
    downloadableLeftBorder: {
      border: '0px',
    }
  }
})

function useContactForm() {
  const [showContactForm, setShowContactForm] = useState(false);

  function toggleContactForm(e) {
    e.stopPropagation();
    setShowContactForm(!showContactForm);
  }

  return {
    showContactForm,
    toggleContactForm
  }
}

function renderContactForm(classes) {
  return (
    <article className={classes.container}>

      <section className={classes.section}>
        <SectionHeader>
          <span className={classes.orange}><strong>Get</strong></span> <strong>in Touch</strong>
        </SectionHeader>
        <div className={classes.personalInfo}>
          <div className={classes.col}>
            <p className={`${classes.p}`}><span className={classes.strong}>ADDRESS</span>:... Nova Scotia, Canada</p>
            <p className={`${classes.p}`}><span className={classes.strong}>PHONE</span>:... +902 210 5887</p>
          </div>
          <div className={classes.col}>
            <p className={`${classes.p}`}><span className={classes.strong}>EMAIL</span>:... gregpmillr@gmail.com</p>
            <p className={`${classes.p}`}><span className={classes.strong}>FREELANCE</span>:... Available</p>
          </div>
        </div>
      </section>

      <section className={classes.section}>
        <SectionHeader>
          <span className={classes.orange}><strong>Contact Form</strong></span>
        </SectionHeader>
      </section>

    </article>
  )
}

function renderBio(classes) {
  return (
    <article className={classes.container}>
      <section className={classes.section}>
        <SectionHeader>
          <span className={classes.orange}><strong>About Me</strong></span>
        </SectionHeader>
        <p className={`${classes.p}`}>
          I'm a web developer from Halifax, NS. I hold a diploma
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
          <span className={classes.orange}><strong>Work Ethic</strong></span>
        </SectionHeader>
        <p className={`${classes.p}`}>
          I've been the sole developer for a local start-up for
          3 years, leading the development of a scalable web application and later 
          forming a great team of developers. This involved many sleeples nights,
          and is the core reason for my work ethic. I believe a proper developer must 
          deeply understand best-practices of the technology they are working with, 
          how the technology was built, why the technology was built, the Software 
          Development Lifecycle, and have working knowledge of all parts of their 
          application, not only their own role.
        </p>
      </section>

      <section className={classes.section}>
        <SectionHeader><span className={classes.orange}><strong>Interests</strong></span></SectionHeader>
        <p className={`${classes.p}`}>
          Other than work, I have a few more interests. Recently, I've been learning of 
          genetic algorithms to create evolution simulations using Unity. I frequently
          woodwork, taking after my Father, Grandfather, and others in my family.
          My main mode of transportation is a Boosted Board. Finally, I enjoy the outdoors
          by backwoods camping and hiking as frequently as I can.
        </p>
      </section>
    </article>
  )
}

function renderContent(showResume, showContactForm, classes) {
  if (showResume) {
    return <Resume />;
  } else if (showContactForm) {
    return renderContactForm(classes);
  } else {
    return renderBio(classes);
  }
}

export const AboutMe = () => {
  const classes = useStyles();
  const { isShowing, toggle } = useResume();
  const { showContactForm, toggleContactForm } = useContactForm();
  return (
    <div className={classes.layout}>
      <div className={classes.left}>
        <div className={classes.leftTop}>
          <img className={classes.profileImage} src={profileImg} alt="profileImage" />
          <p className={classes.profileTitle}>Greg Miller</p>
          <p className={`${classes.orange} ${classes.profileRole}`}>Web Developer</p>
        </div>
        <div className={classes.downloads}>
          <div className={classes.downloadable} onClick={(e) => {
            if (showContactForm) {
              toggleContactForm(e);
            }
            toggle(e);
          }}>
            <p>{isShowing ? 'BIO' : 'RESUME'}</p>
          </div>
          <div className={`${classes.downloadable} ${classes.downloadableLeftBorder}`} onClick={(e) => {
            if (isShowing) {
              toggle(e);
            }
            toggleContactForm(e);
            }}>
            <p>CONTACT ME</p>
          </div>
        </div>
      </div>
      {renderContent(isShowing, showContactForm, classes)}
    </div>
  )
}