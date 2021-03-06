import React, { PureComponent } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';

export class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />          
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/' component={Home}/>
          <Route exact path='/:post_id' component={Post} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
