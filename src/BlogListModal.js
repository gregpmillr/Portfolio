import React from "react";
import { BlogList } from "./UI/BlogList";
import { global } from "./jss";
import withStyles, {createUseStyles} from 'react-jss'
import useBlogList from './UI/useBlogList';

const useStyles = createUseStyles({
  p: {
    height: 'auto',
    margin: '10px 50px',
    fontWeight: '500',
    color: '#fff',
    zIndex: '1',
    cursor: 'pointer'
  },
  '@media (max-width: 1050px)': {
    p: {
      margin: '10px 15px'
    }
  }
})

export const BlogListModal = withStyles(global)(() => {
  const myClasses = useStyles()
  const { isShowing, toggle } = useBlogList();

  return (
    <div onClick={toggle}>
      <p className={myClasses.p} onClick={toggle}>BLOG</p>
      <BlogList isShowing={isShowing} hide={toggle} />
    </div>
  )
})