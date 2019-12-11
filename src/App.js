import React, { createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from './components/Navigation';

const AuthContext = createContext()

class App extends React.Component {
  state = {
    isAuth: false,
    currentUser: ""
  }

  componentDidMount() {
    this.setState({
      isAuth: localStorage.getItem("email") === null ? false : true
    })
  }

  login = (email) => {
    localStorage.setItem("email", email)
    this.setState({
      isAuth: true,
      currentUser: localStorage.getItem("email")
    })
  }

  logout = () => {
    this.setState({
      isAuth: false
    })
    localStorage.removeItem("email")
  }

  render() {
    return (
      <AuthContext.Provider value={{ isAuth: this.state.isAuth, currentUser: this.state.currentUser, login: this.login, logout: this.logout }}>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    )
  }
}

export { AuthContext }
export default App;
