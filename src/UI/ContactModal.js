import React from "react";
import { Modal } from "./Modal";
import { global } from "../jss";
import withStyles, {createUseStyles} from 'react-jss'
import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    if (!isShowing) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

const useStyles = createUseStyles({
  p: {
    height: 'auto',
    margin: '10px 50px',
    fontWeight: '500',
    color: '#fff',
    zIndex: '1',
    cursor: 'pointer'
  },
  modal: {
    width: '10% !important',
    height: '50% !important'
  },
  h1: {
    fontSize: '1.5em',
    marginTop: '40px',
    textAlign: 'center'
  },
  form: {

  },
  '@media (max-width: 1050px)': {
    p: {
      margin: '10px 15px'
    }
  }
})

export const ContactModal = withStyles(global)(() => {
  const classes = useStyles()
  const { isShowing, toggle } = useModal();

  return (
    <div onClick={toggle}>
      <p className={classes.p} onClick={toggle}>CONTACT</p>
      <Modal isShowing={isShowing} hide={toggle} rootClasses={`${classes.modal}`}>
        <h1 className={classes.h1}>CONTACT</h1>
        <form className={classes.form}>
          <label for="name">Name:</label>
          <input type="text" name="name" />
          <label for="email">Email:</label>
          <input type="text" name="email" />
          <label for="message">Message:</label>
          <input type="text" name="message" />
        </form>
      </Modal>
    </div>
  )
})