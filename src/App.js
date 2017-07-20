import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { IndexRoute, Link, browserHistory } from 'react-router';
import Helmet from 'react-helmet'
import Blog from './components/Blog';
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import Footer from './components/Footer'
import Home from './views/Home'
import About from './views/About'
import NoMatch from './views/NoMatch'

const title = 'Sucking all the fun...'
const routes = [
  {
    title: 'Home',
    path: '/',
    component: Blog,
    exact: true
  },
  {
    title: 'About',
    path: '/about',
    component: About
  },
]

const posts = [
  {
    title: 'THE INCUBATOR',
    slug: 'the_incubator',
    date: '27 July 2007'
  }
]

class App extends Component {
  render () {
    return (
      <Router>
        <Wrapper>
          <Helmet title={title} />
          <Title>{title}</Title>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
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
