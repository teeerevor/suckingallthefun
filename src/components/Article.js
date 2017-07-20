import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Post = styled.article`
  margin-bottom: 6em;
`;

const Heading = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.2em;
  margin-bottom: 0;

  a{
    color: #2E3A37;
    text-decoration: none;
  }
`;

const PostData = styled.span`
  font-size: 0.8em;
  color: rgba(46, 58, 55, 0.6);
`

const Article = ({title, date, content, url}) =>
  <Post>
    <Heading>{title}</Heading>
    <PostData>el Prego &ndash; {date}</PostData>
    <div className="body" dangerouslySetInnerHTML={{__html: content}}>
    </div>
  </Post>;

    //<Heading><Link to={url}>{title}</Link></Heading>
  //<p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
export default Article
