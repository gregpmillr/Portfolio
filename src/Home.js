import React, { useState } from "react";
import {createUseStyles} from 'react-jss'
import ListItem from "./UI/List/ListItem";
import { homeData } from "./data/home";
import AboutMeV2 from "./AboutMeV2";
import { CSSTransition } from 'react-transition-group';

const tabletBreak = '@media (max-width: 1250px)';
const mobileBreak = '@media (max-width: 720px)';

const useStyles = createUseStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: "1fr 4fr",
    height: '100%',
    backgroundColor: "#171717",
    padding: "150px",
    paddingBottom: "0px",
    paddingRight: "0px",
    boxSizing: "border-box",
    overflow: "auto",
    [tabletBreak]: {
      gridTemplateColumns: "1fr",
      padding: "20px",
      paddingRight: "0px",
    },
    [mobileBreak]: {
      padding: "20px",
      paddingRight: "0px",
    }
  },
  left: {
    fontSize: "14px",
    letterSpacing: "normal",
  },
  list: {
    display: "flex",
    flexFlow: "column nowrap",
    [mobileBreak]: {
      marginTop: "30px",
    },
    "& li:not(:first-child)": {
      marginTop: "60px"
    }
  },
  span: {
    color: "grey",
    "&:hover": {
      color: "#fff"
    }
  },
  slideUp: {
    display: "flex",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0"
  },
  entering: {
    maxHeight: '0px',
    overflow: 'hidden'
  },
  entered: {
    overflow: 'hidden',
    maxHeight: '2100vh',
    backgroundColor: "black",
    transition: 'max-height 2s cubic-bezier(0.77,0,0.175,1) ',
  },
  exiting: {
    maxHeight: '2100vh',
  },
  exited: {
    overflow: 'hidden',
    maxHeight: '0px',
    transition: 'max-height 2s cubic-bezier(0.77,0,0.175,1) '
  },
})

const components = {
  aboutMe: AboutMeV2
};

const Home = () => {
  const classes = useStyles();
  let [page, setPage] = useState(null);

  const show = page => {
    const SpecificPage = components[page];
    return <SpecificPage />;
  } 

  return (
    <main className={classes.container}>
      <div className={classes.left}><span className={classes.span}>Greg Miller</span></div>
      <ol className={classes.list}>
        {homeData.map((o, index) => <ListItem key={index} {...o} onClick={() => setPage(o.page)} />)}
      </ol>
      <CSSTransition in={page !== null} timeout={300}>
        {state => (
          <div className={`${classes.slideUp} ${classes[state]}`}>
            {page !== null && show(page)}
          </div>
        )}
      </CSSTransition>
    </main>
  )
}

export default Home;