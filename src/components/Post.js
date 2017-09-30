import 'github-markdown-css';
import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Article from './Article'
import posts from '../utils/posts'

const Post = ({ match }) => {
  var post;
  [...posts()].map( item => {
    const url = item[0];
    if (url === match.params.title)
      post = item;
  });

  const url = post[0];
  const {title, date, __content} = post[1];
  return (
    <section>
      <Helmet
          title={title}
          meta={[
            {'property': 'og:type', 'content': 'article'},
            {'property': 'og:title', 'content': title}
          ]}
      />
      <Link to={'/'}>« Back</Link>
      <Article
        key={url}
        title={title}
        date={date}
        content={__content}
        url={url}
      />
    </section>);
}

export default Post;
