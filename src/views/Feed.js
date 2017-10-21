import React from 'react'
import Feed from 'feed';
import posts from '../utils/posts'

export default () => {
  const feed = new Feed({
    title: 'Feed Title',
    description: 'This is my personal feed!',
    id: 'http://example.com/',
    link: 'http://example.com/',
    image: 'http://example.com/image.png',
    favicon: 'http://example.com/favicon.ico',
    copyright: 'All rights reserved 2013, John Doe',
    feedLinks: {
      json: 'https://example.com/json',
      atom: 'https://example.com/atom',
    },
    author: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      link: 'https://example.com/johndoe'
    }
  });

  [...posts()].forEach(post => {
    const url = post[0];
    const {title, date, __content} = post[1];
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: 'A post with the fun sucked.',
      content: post.__content,
      author: [{
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        link: 'https://example.com/janedoe'
      }],
      date: post.date,
      image: post.image
    })
  });

  return (<pre>{feed.rss2()}</pre>);
}
