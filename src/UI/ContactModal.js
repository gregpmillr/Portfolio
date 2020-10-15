import React from "react";
import { createPortal } from 'react-dom';
import { global } from "../jss";
import withStyles, {createUseStyles} from 'react-jss'
import useCustomForm from "../hooks/useCustomForm";
import useContactForm from "../hooks/useContactForm";
import { Transition } from 'react-transition-group';

const useStyles = createUseStyles({
  p: {
    height: 'auto',
    margin: '10px 50px',
    fontWeight: '500',
    color: '#fff',
    zIndex: '1',
    cursor: 'pointer'
  },
  form: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px'
  },
  labelContainer: {
    display: 'block'
  },
  inputField: {
    border: '0px',
    backgroundColor: '#000',
    borderBottom: '1px solid #feb13e',
    padding: '10px 0px',
    color: '#fff',
    outline: 'none'
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0)',
    border: '1px solid #fff',
    color: '#fff',
    margin: '0 auto',
    padding: '0px 35px',
    height: '40px',
    textAlign: 'center',
    marginLeft: '30px'
  },
  inputContainer: {
    display: 'flex',
    flexFlow: 'column nowrap',
    margin: '15px'
  },
  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '0',
    left: '0',
    position: 'absolute',
    zIndex: '1',
    height: '200px',
    width: '100%',
    backgroundColor: '#000',
    transition: 'height .5s',
  },
  imagesContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    paddingTop: '30px',
  },
  close: {
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#fff',
    fontSize: '30px',
    float: 'right',
    cursor: 'pointer',
    position: 'absolute',
    right: '10px',
    top: '0',
  },
  entering: {
    animation: '$slideUp 0.5s forwards',
    overflowX: 'hidden',
  },
  entered: {
    width: '100%',
    height: '200px',
    overflow: 'auto'
  },
  exiting: {
    animation: '$slideDown 0.5s forwards',
    overflow: 'hidden'
  },
  exited: {
    height: '0px',
    overflow: 'hidden'
  },
  box: {
    height: 'max-content',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '40px 10px',
  },
  imageContainer: {
    maxHeight: '300px',
    maxWidth: '300px',
    overflow: 'hidden',
    margin: '0 auto',
    marginBottom: '10px'
  },
  image: {
    maxHeight: '300px',
    maxWidth: '300px'
  },
  center: {
    margin: '0 auto',
  },
  postTitle: {
    color: 'rgba(255,255,255,.85)',
    fontSize: '1.1em',
    fontWeight: '500',
    letterSpacing: '0.02em',
    textAlign: 'center',
    marginBottom: '10px'
  },
  postDescription: {
    color: 'rgba(255,255,255,.55)',
    fontSize: '1em',
    fontWeight: '500',
    letterSpacing: '0.02em',
    margin: '0px',
    textAlign: 'center'
  },
  h1: {
    fontFamily: 'Playfair Display',
    fontSize: '1.5em',
    textTransform: 'uppercase',
    margin: '20px',
    color: '#fff',
    fontWeight: '400',
    letterSpacing: '0.1em',
    textAlign: 'left'
  },
  '@keyframes slideUp': {
    from: { height: '0px' },
    to: { height: '200px' }
  },
  '@keyframes slideUp-sm': {
    from: { height: '0px' },
    to: { height: '100%' }
  },
  '@keyframes slideDown': {
    from: { height: '200px' },
    to: { height: '0px' }
  },
  '@keyframes slideDown-sm': {
    from: { height: '100%' },
    to: { height: '0px' }
  },
  '@media (max-width: 1450px)': {
    form: {
      flexFlow: 'column nowrap'
    },
    entering: {
      animation: '$slideUp-sm 0.5s forwards'
    },
    entered: {
      height: '100%',
    },
    exiting: {
      animation: '$slideDown-sm 0.5s forwards'
    },
    p: {
      margin: '10px 15px'
    },
    button: {
      marginTop: '30px',
      marginLeft: '0px'
    }
  },
})

const initialValues = {
  name: "",
  email: "",
  message: ""
}

const Form = ({isShowing, toggle}) => {
  const classes = useStyles()
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useCustomForm({
    initialValues,
    onSubmit: values => console.log({ values })
  });

  return createPortal(
    <Transition in={isShowing} timeout={500}>
      {state => (
        <div className={`${classes.container} ${classes[state]}`}>
          <button type="button" className={classes.close} data-dismiss="modal" aria-label="Close" onClick={toggle}>
            <span aria-hidden="true">&times;</span>
          </button>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.inputContainer}>
              <label className={classes.labelContainer} for="name">Name:</label>
              <input onChange={handleChange} value={values.name} className={classes.inputField} type="text" name="name" />
            </div>
            <div className={classes.inputContainer}>
              <label className={classes.labelContainer} for="email">Email:</label>
              <input onChange={handleChange} value={values.email} className={classes.inputField} type="text" name="email" />
            </div>
            <div className={classes.inputContainer}>
              <label className={classes.labelContainer} for="message">Message:</label>
              <input onChange={handleChange} value={values.message} className={classes.inputField} type="text" name="message" />
            </div>
            <button type="submit" className={classes.button}><span>Send</span></button>
          </form>
        </div>
      )}
    </Transition>, document.body
  )
}

export const ContactModal = withStyles(global)(() => {
  const classes = useStyles()
  const { isShowing, toggle } = useContactForm();
  return (
    <div>
      <p className={classes.p} onClick={toggle}>CONTACT</p>
      <Form isShowing={isShowing} toggle={toggle} />
    </div>
  )
})