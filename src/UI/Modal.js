import React from "react";
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss'
import { useState, useEffect } from 'react';

const useStyles = createUseStyles({
  close: {
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#fff',
    fontSize: '30px',
    float: 'right',
    cursor: 'pointer',
    position: 'absolute',
    right: '10px',
    '& span': {
      zIndex: '999',
    }
  }
})

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ keyCode }) {
    if (keyCode === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ keyCode }) => {
    if (keyCode === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
}

export const Modal = ({ isShowing, hide, rootClasses, children }) => {
  const classes = useStyles();
  const escPressed = useKeyPress(27);

  if (isShowing) {
    return createPortal(
      <div id="modal" className={`${rootClasses}`} aria-modal aria-hidden tabIndex={-1} role="dialog">
        { escPressed && hide()}
        <button type="button" className={classes.close} data-dismiss="modal" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times;</span>
        </button>
        {children}
      </div>, document.body
    )
  }
  return null;
}