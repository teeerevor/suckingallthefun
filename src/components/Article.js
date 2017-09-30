import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Post = styled.article`
  margin-bottom: 6em;
`;

const Heading = styled.h2`
  font-family: 'aglet-slab', Georgia, serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.2em;
  margin-bottom: 0;

  a{
    color: #2E3A37;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
`;

const PostData = styled.span`
  font-size: 0.8em;
  color: rgba(46, 58, 55, 0.66);
`

const Article = ({title, date, content, url}) =>
  <Post>
    <Heading>
      <Link to={"/posts/"+url}>
        {title}
      </Link>
    </Heading>
    <PostData>el Prego &ndash; {date}</PostData>
    <div className="body" dangerouslySetInnerHTML={{__html: content}}>
    </div>
  </Post>;

  //<p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
export default Article;
