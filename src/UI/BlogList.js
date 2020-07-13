import React from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss'
import { Transition } from 'react-transition-group';
import { DateTag } from "./DateTag";
import Yosemite from "../images/yosemite.jpg";

const useStyles = createUseStyles({
  container: {
    top: '0',
    left: '0',
    position: 'absolute',
    zIndex: '1',
    height: '100%',
    backgroundColor: '#000',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    paddingTop: '30px',
    boxSizing: 'border-box',
    transition: 'width .5s',
    '&:hover': {
      width: '100%',
    }
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
    animation: '$slideRight 0.5s forwards',
    overflowX: 'hidden',
  },
  entered: {
    width: '400px',
    overflow: 'auto'
  },
  exiting: {
    animation: '$slideLeft 0.5s forwards',
    overflow: 'hidden'
  },
  exited: {
    width: '0px',
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
  '@keyframes slideRight': {
    from: { width: '0px' },
    to: { width: '400px' }
  },
  '@keyframes slideRight-sm': {
    from: { width: '0px' },
    to: { width: '250px' }
  },
  '@keyframes slideLeft': {
    from: { width: '400px' },
    to: { width: '0px' }
  },
  '@keyframes slideLeft-sm': {
    from: { width: '250px' },
    to: { width: '0px' }
  },
  '@media (max-width: 1450px)': {
    entering: {
      animation: '$slideRight-sm 0.5s forwards'
    },
    entered: {
      width: '250px',
    },
    exiting: {
      animation: '$slideLeft-sm 0.5s forwards'
    },
  },
})

const posts = [
  {
    publishDate: 'December 16, 2018',
    title: 'Creativity Is More Than',
    description: 'Lorem ipsum color de schmidgt iwi lorem ipsum color',
  },
  {
    publishDate: 'December 16, 2018',
    title: 'Creativity Is More Than',
    description: 'Lorem ipsum color de schmidgt iwi lorem ipsum color',
  },
]

export const BlogList = ({ isShowing, hide }) => {
  const classes = useStyles();
  const listItems = posts.map((post, i) =>
    <div className={classes.box} key={i}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={Yosemite} alt="" />
      </div>
      <div className={classes.center}>
        <DateTag active={true} date={post.publishDate} />
      </div>
      <p className={classes.postTitle}>{post.title}</p>
      <p className={classes.postDescription}>{post.description}</p>
    </div>
  );

  return createPortal(
    <Transition in={isShowing} timeout={500}>
      {state => (
        <div className={`${classes.container} ${classes[state]}`} aria-modal aria-hidden tabIndex={-1} role="dialog">
          <button type="button" className={classes.close} data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h1 className={classes.h1}>Recent Posts</h1>
          <div className={classes.imagesContainer}>
            {listItems}
          </div>
        </div>
      )}

    </Transition>, document.body
  )
}