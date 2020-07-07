import React from "react";
import { Modal } from "./UI/Modal";
import { global } from "./jss";
import withStyles, {createUseStyles} from 'react-jss'
import useModal from './UI/useModal';

const useStyles = createUseStyles({
  image: {
    display: 'flex',
    flexFlow: 'column',
    flex: '1',
    position: 'relative',
    overflow: 'hidden',
    opacity: '1',
    height: '350px',
    width: '100%',
    transition: 'opacity 1000ms',
    textAlign: 'center',
    cursor: 'pointer',
    'hover': {
      background: 'rgba(0, 0, 0, .2)'
    }
  },
  p: {
    height: 'auto',
    margin: 'auto',
    color: '#fff',
    zIndex: '1',
    paddingBottom: '10px'
  },
  after: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    color: '#FFF',
    display: 'flex',
    background: 'rgba(0, 0, 0, .6)',
    justifyContent: 'center',
    alignItems: 'center',
    'span': {
      position: 'absolute',
      bottom: '20px',
    },
    'hover': {
      background: 'rgba(0, 0, 0, .2)'
    }
  },
  green: {
    background: 'rgba(79, 144, 19, 0.6)'
  },
  orange: {
    background: 'rgba(187, 102, 12, 0.71)'
  },
  blue: {
    background: 'rgba(34, 50, 180, 0.61)'
  },
  '@media (max-width: 1050px)': {
    image: {
      width: '100% !important',
      marginLeft: '0px !important',
    },
  }
})

export const HomeModal = withStyles(global)(({classes, text, style, color, children}) => {
  const myClasses = useStyles()
  const { isShowing, toggle } = useModal();

  return (
    <div className={`${classes.col} ${myClasses.image}`} style={style} onClick={toggle}>
        <p className={myClasses.p}>{text}</p>
        <div className={`${myClasses.after} ${myClasses[color]}`} />
        <Modal isShowing={isShowing} hide={toggle}>
          {children}
        </Modal>
    </div>
  )
})