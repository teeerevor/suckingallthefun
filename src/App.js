import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import Helmet from 'react-helmet'
import Blog from './components/Blog';
import Post from './components/Post';
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import Footer from './components/Footer'
import Home from './views/Home'
import About from './views/About'
import NoMatch from './views/NoMatch'

const title = 'Sucking all the fun...'

class App extends Component {
  render () {
    return (
      <Router>
        <Wrapper>
          <Helmet title={title} />
          <Title>{title}</Title>
          <Switch>
            <Route exact path="/" component={Blog}/>
            <Route path="/about" component={About}/>
            <Route path="/posts/:title" component={Post}/>
            <Route component={NoMatch} />
          </Switch>
          <Footer>
            ⓒ el prego
          </Footer>
        </Wrapper>
      </Router>
    )
  }
}

export default App
