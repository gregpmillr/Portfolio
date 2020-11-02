import React from "react"
import { createUseStyles } from 'react-jss'

const mobileBreak = '@media (max-width: 720px)';

const useStyles = createUseStyles({
  listItem: {
    display: "flex",
    cursor: "pointer",
    flexFlow: "column nowrap",
    color: "inherit",
    textDecoration: "none",
    borderBottom: "1px solid grey",
    overflowX: "hidden",
    "&:hover $body": {
      transform: "translateX(10px)"
    }
  },
  listItemNumber: {
    fontSize: "12px",
    letterSpacing: "normal",
    width: "140px",
    minWidth: "140px",
    paddingTop: "8px",
  },
  body: {
    transition: "transform 0.3s ease",
    [mobileBreak]: {
      paddingRight: "20px",
      marginTop: "20px"
    }
  },
  h1: {
    margin: "0px",
    fontFamily: "Moderat",
    fontWeight: "200",
    letterSpacing: "normal"
  },
  p: {
    color: "#888888",
    fontSize: "16px",
    fontFamily: "Moderat",
    marginTop: "5px",
    fontWeight: "300",
    letterSpacing: "normal"
  },
  listItemInfo: {
    display: "flex",
    flexFlow: "row nowrap",
    marginBottom: "5px",
    [mobileBreak]: {
      flexFlow: "column nowrap"
    }
  }
})

const ListItem = ({ num, title, body, onClick }) => {
  const classes = useStyles()

  return (
    <li className={classes.listItem} onClick={onClick}>
      <div className={classes.listItemInfo}>
        <div className={classes.listItemNumber}>{num}</div>
        <div className={classes.body}>
          <h1 className={classes.h1}>{title}</h1>
          <p className={classes.p}>{body}</p>
        </div>
      </div>
    </li>
  )
}

export default ListItem;