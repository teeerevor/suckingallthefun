import React from 'react'
import posts from '../utils/posts'
import Article from './Article'

const Blog = () =>
  <section>
    {[...posts()].map( post => {
      const url = post[0];
      const {title, date, __content} = post[1];
      return (
        <Article
          key={url}
          title={title}
          date={date}
          content={__content}
          url={url}
        />
    )})}
  </section>;

export default Blog;
