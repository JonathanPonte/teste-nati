import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';


import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Discipline from './pages/Discipline';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
    }

  }

  render() {
    return (
      <Router>
        <Switch>
         
              <Route exact path='/' render={Login}/>
              <Route path='/users' component={User} /> 
              <Route path='/courses' component={Courses} /> 
              <Route path='/course/:id' component={CourseDetail} />
              <Route path='/disciplines' component={Discipline} />
              <Redirect to="/" />
          
        </Switch>
      </Router>
    )
  }
}

export default App