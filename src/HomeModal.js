import React from "react";
import { Modal } from "./UI/Modal";
import { global } from "./jss";
import withStyles, {createUseStyles} from 'react-jss'
import useModal from './UI/useModal';

const useStyles = createUseStyles({
  p: {
    height: 'auto',
    margin: '10px 50px',
    fontWeight: '500',
    color: '#fff',
    cursor: 'pointer',
    zIndex: '999',
  },
  '@media (max-width: 1050px)': {
    p: {
      margin: '10px 15px'
    }
  }
})

export const HomeModal = withStyles(global)(({text, children}) => {
  const myClasses = useStyles()
  const { isShowing, toggle } = useModal();

  return (
    <div>
      <p className={myClasses.p} onClick={toggle}>{text}</p>
      <Modal isShowing={isShowing} hide={toggle}>
        {children}
      </Modal>
    </div>
  )
})